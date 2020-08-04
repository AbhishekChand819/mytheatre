import React from "react";
import PrimaryBtn from "../shared/PrimaryButton";

export default function MostPopular() {
  return (
    <div className="container">
      <div className="header">
        <span className="heading">The Most Popular Upcoming</span>
        <img
          className="line2"
          src={require("../../assets/line.svg")}
          alt="line"
        />
      </div>
      <div className="movie_img upcoming">
        <img
          className="play"
          src={require("../../assets/play.svg")}
          alt="play"
        />
        <div className="image1">
          <img src={require("../../assets/km_verti.jpg")} alt="vertical" />
        </div>
        <div className="image2">
          <img src={require("../../assets/km.jpg")} alt="horizontal" />
        </div>
      </div>
      <div className="movie_details upcoming">
        <span className="genre">
          Drama
          <br />
        </span>
        <span className="name">The King`s Man</span>
        <p className="details">
          As some of history`s worst criminals and tyrants conspire to start a
          war that will leave humanity in peril, one man braves the odds and
          races against time to stop them all.
        </p>
        <PrimaryBtn text="Book Now"></PrimaryBtn>
      </div>
    </div>
  );
}
