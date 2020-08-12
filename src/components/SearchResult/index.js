import React from "react";
import Navbar from "../Navbar";

import Footer from "../Footer";

import { useParams } from "react-router-dom";

export default function SerchResult() {
  let { query } = useParams();
  console.log(query);
  return (
    <div>
      <div className="main_container">
        <Navbar></Navbar>
      </div>
      <Footer></Footer>
    </div>
  );
}
