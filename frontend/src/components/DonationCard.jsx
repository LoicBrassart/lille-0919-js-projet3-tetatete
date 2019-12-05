import React from "react";
import "./styles/DonationCard.scss";

function DonationCard() {
  return (
    /* .map THIS COMPONENT TO GENERATE DONATION TO GENERATE DONATION POSSIBILITIES*/
    <article className="DonationCard">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
        consequuntur inventore minima voluptatibus delectus optio?
      </p>
      <strong className="DonationValue">10€ *</strong>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        harum doloribus, molestates abyssus abyssum invocate.
      </p>
      <i>* Lorem ipsum dolor sit amet consectetur adipisicing elit.</i>
      <button className="DonationButton">Je donne !</button>
    </article>
  );
}

export default DonationCard;
