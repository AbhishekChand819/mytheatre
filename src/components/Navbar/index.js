import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="home">Theatre</span>
      </Link>
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
          <SearchBar></SearchBar>
        </li>
      </ul>
    </div>
  );
}
