import React from "react";
import "./styles/EnSavoirPlus.scss";

export default function EnSavoirPlus() {
  return (
    <div>
      <section id="article">
        <article className="box">
          <p id="titre">On parle de nous</p>
          <hr></hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p
            id="lirePlus" //onClick TODO
          >
            En savoir plus...
          </p>
        </article>
        <article className="box">
          <p id="titre">Notre charte éthique</p>
          <hr></hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p
            id="lirePlus" //onClick TODO
          >
            En savoir plus...
          </p>
        </article>
        <article className="box">
          <p id="titre">Les dons collectés</p>
          <hr></hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p
            id="lirePlus" //onClick TODO
          >
            En savoir plus...
          </p>
        </article>
      </section>
    </div>
  );
}
