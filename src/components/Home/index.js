import React from "react";
import "./Style.css";
import Navbar from "../Navbar";
import Gallery from "../Gallery";
import NowShowing from "../NowShowing";
import MostPopular from "../MostPopular";
import Upcoming from "../Upcoming";
import Footer from "../Footer";

export default function Home() {
  return (
    <div>
      <div className="main_container">
        <Navbar></Navbar>
        <Gallery></Gallery>
        <NowShowing></NowShowing>
        <MostPopular></MostPopular>
        <Upcoming></Upcoming>
      </div>
      <Footer></Footer>
    </div>
  );
}
