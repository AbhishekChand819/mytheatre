import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Trailer from "../Trailer";
import PrimaryBtn from "../PrimaryButton";
import { useHistory } from "react-router-dom";

export default function SlideMovie({
  id,
  title,
  overview,
  backdrop,
  poster,
  item_id,
  type,
}) {
  const [show, setShow] = useState(false);
  const history = useHistory();

  function handleClick() {
    history.push(`/${type}/${item_id}`);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container each-slide">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
        centered
      >
        {window.innerWidth < 500 ? (
          <>
            <Modal.Header>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Trailer movie={title}></Trailer>
              <div className="modal_btns">
                <div
                  className="watch_btn"
                  onClick={() => {
                    handleShow();
                    handleClick();
                  }}
                >
                  <h3 className="text">MORE DETAILS</h3>
                </div>
                <div className="more_details" onClick={handleClose}>
                  <h3 className="text">CLOSE</h3>
                </div>
              </div>
            </Modal.Body>
          </>
        ) : (
          <>
            <Modal.Header>
              <Modal.Title>{title}</Modal.Title>
              <div className="modal_btns">
                <div
                  className="watch_btn"
                  onClick={() => {
                    handleShow();
                    handleClick();
                  }}
                >
                  <h3 className="text">MORE DETAILS</h3>
                </div>
                <div className="more_details" onClick={handleClose}>
                  <h3 className="text">CLOSE</h3>
                </div>
              </div>
            </Modal.Header>
            <Modal.Body>
              <Trailer movie={title}></Trailer>
            </Modal.Body>
          </>
        )}
      </Modal>
      <div className="movie_details">
        <span className="genre">Action</span>
        <br />
        <span className="name">{title}</span>
        <p className="details">{overview}</p>
        <div
          onClick={() => {
            handleClick();
          }}
        >
          <PrimaryBtn text="More Details"></PrimaryBtn>
        </div>
      </div>
      <div className={`movie_img slide${id + 1}`}>
        <img
          className="play"
          alt="play"
          onClick={handleShow}
          src={require("../../../assets/play.svg")}
        />
        <div className="image1">
          <img
            src={`http://image.tmdb.org/t/p/w600_and_h900_bestv2/${backdrop}`}
            alt="vertical"
          />
        </div>
        <div className="image2">
          <img
            src={`http://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster}`}
            alt="horizontal"
          />
        </div>
      </div>
    </div>
  );
}
