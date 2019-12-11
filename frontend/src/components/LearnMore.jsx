import React from "react";
import "./styles/LearnMore.scss";

export default function LearnMore() {
  return (
    <div className="LearnMore">
      <section id="article">
        <article className="box">
          <p className="title">On parle de nous</p>
          <hr></hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p
            className="readMore" //onClick TODO
          >
            En savoir plus...
          </p>
        </article>
        <article className="box">
          <p className="title">Notre charte éthique</p>
          <hr></hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p
            className="readMore" //onClick TODO
          >
            En savoir plus...
          </p>
        </article>
        <article className="box">
          <p className="title">Les dons collectés</p>
          <hr></hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p
            className="readMore" //onClick TODO
          >
            En savoir plus...
          </p>
        </article>
      </section>
    </div>
  );
}
