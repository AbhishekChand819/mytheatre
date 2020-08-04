import React from "react";

export default function Movie({ text, image }) {
  return (
    <div className="movie_box">
      <img src={image} alt="movie" />
      <span className="movie_name">{text}</span>
    </div>
  );
}
