import React, { useState, useEffect } from "react";
import Trends from "../shared/Trends";
import axios from "axios";

export default function Trending() {
  const [trending, setTrending] = useState([]);
  const TrendArr = [];

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/movie/day", {
        params: {
          api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
        },
      })
      .then((response) => {
        for (let i = 0; i < 7; i++) {
          TrendArr.push(response.data.results[i]);
        }
        setTrending(TrendArr);
      });
  });

  return (
    <div className="main_area">
      <div className="header trending">
        <span className="heading">Trending</span>
        <img
          className="line trend"
          src={require("../../assets/line.svg")}
          alt="line"
        />
      </div>
      <div className="grids">
        {trending.map((trend, i) => (
          <Trends
            id={i}
            image={trend.poster_path}
            name={trend.title}
            key={trend.id}
          ></Trends>
        ))}
      </div>
    </div>
  );
}
