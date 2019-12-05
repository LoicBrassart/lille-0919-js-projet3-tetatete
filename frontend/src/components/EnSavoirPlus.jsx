import React from "react";
import "./styles/EnSavoirPlus.scss";

export default function EnSavoirPlus() {
  return (
    <div>
      <section id="article">
        <article
          className="box" //onClick TODO
        >
          <p id="titre">On parle de nous</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p id="lirePlus">En savoir plus...</p>
        </article>
        <article
          className="box" //onClick TODO
        >
          <p id="titre">Notre charte éthique</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p id="lirePlus">En savoir plus...</p>
        </article>
        <article
          className="box" //onClick TODO
        >
          <p id="titre">Les dons collectés</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p id="lirePlus">En savoir plus...</p>
        </article>
      </section>
    </div>
  );
}
