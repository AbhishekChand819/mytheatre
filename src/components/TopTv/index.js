import React, { useState, useEffect } from "react";
import Movie from "../shared/Movie";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

export default function TopTv() {
  const [toptv, setTopTv] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/discover/tv", {
        params: {
          page: "1",
          include_null_first_air_dates: "false",
          sort_by: "popularity.desc",
          language: "en-US",
          api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
        },
      })
      .then((response) => {
        if (window.innerWidth < 600) {
          let arr = [];
          let final = [];
          let start = 0;
          let end = 1;
          let size = response.data.results.length / 1;
          for (let i = 0; i < size; i++) {
            for (let j = start; j < end; j++) {
              arr.push(response.data.results[j]);
            }
            final.push(arr);
            arr = [];
            start += 1;
            end += 1;
          }
          setTopTv(final);
        } else {
          let arr = [];
          let final = [];
          let start = 0;
          let end = 5;
          let size = response.data.results.length / 5;
          for (let i = 0; i < size; i++) {
            for (let j = start; j < end; j++) {
              arr.push(response.data.results[j]);
            }
            final.push(arr);
            arr = [];
            start += 5;
            end += 5;
          }
          setTopTv(final);
        }
      });
  }, []);

  return (
    <div className="container toptv">
      <div className="header">
        <span className="heading">Top TV Shows</span>
        <img
          className="line"
          src={require("../../assets/line.svg")}
          alt="line"
        />
      </div>
      <Carousel>
        {toptv.map((tvs, i) => (
          <Carousel.Item key={i}>
            {tvs.map((tv, j) => (
              <Movie
                id={j}
                key={tv.id}
                item_id={tv.id}
                text={tv.name}
                type="tv"
                image={`http://image.tmdb.org/t/p/w600_and_h900_bestv2/${tv.poster_path}`}
              />
            ))}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
