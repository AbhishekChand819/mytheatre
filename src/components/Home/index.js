import React from "react";
import Navbar from "../Navbar";
import Gallery from "../Gallery";
import NowShowing from "../NowShowing";
import Upcoming from "../Upcoming";
import Footer from "../Footer";
import Trending from "../Trending";
import TopTv from "../TopTv";

export default function Home() {
  return (
    <div>
      <div className="main_container">
        <Navbar></Navbar>
        <Gallery></Gallery>
        <NowShowing></NowShowing>
        <Upcoming></Upcoming>
        <Trending></Trending>
        <TopTv></TopTv>
      </div>
      <Footer></Footer>
    </div>
  );
}
