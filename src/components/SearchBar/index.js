import React from "react";
import { useHistory } from "react-router-dom";

export default function SearchBar() {
  const history = useHistory();
  let textInput = React.createRef();
  function handleClick() {
    history.push(`/search/q=${textInput.current.value}`);
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      history.push(`/search/q=${textInput.current.value}`);
    }
  }
  return (
    <div>
      <input
        ref={textInput}
        className="search_bar"
        type="text"
        placeholder="Search..."
        onKeyDown={handleKeyDown}
      ></input>
      <img
        onClick={handleClick}
        className="search_icon"
        alt="Search icon"
        src={require("../../assets/search.svg")}
      ></img>
    </div>
  );
}
