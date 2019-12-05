import React from "react";
import "./styles/EnSavoirPlus.scss";

export default function EnSavoirPlus() {
  return (
    <div>
      <section id="article">
        <article
          className="box" //onClick TODO
        >
          <img
            src="https://via.placeholder.com/500x200"
            alt="Article de presse"
          ></img>
          <p id="titre">On parle de nous</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p id="lirePlus">Lire plus...</p>
        </article>
        <article
          className="box" //onClick TODO
        >
          <img
            src="https://via.placeholder.com/500x200"
            alt="Charte éthique"
          ></img>
          <p id="titre">Notre charte éthique</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p id="lirePlus">Lire plus...</p>
        </article>
        <article
          className="box" //onClick TODO
        >
          <img
            src="https://via.placeholder.com/500x200"
            alt="Dons collectés"
          ></img>
          <p id="titre">Les dons collectés</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p id="lirePlus">Lire plus...</p>
        </article>
      </section>
    </div>
  );
}
