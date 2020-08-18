import React from "react";

export default function Cast({ text, image, id, item_id, type }) {
  if (image === "http://image.tmdb.org/t/p/w600_and_h900_bestv2/null") {
    image = require("../../../assets/noimage.png");
  }
  return (
    <div className={`movie_box box${id}`}>
      <div
        className="movie-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <span className="movie_name">{text}</span>
    </div>
  );
}
