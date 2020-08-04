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
          <span className="tab">Signup</span>
        </li>
        <li>
          <span className="tab">Signin</span>
        </li>
      </ul>
    </div>
  );
}
