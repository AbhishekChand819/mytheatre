import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ModalReview({ reviewid }) {
  const [review, setReview] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/review/${reviewid}`, {
        params: {
          api_key: "1ca7fe3d77a06f7f13d28d6d54898ebf",
        },
      })
      .then((response) => {
        setReview(response.data);
      });
  }, []);
  return (
    <div class="modal-wrapper">
      <div class="modal-review">
        <div class="modal-review-profile">
          <div class="modal-review-profile__photo" href="#">
            <img
              alt="profile"
              class="profile-photo__img"
              src={require("../../../assets/user.png")}
            ></img>
          </div>
          <div class="modal-review-profile__info" href="#">
            <span class="profile-info__name">{review.author}</span>
            <span class="profile-info__username">@Cid{review.id}</span>
          </div>
        </div>
        <div class="modal-review-message">
          <p>{review.content}</p>
        </div>
      </div>
    </div>
  );
}
