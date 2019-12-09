import React from "react";
import "./styles/InfoProfilePage.scss";

function InfoProfilePage() {
  return (
    <div className='"infoProfilepage'>
      <img
        classname="profileImage"
        src="https://via.placeholder.com/300x300"
        alt="..."
      />
      <div>
        <h2>Lorem ipsum</h2>
        <img
          className="profileTag"
          src="https://via.placeholder.com/50x50"
          alt="..."
        />
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
        recusandae. Totam laboriosam, odio eveniet minima magnam deleniti! Neque
        explicabo corporis, quidem mollitia optio excepturi aspernatur non autem
        laudantium error sunt.
      </p>
    </div>
  );
}

export default InfoProfilePage;
