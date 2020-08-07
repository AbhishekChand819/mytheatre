import React from "react";
import PrimaryBtn from "../shared/PrimaryButton";
import { Slide } from "react-slideshow-image";

export default function Gallery() {
  const properties = {
    duration: 5000,
    transitionDuration: 600,
    autoplay: false,
    infinite: false,
    prevArrow: (
      <img
        className="previous"
        alt="previous"
        src={require("../../assets/previous.svg")}
      />
    ),
    nextArrow: (
      <img className="next" alt="next" src={require("../../assets/next.svg")} />
    ),
  };

  return (
    <Slide {...properties}>
      <div className="container each-slide">
        <div className="movie_details">
          <span className="genre">Action</span>
          <br />
          <span className="name">Wonder Woman 1984</span>
          <p className="details">
            Set in the United States during the 1980s, a conflict arises between
            Diana Prince and the Soviet Union. Now, she must face her formidable
            foe, Barbara Ann Minerva.
          </p>
          <PrimaryBtn text="Book Now"></PrimaryBtn>
        </div>
        <div className="movie_img slide1">
          <img
            className="play"
            alt="play"
            src={require("../../assets/play.svg")}
          />
          <div className="image1">
            <img src={require("../../assets/ww_verti.jpg")} alt="vertical" />
          </div>
          <div className="image2">
            <img src={require("../../assets/ww.jpg")} alt="horizontal" />
          </div>
        </div>
      </div>
      <div className="container each-slide">
        <div className="movie_details">
          <span className="genre">Adventure</span>
          <br />
          <span className="name">Wonder Woman 1984</span>
          <p className="details">
            Set in the United States during the 1980s, a conflict arises between
            Diana Prince and the Soviet Union. Now, she must face her formidable
            foe, Barbara Ann Minerva.
          </p>
          <PrimaryBtn text="Book Now"></PrimaryBtn>
        </div>
        <div className="movie_img slide2">
          <img
            className="play"
            alt="play"
            src={require("../../assets/play.svg")}
          />
          <div className="image1">
            <img src={require("../../assets/ww_verti.jpg")} alt="vertical" />
          </div>
          <div className="image2">
            <img src={require("../../assets/ww.jpg")} alt="horizontal" />
          </div>
        </div>
      </div>
      <div className="container each-slide">
        <div className="movie_details">
          <span className="genre">Fantasy</span>
          <br />
          <span className="name">Wonder Woman 1984</span>
          <p className="details">
            Set in the United States during the 1980s, a conflict arises between
            Diana Prince and the Soviet Union. Now, she must face her formidable
            foe, Barbara Ann Minerva.
          </p>
          <PrimaryBtn text="Book Now"></PrimaryBtn>
        </div>
        <div className="movie_img slide3">
          <img
            className="play"
            alt="play"
            src={require("../../assets/play.svg")}
          />
          <div className="image1">
            <img src={require("../../assets/ww_verti.jpg")} alt="vertical" />
          </div>
          <div className="image2">
            <img src={require("../../assets/ww.jpg")} alt="horizontal" />
          </div>
        </div>
      </div>
    </Slide>
  );
}
