import React from "react";
import "./style.css";

export default function Movie({ text, image, id }) {
  if (image === "http://image.tmdb.org/t/p/w600_and_h900_bestv2/null") {
    image = require("../../../assets/noimage.png");
  }
  return (
    <div className={`movie_box box${id}`}>
      <div class="movie-img" style={{ backgroundImage: `url(${image})` }}></div>
      <span className="movie_name">{text}</span>
      <span className="about_movie">
        PG-13 / 2h 49min / Adventure, Drama, Sci-Fi
      </span>
      <div className="row">
        <div className="watch_btn">
          <h3 className="text">WATCH TRAILER</h3>
        </div>
        <div className="more_details">
          <h3 className="text">MORE DETAILS</h3>
        </div>
      </div>
    </div>
  );
}
