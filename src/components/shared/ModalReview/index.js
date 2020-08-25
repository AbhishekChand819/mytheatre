import React from "react";

export default function ModalReview({ reviewid, reviewauthor, reviewmsg }) {
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
            <span class="profile-info__name">{reviewauthor}</span>
            <span class="profile-info__username">@Cid{reviewid}</span>
          </div>
        </div>
        <div class="modal-review-message">
          <p>{reviewmsg}</p>
        </div>
      </div>
    </div>
  );
}
