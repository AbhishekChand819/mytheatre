import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import ModalReview from "../ModalReview";
export default function Review({ author, authorid, message }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div class="wrapper">
      <div class="review">
        <div class="review-profile">
          <div class="review-profile__photo" href="#">
            <img
              alt="profile"
              class="profile-photo__img"
              src={require("../../../assets/user.png")}
            ></img>
          </div>
          <div class="review-profile__info" href="#">
            <span class="profile-info__name">{author}</span>
            <span class="profile-info__username">@Cid{authorid}</span>
          </div>
        </div>
        <div class="review-message">
          <p>{message}</p>
        </div>
        <div class="read_full" href="#">
          <span class="profile-info__name" onClick={handleShow}>
            Read Full Review
          </span>
        </div>
      </div>

      {window.innerWidth < 500 ? (
        <Modal
          className="review_modal"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={true}
          style={{ left: "8%", top: "5%", height: "90%" }}
        >
          <Modal.Body>
            <div className="modal_btns reviewmodal">
              <div className="more_details" onClick={handleClose}>
                <h3 className="text">CLOSE</h3>
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
          className="review_modal"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={true}
          style={{ left: "8%", top: "5%", height: "90%" }}
        >
          <Modal.Body>
            <div className="modal_btns reviewmodal">
              <div className="more_details" onClick={handleClose}>
                <h3 className="text">CLOSE</h3>
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
