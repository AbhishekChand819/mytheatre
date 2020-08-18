import React, { useState, useEffect } from "react";
import axios from "axios";
import { Slide } from "react-slideshow-image";

import SlideMovie from "../shared/SlideMovie";

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
  }, []);
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
  return (
    <Slide {...properties}>
      {popular.map((movie, i) => (
        <SlideMovie
          backdrop={movie.backdrop_path}
          id={i}
          overview={movie.overview}
          poster={movie.poster_path}
          title={movie.title}
          key={movie.id}
          item_id={movie.id}
          type="movie"
        ></SlideMovie>
      ))}
    </Slide>
  );
}
