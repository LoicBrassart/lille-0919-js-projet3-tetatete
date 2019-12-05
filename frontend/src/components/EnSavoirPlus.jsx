import React from "react";
import "./styles/EnSavoirPlus.scss";

export default function EnSavoirPlus() {
  return (
    <div>
      <section id="article">
        <article className="box">
          <img
            src="https://via.placeholder.com/500x200"
            alt="Article de presse"
          ></img>
          <p>On parle de nous</p>
          <p id="lirePlus">Lire plus...</p>
        </article>
        <article className="box">
          <img
            src="https://via.placeholder.com/500x200"
            alt="Charte éthique"
          ></img>
          <p>Notre charte éthique</p>
          <p id="lirePlus">Lire plus...</p>
        </article>
        <article className="box">
          <img
            src="https://via.placeholder.com/500x200"
            alt="Dons collectés"
          ></img>
          <p>Les dons collectés</p>
          <p id="lirePlus">Lire plus...</p>
        </article>
      </section>
    </div>
  );
}
