import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import ModalReview from "../ModalReview";
export default function Review({ author, authorid, message }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="wrapper">
      <div className="review">
        <div className="review-profile">
          <div className="review-profile__photo" href="#">
            <img
              alt="profile"
              className="profile-photo__img"
              src={require("../../../assets/user.png")}
            ></img>
          </div>
          <div className="review-profile__info" href="#">
            <span className="profile-info__name">{author}</span>
            <span className="profile-info__username">@Cid{authorid}</span>
          </div>
        </div>
        <div className="review-message">
          <p>{message}</p>
        </div>
        <div className="read_full" href="#">
          <span className="profile-info__name" onClick={handleShow}>
            Read Full Review
          </span>
        </div>
      </div>

      {window.innerWidth < 500 ? (
        <Modal
          classname="review_modal"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={true}
          style={{ left: "8%", top: "5%", height: "90%" }}
        >
          <Modal.Body>
            <div classname="modal_btns reviewmodal">
              <div classname="more_details" onClick={handleClose}>
                <h3 classname="text">CLOSE</h3>
              </div>
            </div>
            <ModalReview
              reviewid={authorid}
              reviewauthor={author}
              reviewmsg={message}
            ></ModalReview>
          </Modal.Body>
        </Modal>
      ) : (
        <Modal
          classname="review_modal"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={true}
          style={{ left: "8%", top: "5%", height: "90%" }}
        >
          <Modal.Body>
            <div classname="modal_btns reviewmodal">
              <div classname="more_details" onClick={handleClose}>
                <h3 classname="text">CLOSE</h3>
              </div>
            </div>
            <ModalReview
              reviewid={authorid}
              reviewauthor={author}
              reviewmsg={message}
            ></ModalReview>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}
