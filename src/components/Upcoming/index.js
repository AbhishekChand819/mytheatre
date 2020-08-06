import React, { useState, useEffect } from "react";
import Movie from "../shared/Movie";
import axios from "axios";
import PrimaryBtn from "../shared/PrimaryButton";

export default function Upcoming() {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/discover/movie", {
        params: {
          page: "1",
          region: "IN",
          include_adult: "false",
          sort_by: "primary_release_date.desc",
          primary_release_year: "2020",
          api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
          with_original_language: "hi",
        },
      })
      .then((response) => {
        setUpcoming(response.data.results);
      });
  }, []);

  Object.keys(upcoming).forEach((key) => {
    if (upcoming[key].poster_path == null) {
      delete upcoming[key];
    }
  });

  return (
    <div className="container" style={{ marginTop: 180 }}>
      <div className="header">
        <span className="heading">Upcoming</span>
        <img
          className="line3"
          src={require("../../assets/line.svg")}
          alt="line"
        />
      </div>
      <div className="main_movie">
        {upcoming.map((show) => (
          <Movie
            key={show.id}
            text={show.title}
            image={`http://image.tmdb.org/t/p/w600_and_h900_bestv2/${show.poster_path}`}
          />
        ))}
      </div>
      <PrimaryBtn text="See More"></PrimaryBtn>
    </div>
  );
}
