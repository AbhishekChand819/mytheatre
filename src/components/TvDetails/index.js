import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

export default function TvDetails() {
  const [details, setDeatails] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    console.log(query);
    //   axios
    //     .get("https://api.themoviedb.org/3/search/multi", {
    //       params: {
    //         language: "en-US",
    //         query: query,
    //         include_adult: "false",
    //         page: "1",
    //         api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
    //       },
    //     })
    //     .then((response) => {
    //       setSearch(response.data.results);
    //     });
  }, [query]);

  return <div></div>;
}
