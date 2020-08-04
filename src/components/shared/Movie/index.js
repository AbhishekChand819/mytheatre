import React from "react";

export default function Movie({ text, image }) {
  return (
    <div className="movie_box">
      <img src={image} />
      <span className="movie_name">{text}</span>
    </div>
  );
}
