import React, { useState, useEffect } from "react";
import PrimaryBtn from "../shared/PrimaryButton";
import { Slide } from "react-slideshow-image";
import axios from "axios";

export default function Gallery() {
  const [popular, setPopular] = useState([]);
  const popularArr = [];

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/discover/movie", {
        params: {
          region: "IN",
          sort_by: "popularity.desc",
          include_adult: "true",
          page: "1",
          api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
        },
      })
      .then((response) => {
        for (let i = 0; i < 3; i++) {
          popularArr.push(response.data.results[i]);
        }
        setPopular(popularArr);
      });
  });
  const properties = {
    duration: 5000,
    transitionDuration: 600,
    autoplay: false,
    infinite: true,
    prevArrow: (
      <img
        className="previous"
        alt="previous"
        src={require("../../assets/previous.svg")}
      />
    ),
    nextArrow: (
      <img className="next" alt="next" src={require("../../assets/next.svg")} />
    ),
  };
  // console.log(popular);
  // genre_ids[]
  return (
    <Slide {...properties}>
      {popular.map((movie, i) => (
        <div className="container each-slide">
          <div className="movie_details">
            <span className="genre">Action</span>
            <br />
            <span className="name">{movie.title}</span>
            <p className="details">{movie.overview}</p>
            <PrimaryBtn text="More Details"></PrimaryBtn>
          </div>
          <div className={`movie_img slide${i + 1}`}>
            <img
              className="play"
              alt="play"
              src={require("../../assets/play.svg")}
            />
            <div className="image1">
              <img
                src={`http://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.backdrop_path}`}
                alt="vertical"
              />
            </div>
            <div className="image2">
              <img
                src={`http://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
                alt="horizontal"
              />
            </div>
          </div>
        </div>
      ))}
    </Slide>
  );
}
