import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="home">Theatre</span>
      <ul className="main">
        <li>
          <span className="tab">Now Showing</span>
        </li>
        <li>
          <span className="tab">Upcoming</span>
        </li>
        <li>
          <span className="tab">Theaters</span>
        </li>
        <li>
          <input
            className="search_bar"
            type="text"
            placeholder="Search..."
          ></input>
          <img
            className="search_icon"
            alt="Search icon"
            src={require("../../assets/search.svg")}
          ></img>
        </li>
      </ul>
    </div>
  );
}
