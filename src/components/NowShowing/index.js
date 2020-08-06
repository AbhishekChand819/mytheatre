import React, { useState, useEffect } from "react";
import Movie from "../shared/Movie";
import axios from "axios";

export default function NowShowing() {
  const [showing, setShowing] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/now_playing", {
        params: {
          page: "1",
          language: "en-US",
          api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
        },
      })
      .then((response) => {
        setShowing(response.data.results);
      });
  }, []);

  return (
    <div className="container">
      <div className="header">
        <span className="heading">Now Showing</span>
        <img
          className="line"
          src={require("../../assets/line.svg")}
          alt="line"
        />
      </div>
      <div className="main_movie">
        {showing.map((show) => (
          <Movie
            key={show.id}
            text={show.title}
            image={`http://image.tmdb.org/t/p/w600_and_h900_bestv2/${show.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
}
