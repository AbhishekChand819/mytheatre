import React, { useState, useEffect } from "react";
import Movie from "../shared/Movie";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

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
        let arr = [];
        let final = [];
        let start = 0;
        let end = 5;
        let size = response.data.results.length / 5;
        for (let i = 0; i < size; i++) {
          for (var j = start; j < end; j++) {
            arr.push(response.data.results[j]);
          }
          final.push(arr);
          arr = [];
          start += 5;
          end += 5;
        }
        setShowing(final);
      });
  }, []);

  console.log(1);

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
      <Carousel>
        {showing.map((shows, i) => (
          <Carousel.Item key={i}>
            {shows.map((show, j) => (
              <Movie
                id={j}
                key={show.id}
                item_id={show.id}
                text={show.title}
                type="movie"
                image={`http://image.tmdb.org/t/p/w600_and_h900_bestv2/${show.poster_path}`}
              />
            ))}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
