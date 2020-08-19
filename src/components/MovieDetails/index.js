import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

import Cast from "../shared/Cast";
import Carousel from "react-bootstrap/Carousel";
import Review from "../shared/Review";

import Navbar from "../Navbar";
import Footer from "../Footer";

import { ReactComponent as LineSvg } from "../../assets/grey-line.svg";

import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { query } = useParams();
  const [details, setDetails] = useState([]);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get(`https://api.themoviedb.org/3/movie/${query}`, {
          params: {
            api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
          },
        }),
        axios.get(`https://api.themoviedb.org/3/movie/${query}/credits`, {
          params: {
            api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
          },
        }),
        axios.get(`https://api.themoviedb.org/3/movie/${query}/similar`, {
          params: {
            api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
            language: "en-US",
            page: "1",
          },
        }),
        axios.get(`https://api.themoviedb.org/3/movie/${query}/reviews`, {
          params: {
            api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
            language: "en-US",
          },
        }),
      ])
      .then(
        axios.spread((data1, data2, data3, data4) => {
          setDetails(data1.data);
          setReviews(data4.data.results);
          console.log(data4.data.results);
          let arr = [];
          let final = [];
          let start = 0;
          let end = 6;
          let size = data2.data.cast.length / 6;
          for (let i = 0; i < size; i++) {
            for (var j = start; j < end; j++) {
              arr.push(data2.data.cast[j]);
            }
            final.push(arr);
            arr = [];
            start += 6;
            end += 6;
          }
          setCast(final);
        })
      );
  }, []);

  return (
    <div>
      <div className="main_container">
        <Navbar></Navbar>
        <div className="row_detail">
          <div className="mov_image">
            <img
              className="play_trailer"
              src={require("../../assets/play.svg")}
            ></img>
            <img
              className="poster"
              src={`http://image.tmdb.org/t/p/w600_and_h900_bestv2/${details.poster_path}`}
            ></img>
          </div>
          <div className="mov_details">
            <span className="movie_title">{details.title}</span>
            <LineSvg className="line_white"></LineSvg>

            <div className="genre_star">
              <span className="movie_genre">
                Genres : Action Adventure Fantasy
              </span>
              <div className="star_container">
                <span className="movie_genre">Ratings : </span>
                <div>
                  <img
                    alt="play"
                    style={{ width: "25px" }}
                    src={require("../../assets/star.svg")}
                  />
                  <img
                    alt="play"
                    style={{ width: "25px" }}
                    src={require("../../assets/star.svg")}
                  />
                  <img
                    alt="play"
                    style={{ width: "25px" }}
                    src={require("../../assets/star.svg")}
                  />
                  <img
                    alt="play"
                    style={{ width: "25px" }}
                    src={require("../../assets/half-star.svg")}
                  />
                  <img
                    alt="play"
                    style={{ width: "25px" }}
                    src={require("../../assets/empty-star.svg")}
                  />
                </div>
              </div>
            </div>
            <LineSvg className="line_white"></LineSvg>

            <span className="movie_content">{details.overview}</span>
            <LineSvg className="line_white"></LineSvg>

            <div className="other_div">
              <div className="other_item">
                <span className="movie_content">
                  Release Date:&nbsp; {details.release_date}
                </span>
              </div>
              <div className="other_item runtime">
                <span className="movie_content">
                  Runtime:&nbsp; {details.runtime} minutes
                </span>
              </div>
            </div>
            <LineSvg className="line_white"></LineSvg>
          </div>
        </div>
        <div className="cast_container">
          <span className="heading">Cast</span>
          <img
            className="line"
            src={require("../../assets/line.svg")}
            alt="line"
          />
          <Carousel>
            {cast.map((shows, i) => (
              <Carousel.Item key={i}>
                {shows.map((show, j) =>
                  show ? (
                    <Cast
                      id={j}
                      key={show.id}
                      item_id={show.id}
                      text={show.name}
                      type="movie"
                      image={`http://image.tmdb.org/t/p/w600_and_h900_bestv2/${show.profile_path}`}
                    />
                  ) : (
                    <h1></h1>
                  )
                )}
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="review_container">
          <span className="heading">Reviews</span>
          <img
            className="line"
            src={require("../../assets/line.svg")}
            alt="line"
          />
          <div className="review_main">
            {reviews.map((review, i) =>
              i < 6 ? (
                <Review
                  author={review.author}
                  authorid={review.id}
                  message={review.content}
                  key={i}
                ></Review>
              ) : (
                <h1></h1>
              )
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
