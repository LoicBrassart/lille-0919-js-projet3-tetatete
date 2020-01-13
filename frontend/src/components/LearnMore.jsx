import React, { useState } from "react";
import "./styles/LearnMore.scss";

export default function LearnMore() {
  const [showMeex, setShowMeex] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [showFounds, setShowFounds] = useState(false);
  return (
    <div className="LearnMore">
      <section>
        <article className="learnCard" onClick={() => setShowMeex(!showMeex)}>
          <span className={showMeex ? "shown" : ""}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ea
              perspiciatis excepturi velit, quaerat soluta accusamus enim fuga
              molestiae aperiam nostrum voluptatibus aspernatur, assumenda nobis
              facere, voluptatem iure totam nesciunt.
            </p>
          </span>
          <figure>
            <img src="img/learn-meex.jpg" alt="learn-meex" />
          </figure>
          <div className="content">
            <div className="titleBorder"></div>
            <div className="titleLayout">
              <h3>MEEX ?</h3>
            </div>
          </div>
        </article>

        <article className="learnCard" onClick={() => setShowChart(!showChart)}>
          <span className={showChart ? "shown" : ""}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ea
              perspiciatis excepturi velit, quaerat soluta accusamus enim fuga
              molestiae aperiam nostrum voluptatibus aspernatur, assumenda nobis
              facere, voluptatem iure totam nesciunt.
            </p>
          </span>
          <figure>
            <img src="img/learn-chart.jpg" alt="learn-meex" />
          </figure>
          <div className="content">
            <div className="titleBorder"></div>
            <div className="titleLayout">
              <h3>
                Charte
                <br />
                éthique
              </h3>
            </div>
          </div>
        </article>

        <article
          className="learnCard"
          onClick={() => setShowFounds(!showFounds)}
        >
          <span className={showFounds ? "shown" : ""}>
            <p>meeX, c'est :</p>
            <div className="stats">
              <big>2 €</big>
              <small>collectés généreusement</small>
            </div>

            <big>99</big>
            <small>associations soutenues</small>
          </span>
          <figure>
            <img src="img/learn-founds.jpg" alt="learn-meex" />
          </figure>
          <div className="content">
            <div className="titleBorder"></div>
            <div className="titleLayout">
              <h3>
                Montants
                <br />
                Collectés
              </h3>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
