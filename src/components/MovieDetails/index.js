import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

import Navbar from "../Navbar";
import Footer from "../Footer";

import { ReactComponent as LineSvg } from "../../assets/grey-line.svg";

import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { query } = useParams();
  const [details, setDetails] = useState([]);
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
        axios.get(`https://api.themoviedb.org/3/movie/${query}/videos`, {
          params: {
            api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
            language: "en-US",
          },
        }),
      ])
      .then(
        axios.spread((data1, data2, data3, data4) => {
          setDetails(data1.data);
          console.log(data1.data);
        })
      );
    // .get(`https://api.themoviedb.org/3/movie/${query}`, {
    //   params: {
    //     api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
    //   },
    // })
    // .then((response) => {
    //   setDetails(response.data);
    // });
  }, [details]);

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
      </div>
      <Footer></Footer>
    </div>
  );
}
