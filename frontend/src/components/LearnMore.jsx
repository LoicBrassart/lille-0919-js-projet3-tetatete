import React from "react";
import "./styles/LearnMore.scss";

export default function LearnMore() {
  return (
    <div>
      <section id="article">
        <article className="box">
          <p id="title">On parle de nous</p>
          <hr></hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p
            id="readMore" //onClick TODO
          >
            En savoir plus...
          </p>
        </article>
        <article className="box">
          <p id="title">Notre charte éthique</p>
          <hr></hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p
            id="readMore" //onClick TODO
          >
            En savoir plus...
          </p>
        </article>
        <article className="box">
          <p id="title">Les dons collectés</p>
          <hr></hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p
            id="readMore" //onClick TODO
          >
            En savoir plus...
          </p>
        </article>
      </section>
    </div>
  );
}
