import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Trailer from "../Trailer";
import { useHistory } from "react-router-dom";

export default function Movie({ text, image, id, item_id, type }) {
  const [show, setShow] = useState(false);
  const history = useHistory();
  function handleClick() {
    history.push(`/${type}/${item_id}`);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (image === "http://image.tmdb.org/t/p/w600_and_h900_bestv2/null") {
    image = require("../../../assets/noimage.png");
  }
  return (
    <div className={`movie_box box${id}`}>
      <div
        className="movie-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <span className="movie_name">{text}</span>
      <div className="row">
        <div className="watch_btn" onClick={handleShow}>
          <h3 className="text">WATCH TRAILER</h3>
        </div>
        <div className="more_details" onClick={handleClick}>
          <h3 className="text">MORE DETAILS</h3>
        </div>
      </div>
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
              <Modal.Title>{text}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Trailer movie={text}></Trailer>
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
              <Modal.Title>{text}</Modal.Title>
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
              <Trailer movie={text}></Trailer>
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
}
