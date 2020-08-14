import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Trailer from "../Trailer";
import { useHistory } from "react-router-dom";

const Gradient = [
  "linear-gradient(rgba(204, 30, 88, 0.6), rgba(20, 20, 20, 0.6))",
  "linear-gradient(rgba(31, 136, 168, 0.767),rgba(14, 46, 65, 0.9))",
  "linear-gradient(rgba(84, 86, 175, 0.9),rgba(27, 27, 85, 0.9))",
  "linear-gradient(rgba(74, 190, 122, 0.767),rgba(6, 66, 48, 0.9))",
  "linear-gradient(rgba(128, 74, 190, 0.767),rgba(42, 6, 66, 0.9))",
  "linear-gradient(rgba(238, 74, 190, 0.67),rgba(42, 6, 66, 0.9))",
  "linear-gradient(rgba(68, 84, 10, 0.67),rgba(42, 6, 66, 0.9))",
];

export default function Trends({ name, id, image, item_id, type }) {
  const [show, setShow] = useState(false);
  const history = useHistory();

  function handleClick() {
    history.push(`/${type}/${item_id}`);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={`card-${id + 1}`} key={id}>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
        centered
      >
        <Modal.Header>
          <Modal.Title>{name}</Modal.Title>
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
          <Trailer movie={name}></Trailer>
        </Modal.Body>
      </Modal>
      <div className="card" onClick={handleShow}>
        <div
          className="card__side card__side--front"
          id={`front-${id + 1}`}
          style={{
            backgroundImage: `${Gradient[id]},url(http://image.tmdb.org/t/p/w600_and_h900_bestv2/${image})`,
          }}
        >
          <div className="text-box">
            <h1 className="text-box-middle">{name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
