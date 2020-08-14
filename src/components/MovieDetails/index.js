import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../Navbar";
import Footer from "../Footer";
import PrimaryBtn from "../shared/PrimaryButton";

import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { query } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .all([
        axios.get(`https://api.themoviedb.org/3/movie/${query}`, {
          params: {
            api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
          },
        }),
        axios.get(`https://api.themoviedb.org/3/movie/${query}/credits`, {
          params: {
            api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
          },
        }),
        axios.get(`https://api.themoviedb.org/3/movie/${query}/similar`, {
          params: {
            api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
            language: "en-US",
            page: "1",
          },
        }),
        axios.get(`https://api.themoviedb.org/3/movie/${query}/videos`, {
          params: {
            api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
            language: "en-US",
          },
        }),
      ])
      .then(
        axios.spread((data1, data2, data3, data4) => {
          console.log(data1.data);
          console.log(data2.data);
          console.log(data3.data);
          console.log(data4.data);
        })
      );
    // .get(`https://api.themoviedb.org/3/movie/${query}`, {
    //   params: {
    //     api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
    //   },
    // })
    // .then((response) => {
    //   setDetails(response.data);
    // });
  }, [details]);

  return (
    <div>
      <div className="main_container">
        <Navbar></Navbar>
        <div className="row">
          <div className="mov_image">
            <img src={require("../../assets/Rectangle 3.png")}></img>
          </div>
          <div className="mov_details">
            <span className="details">Finding Dory</span>
            <span className="details">
              lorem dsv svgsd vdsfvsd vs dfvsd dsf sdf sdfs
            </span>
            <PrimaryBtn text="Watch Trailer"></PrimaryBtn>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
