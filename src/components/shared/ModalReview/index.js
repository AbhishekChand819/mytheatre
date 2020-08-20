import React from "react";
import "./style.css";

export default function ModalReview({ author, authorid, message }) {
  return (
    <div class="wrapper">
      <div class="review">
        <div class="review-profile">
          <div class="review-profile__photo" href="#">
            <img
              alt="profile"
              class="profile-photo__img"
              src="https://pbs.twimg.com/profile_images/631495506770817024/6OX4_2Gq.png"
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
          <span class="profile-info__name">Read Full Review</span>
        </div>
      </div>
    </div>
  );
}
