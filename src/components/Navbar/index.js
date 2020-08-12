import React from "react";

export default function Navbar() {
  let textInput = React.createRef();

  function handleClick() {
    console.log(textInput.current.value);
  }
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
            ref={textInput}
            className="search_bar"
            type="text"
            placeholder="Search..."
          ></input>
          <img
            onClick={handleClick}
            className="search_icon"
            alt="Search icon"
            src={require("../../assets/search.svg")}
          ></img>
        </li>
      </ul>
    </div>
  );
}
