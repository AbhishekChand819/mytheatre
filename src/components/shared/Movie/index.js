import React from "react";

export default function Movie({ text, image }) {
  if (image === "http://image.tmdb.org/t/p/w600_and_h900_bestv2/null") {
    image = require("../../../assets/noimage.png");
  }
  return (
    <div className="movie_box">
      <img src={image} alt="movie" />
      <span className="movie_name">{text}</span>
    </div>
  );
}
