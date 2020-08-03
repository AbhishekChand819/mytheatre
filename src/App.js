import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="main_container">
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
        <div className="container">
          <div className="movie_details">
            <span className="genre">Action - Adventure - Fantasy</span>
            <br />
            <span className="name">Wonder Woman 1984</span>
            <p className="details">
              Set in the United States during the 1980s, a conflict arises
              between Diana Prince and the Soviet Union. Now, she must face her
              formidable foe, Barbara Ann Minerva.
            </p>
            <button className="book_btn">Book Now</button>
            <div className="arrows">
              <img
                className="previous"
                src={require("./assets/previous.svg")}
              />
              <img className="next" src={require("./assets/next.svg")} />
            </div>
          </div>
          <div className="movie_img">
            <img className="play" src={require("./assets/play.svg")} />
            <div className="image1">
              <img src={require("./assets/ww_verti.jpg")} />
            </div>
            <div className="image2">
              <img src={require("./assets/ww.jpg")} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="header">
            <span className="heading">Now Showing</span>
            <img
              className="line"
              src={require("./assets/line.svg")}
              alt="line"
            />
          </div>
          <div className="main_movie">
            <div className="movie_box">
              <img src={require("./assets/Rectangle 1.png")} />
              <span className="movie_name">Penguin</span>
            </div>
            <div className="movie_box">
              <img src={require("./assets/Rectangle 2.png")} />
              <span className="movie_name">The Other Lamb</span>
            </div>
            <div className="movie_box">
              <img src={require("./assets/Rectangle 3.png")} />
              <span className="movie_name">French Biryani</span>
            </div>
            <div className="movie_box">
              <img src={require("./assets/Rectangle 4.png")} />
              <span className="movie_name">The One and Only Ivan</span>
            </div>
            <div className="movie_box">
              <img src={require("./assets/Rectangle 5.png")} />
              <span className="movie_name">
                Peter Rabbit 2: The <br />
                Runaway
              </span>
            </div>
            <div className="movie_box">
              <img src={require("./assets/Rectangle 6.png")} />
              <span className="movie_name">The New Mutants</span>
            </div>
            <div className="movie_box">
              <img src={require("./assets/Rectangle 7.png")} />
              <span className="movie_name">Law</span>
            </div>
            <div className="movie_box">
              <img src={require("./assets/Rectangle 8.png")} />
              <span className="movie_name">Gangubai Kathiawadi</span>
            </div>
            <div className="movie_box">
              <img src={require("./assets/Rectangle 9.png")} />
              <span className="movie_name">Satyameva Jayate 2</span>
            </div>
            <div className="movie_box">
              <img src={require("./assets/Rectangle 10.png")} />
              <span className="movie_name">No Time To Die</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="header">
            <span className="heading">The Most Popular Upcoming</span>
            <img className="line2" src={require("./assets/line.svg")} />
          </div>
          <div className="movie_img upcoming">
            <img className="play" src={require("./assets/play.svg")} />
            <div className="image1">
              <img src={require("./assets/km_verti.jpg")} />
            </div>
            <div className="image2">
              <img src={require("./assets/km.jpg")} />
            </div>
          </div>
          <div className="movie_details upcoming">
            <span className="genre">
              Drama
              <br />
            </span>
            <span className="name">The King`s Man</span>
            <p className="details">
              As some of history`s worst criminals and tyrants conspire to start
              a war that will leave humanity in peril, one man braves the odds
              and races against time to stop them all.
            </p>
            <button className="book_btn">Book Now</button>
          </div>
        </div>
        <div className="container" style={{ marginTop: 180 }}>
          <div className="header">
            <span className="heading">Upcoming</span>
            <img className="line3" src={require("./assets/line.svg")} />
          </div>
          <div className="main_movie">
            <div className="movie_box">
              <img src={require("./assets/Rectangle 1.png")} />
              <span className="movie_name">Penguin</span>
            </div>
            <div className="movie_box">
              <img src={require("./assets/Rectangle 2.png")} />
              <span className="movie_name">The Other Lamb</span>
            </div>
            <div className="movie_box">
              <img src={require("./assets/Rectangle 3.png")} />
              <span className="movie_name">French Biryani</span>
            </div>
            <div className="movie_box">
              <img src={require("./assets/Rectangle 4.png")} />
              <span className="movie_name">The One and Only Ivan</span>
            </div>
            <div className="movie_box">
              <img src={require("./assets/Rectangle 5.png")} />
              <span className="movie_name">
                Peter Rabbit 2: The <br />
                Runaway
              </span>
            </div>
            <div className="movie_box">
              <img src={require("./assets/Rectangle 6.png")} />
              <span className="movie_name">The New Mutants</span>
            </div>
            <div className="movie_box">
              <img src={require("./assets/Rectangle 7.png")} />
              <span className="movie_name">Law</span>
            </div>
            <div className="movie_box">
              <img src={require("./assets/Rectangle 8.png")} />
              <span className="movie_name">Gangubai Kathiawadi</span>
            </div>
            <div className="movie_box">
              <img src={require("./assets/Rectangle 9.png")} />
              <span className="movie_name">Satyameva Jayate 2</span>
            </div>
            <div className="movie_box">
              <img src={require("./assets/Rectangle 10.png")} />
              <span className="movie_name">No Time To Die</span>
            </div>
          </div>
          <button className="book_btn see_more">See More</button>
        </div>
      </div>
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
    </div>
  );
}

export default App;
