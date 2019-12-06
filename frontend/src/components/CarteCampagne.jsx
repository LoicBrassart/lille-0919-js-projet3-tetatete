import React from "react";
import "./styles/CarteCampagne.scss";

function CarteCampagne() {
  return (
    <div className="carte_campagne">
      <img
        className="placeholder"
        src="/img/placeholder_carte_campagne.png"
        alt=""
      ></img>
      <h2 className="titre_campagne">Lorem ipsum </h2>
      <p className="timer">15 jours restants</p>
      <p className="description_campagne">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        fugit, commodi eaque quod voluptatem labore, et, sapiente nisi inventore
        qui velit laboriosam expedita quasi veniam impedit vel tenetur ipsam
        earum.
      </p>
      <a className="more_info" href="...">
        <img src="/img/more_info.png" alt="more info"></img>
      </a>
    </div>
  );
}

export default CarteCampagne;
