import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";

export default function TvDetails() {
  const [details, setDetails] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/${query}`, {
        params: {
          api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
        },
      })
      .then((response) => {
        setDetails(response.data);
      });
  }, [details]);

  return <div></div>;
}
