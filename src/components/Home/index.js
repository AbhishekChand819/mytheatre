import React from "react";
import "./Style.css";
import Navbar from "../Navbar";
import Gallery from "../Gallery";
import NowShowing from "../NowShowing";
import Upcoming from "../Upcoming";
import Footer from "../Footer";
import Trending from "../Trending";

export default function Home() {
  return (
    <div>
      <div className="main_container">
        <Navbar></Navbar>
        <Gallery></Gallery>
        <NowShowing></NowShowing>
        <Upcoming></Upcoming>
        <Trending></Trending>
        <NowShowing></NowShowing>
      </div>
      <Footer></Footer>
    </div>
  );
}
