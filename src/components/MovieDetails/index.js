import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

import Cast from "../shared/Cast";
import Movie from "../shared/Movie";

import Carousel from "react-bootstrap/Carousel";
import Review from "../shared/Review";

import Navbar from "../Navbar";
import Footer from "../Footer";

import { ReactComponent as LineSvg } from "../../assets/grey-line.svg";

import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { query } = useParams();
  const [details, setDetails] = useState([]);
  const [genres, setGenres] = useState([]);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [similar, setSimilar] = useState([]);

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
          setGenres(data1.data.genres);
          setReviews(data4.data.results);
          let arr = [];
          let final = [];
          let start = 0;
          let end = 5;
          let size = data2.data.cast.length / 5;
          for (let i = 0; i < size; i++) {
            for (let j = start; j < end; j++) {
              arr.push(data2.data.cast[j]);
            }
            final.push(arr);
            arr = [];
            start += 5;
            end += 5;
          }
          setCast(final);
          arr = [];
          final = [];
          start = 0;
          end = 5;
          size = data3.data.results.length / 5;
          for (let i = 0; i < size; i++) {
            for (let j = start; j < end; j++) {
              arr.push(data3.data.results[j]);
            }
            final.push(arr);
            arr = [];
            start += 5;
            end += 5;
          }
          setSimilar(final);
        })
      );
  }, []);
  console.log(details);

  return (
    <div>
      <div className="main_container">
        <Navbar></Navbar>
        <div className="row_detail">
          <div className="mov_image">
            <img
              alt="trailer"
              className="play_trailer"
              src={require("../../assets/play.svg")}
            ></img>
            <img
              alt="poster"
              className="poster"
              src={`http://image.tmdb.org/t/p/w600_and_h900_bestv2/${details.poster_path}`}
            ></img>
          </div>
          <div className="mov_details">
            <span className="movie_title">{details.title}</span>

            {/* <div className="genre_star">
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
            </div> */}
            <div className="movie_container">
              <div className="other_div">
                <span className="movie_content title overview">
                  Overview :{" "}
                </span>
                <span className="movie_content content_details">
                  {details.overview}
                </span>
              </div>
              <div className="other_div">
                <span className="movie_content title">Other Details : </span>
                <div className="other_item">
                  <span className="movie_content heading">Genre : </span>
                  {genres.map((genre, i) => (
                    <span className="movie_content value">{genre.name}</span>
                  ))}
                </div>
                <div className="other_item">
                  <span className="movie_content heading">Release Date : </span>
                  <span className="movie_content value">
                    {details.release_date}
                  </span>
                </div>
                <div className="other_item">
                  <span className="movie_content heading">Adult : </span>
                  <span className="movie_content value">
                    {details.adult === false ? "No" : "Yes"}
                  </span>
                </div>
                <div className="other_item">
                  <span className="movie_content heading">
                    Original Language :{" "}
                  </span>
                  <span className="movie_content value">
                    {details.original_language}
                  </span>
                </div>
                <div className="other_item">
                  <span className="movie_content heading">Popularity : </span>
                  <span className="movie_content value">
                    {details.popularity}
                  </span>
                </div>
                <div className="other_item">
                  <span className="movie_content heading">Runtime : </span>
                  <span className="movie_content value">
                    {details.runtime} minutes
                  </span>
                </div>
              </div>
            </div>
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
                    ""
                  )
                )}
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        {reviews.length !== 0 ? (
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
                  ""
                )
              )}
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="container">
          <div className="header">
            <span className="heading">Similar Movies</span>
            <img
              className="line"
              src={require("../../assets/line.svg")}
              alt="line"
            />
          </div>
          <Carousel>
            {similar.map((shows, i) => (
              <Carousel.Item key={i}>
                {shows.map((show, j) => (
                  <Movie
                    id={j}
                    key={show.id}
                    item_id={show.id}
                    text={show.title}
                    type="movie"
                    image={`http://image.tmdb.org/t/p/w600_and_h900_bestv2/${show.poster_path}`}
                  />
                ))}
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
