import React from "react";
import "./styles/DonationButton.scss";

export default function DonationButton(props) {
  return (
    /* .map THIS COMPONENT TO GENERATE DONATION TO GENERATE DONATION POSSIBILITIES*/
    <article className="DonationCard">
      <p>
        <span>
          ?
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea at in
            modi, impedit reiciendis cupiditate amet quam aut ipsam omnis
            mollitia animi dolore sequi rem illo corporis ut soluta molestiae?
          </p>
        </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="clear"></div>
      <strong className="DonationValue">{props.value}</strong>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <i>* Lorem ipsum dolor sit.</i>
      <button className="DonationButton">{props.action}</button>
    </article>
  );
}
