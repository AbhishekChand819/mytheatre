import React from "react";
const Gradient = [
  "linear-gradient(rgba(204, 30, 88, 0.6), rgba(20, 20, 20, 0.6))",
  "linear-gradient(rgba(31, 136, 168, 0.767),rgba(14, 46, 65, 0.9))",
  "linear-gradient(rgba(84, 86, 175, 0.9),rgba(27, 27, 85, 0.9))",
  "linear-gradient(rgba(74, 190, 122, 0.767),rgba(6, 66, 48, 0.9))",
  "linear-gradient(rgba(128, 74, 190, 0.767),rgba(42, 6, 66, 0.9))",
  "linear-gradient(rgba(128, 34, 90, 0.567),rgba(42, 6, 66, 0.9))",
  "linear-gradient(rgba(28, 14, 230, 0.767),rgba(42, 6, 66, 0.9))",
  "linear-gradient(rgba(70, 168, 50, 0.767),rgba(42, 6, 66, 0.9))",
  "linear-gradient(rgba(238, 74, 190, 0.767),rgba(42, 6, 66, 0.9))",
];

export default function Trends({ name, id, image }) {
  return (
    <div className={`card-${id + 1}`} key={id}>
      <div className="card">
        <div
          className="card__side card__side--front"
          id={`front-${id + 1}`}
          style={{
            backgroundImage: `${Gradient[id]},url(http://image.tmdb.org/t/p/w600_and_h900_bestv2/${image})`,
          }}
        >
          <div className="text-box">
            <h1 className="text-box-middle">{name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
