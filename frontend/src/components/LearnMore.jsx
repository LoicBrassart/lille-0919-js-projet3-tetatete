import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/LearnMore.scss";
const { apiCall } = require("../conf");

export default function LearnMore() {
  const [showMeex, setShowMeex] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [showFounds, setShowFounds] = useState(false);
  const [totals, setTotals] = useState([]);

  useEffect(() => {
    axios.get(`${apiCall}/misc/total`).then(res => {
      setTotals(res.data);
    });
  }, []);

  return (
    <div className="LearnMore">
      <section>
        <article
          className="learnCard"
          onMouseEnter={() => setShowMeex(!showMeex)}
        >
          <span className={showMeex ? "shown" : ""}>
            <big>meeX,</big>
            <p>
              c'est aider les <big>organisations à but non lucratif.</big>
            </p>
            <p>Grace à sa</p>
            <big>méthode innovante,</big>
            <p>
              impactez <big>plus fort</big> et <big>plus largement</big> le don
              caritatif.
            </p>
          </span>
          <figure>
            <img src="img/learn-meex.jpg" alt="learn-meex" />
          </figure>
          <div className="content">
            <div className="titleBorder"></div>
            <div className="titleLayout">
              <h3>MEEX ?</h3>
              <p>
                En savoir plus <img src="img/moreInfos-1.svg" alt="" />
              </p>
            </div>
          </div>
        </article>

        <article
          className="learnCard"
          onMouseEnter={() => setShowChart(!showChart)}
        >
          <span className={showChart ? "shown" : ""}>
            <p>Notre mission ?</p>
            <big>Aider les plus démunis! </big>
            <p>
              Nous n'allons pas révolutionner le monde,
              <br />
              mais aporter un <big>soutien financer</big> est primordial pour
              les <big>associations caritatives.</big>
            </p>
            <p>
              En tant que donnateur, vivez une expérience{" "}
              <big>exeptionelle</big> et <big>unique !</big>
            </p>
          </span>
          <figure>
            <img src="img/learn-chart.jpg" alt="learn-chart" />
          </figure>
          <div className="content">
            <div className="titleBorder"></div>
            <div className="titleLayout">
              <h3>
                Charte
                <br />
                éthique
              </h3>
              <p>
                En savoir plus <img src="img/moreInfos-2.svg" alt="" />
              </p>
            </div>
          </div>
        </article>

        <article
          className="learnCard"
          onMouseEnter={() => setShowFounds(!showFounds)}
        >
          <span className={showFounds ? "shown" : ""}>
            <p>meeX, c'est :</p>
            <div className="stats">
              <big>{totals.totalDonation} €</big>
              <small>collectés généreusement</small>
            </div>

            <big>{totals.nb_asso}</big>
            <small>associations soutenues</small>
          </span>
          <figure>
            <img src="img/learn-founds.jpg" alt="learn-founds" />
          </figure>
          <div className="content">
            <div className="titleBorder"></div>
            <div className="titleLayout">
              <h3>
                Montants
                <br />
                Collectés
              </h3>
              <p>
                En savoir plus <img src="img/moreInfos-3.svg" alt="" />
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
