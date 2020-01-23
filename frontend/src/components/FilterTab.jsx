import React from "react";
import "./styles/FilterTab.scss";
import { useDispatch } from "react-redux";

function FilterTab(props) {
  const dispatch = useDispatch();
  return (
    <div className="FilterTab">
      <div className="center">
        <p>Filtrer parmis les tags :</p>
        <nav className="FiltersNav">
          <ul>
            <li>
              <button onClick={() => dispatch({ type: `${props.type}SANTE` })}>
                <img src="/img/sante.png" alt="Santé" title="Santé" />
              </button>
            </li>
            <li>
              <button
                onClick={() => dispatch({ type: `${props.type}HUMANITAIRE` })}
              >
                <img
                  src="/img/humanitaire.png"
                  alt="Humanitaire"
                  title="Humanitaire"
                />
              </button>
            </li>
            <li>
              <button
                onClick={() => dispatch({ type: `${props.type}CULTURE` })}
              >
                <img src="/img/culture.png" alt="Culture" title="Culture" />
              </button>
            </li>
            <li>
              <button onClick={() => dispatch({ type: `${props.type}SPORT` })}>
                <img src="/img/sport.png" alt="Sport" title="Sport" />
              </button>
            </li>
            <li>
              <button
                onClick={() => dispatch({ type: `${props.type}ECOLOGIE` })}
              >
                <img src="/img/ecologie.png" alt="Écologie" title="Écologie" />
              </button>
            </li>
            <li>
              <button
                onClick={() => dispatch({ type: `${props.type}EDUCATION` })}
              >
                <img
                  src="/img/education.png"
                  alt="Éducation"
                  title="Éducation"
                />
              </button>
            </li>
            <li>
              <button onClick={() => dispatch({ type: `${props.type}ALL` })}>
                <img
                  src="/img/corbeille.png"
                  alt="close"
                  title="Supprimer filtre"
                />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default FilterTab;
