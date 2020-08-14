import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import Movie from "../shared/Movie";

import Footer from "../Footer";

import { useParams } from "react-router-dom";

export default function SearchResult() {
  const [search, setSearch] = useState([]);
  const { query } = useParams();
  let image = "";
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/search/multi", {
        params: {
          language: "en-US",
          query: query,
          include_adult: "false",
          page: "1",
          api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
        },
      })
      .then((response) => {
        setSearch(response.data.results);
      });
  }, [query, search]);

  return (
    <div>
      <div className="main_container">
        <Navbar></Navbar>
        <div className="srch_main">
          <span className="heading search">Search Results for "{query}" </span>
          <div className="srch_container">
            {search.map((show, j) => {
              return (() => {
                if (show.media_type === ("movie" || "tv")) {
                  if (show.poster_path) {
                    image = show.poster_path;
                  } else {
                    image = show.backdrop_path;
                  }
                  if (show.title) {
                    return (
                      <Movie
                        key={show.id}
                        text={show.title}
                        item_id={show.id}
                        type={show.media_type}
                        image={`http://image.tmdb.org/t/p/w600_and_h900_bestv2/${image}`}
                      />
                    );
                  } else {
                    return (
                      <Movie
                        key={show.id}
                        text={show.original_name}
                        item_id={show.id}
                        type={show.media_type}
                        image={`http://image.tmdb.org/t/p/w600_and_h900_bestv2/${show.poster_path}`}
                      />
                    );
                  }
                }
              })();
            })}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
