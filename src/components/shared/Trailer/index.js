import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

export default function Trailer({ movie }) {
  const [link, setLink] = useState("");
  //   useEffect(() => {
  //     axios
  //       .get("https://www.googleapis.com/youtube/v3/search?", {
  //         params: {
  //           part: "snippet",
  //           q: `${movie} trailer`,
  //           key: "AIzaSyC6GzKceImAbeDlV2HHwrt3bD9ID5h6_Yc",
  //         },
  //       })
  //       .then((response) => {
  //         setLink(response.data.items[0].id["videoId"]);
  //       });
  //   }, []);
  return (
    <ReactPlayer
      //   url={`https://youtu.be/${link}`}
      //   url="https://youtu.be/ItXGXPxy03o"
      url="https://youtu.be/luai0p0y2zE"
      controls
      playbackRate={2}
      width="896px"
      height="504px"
    />
  );
}
