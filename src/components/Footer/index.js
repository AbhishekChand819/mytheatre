import React from "react";

export default function Footer() {
  return (
    <div className="container footer">
      <div className="main_footer">
        <span className="home">Theatre</span>
        <ul className="list" style={{ paddingLeft: 200 }}>
          <li>Company</li>
          <li>Home</li>
          <li>About Us</li>
          <li>Community</li>
        </ul>
        <ul className="list">
          <li>Find A Movie</li>
          <li>In Theatres</li>
          <li>Upcoming</li>
          <li>Browse More Theatres</li>
        </ul>
        <ul className="list">
          <li>Help</li>
          <li>Contact Us</li>
          <li>FAQ</li>
        </ul>
        <ul className="list">
          <li>Legal</li>
          <li>Terms Of Use</li>
          <li>Policy</li>
        </ul>
      </div>
      <div className="copyright">
        <span>Copyright 2020 ©. All Rights Reserved.</span>
      </div>
    </div>
  );
}
