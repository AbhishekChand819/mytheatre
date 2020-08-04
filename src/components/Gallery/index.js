import React from "react";
import PrimaryBtn from "../shared/PrimaryButton";

export default function Gallery() {
  return (
    <div className="container">
      <div className="movie_details">
        <span className="genre">Action - Adventure - Fantasy</span>
        <br />
        <span className="name">Wonder Woman 1984</span>
        <p className="details">
          Set in the United States during the 1980s, a conflict arises between
          Diana Prince and the Soviet Union. Now, she must face her formidable
          foe, Barbara Ann Minerva.
        </p>
        <PrimaryBtn text="Book Now"></PrimaryBtn>
        <div className="arrows">
          <img
            className="previous"
            src={require("../../assets/previous.svg")}
          />
          <img className="next" src={require("../../assets/next.svg")} />
        </div>
      </div>
      <div className="movie_img">
        <img className="play" src={require("../../assets/play.svg")} />
        <div className="image1">
          <img src={require("../../assets/ww_verti.jpg")} />
        </div>
        <div className="image2">
          <img src={require("../../assets/ww.jpg")} />
        </div>
      </div>
    </div>
  );
}
