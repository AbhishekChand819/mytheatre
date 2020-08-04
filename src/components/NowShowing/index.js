import React from "react";
import Movie from "../shared/Movie";

export default function NowShowing() {
  return (
    <div className="container">
      <div className="header">
        <span className="heading">Now Showing</span>
        <img
          className="line"
          src={require("../../assets/line.svg")}
          alt="line"
        />
      </div>
      <div className="main_movie">
        <Movie text="Penguin" image={require("../../assets/Rectangle 1.png")} />
        <Movie
          text="The Other Lamb"
          image={require("../../assets/Rectangle 2.png")}
        />
        <Movie
          text="French Biryani"
          image={require("../../assets/Rectangle 3.png")}
        />
        <Movie
          text="The One and Only Ivan"
          image={require("../../assets/Rectangle 4.png")}
        />
        <Movie
          text="Peter Rabbit 2: The <br />Runaway"
          image={require("../../assets/Rectangle 5.png")}
        />
        <Movie
          text="The New Mutants"
          image={require("../../assets/Rectangle 6.png")}
        />
        <Movie text="Law" image={require("../../assets/Rectangle 7.png")} />
        <Movie
          text="Gangubai Kathiawadi"
          image={require("../../assets/Rectangle 8.png")}
        />
        <Movie
          text="Satyameva Jayate 2"
          image={require("../../assets/Rectangle 9.png")}
        />
        <Movie
          text="No Time To Die"
          image={require("../../assets/Rectangle 10.png")}
        />
      </div>
    </div>
  );
}
