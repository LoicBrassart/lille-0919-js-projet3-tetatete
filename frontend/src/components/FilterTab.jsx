import React from "react";
import "./styles/FilterTab.scss";
import { useSelector, useDispatch } from "react-redux";

function FilterTab() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <div className="FilterTab">
      <div className="center">
        <p>Filtrer parmis les tags</p>
        <nav className="FiltersNav">
          <ul>
            <li>
              <button onClick={() => dispatch({ type: "SANTE" })}>
                <img src="/img/sante.png" alt="Santé" title="Santé" />
              </button>
            </li>
            <li>
              <button onClick={() => dispatch({ type: "HUMANITAIRE" })}>
                <img
                  src="/img/humanitaire.png"
                  alt="Humanitaire"
                  title="Humanitaire"
                />
              </button>
            </li>
            <li>
              <button onClick={() => dispatch({ type: "CULTURE" })}>
                <img src="/img/culture.png" alt="Culture" title="Culture" />
              </button>
            </li>
            <li>
              <button onClick={() => dispatch({ type: "SPORT" })}>
                <img src="/img/sport.png" alt="Sport" title="Sport" />
              </button>
            </li>
            <li>
              <button onClick={() => dispatch({ type: "ECOLOGIE" })}>
                <img src="/img/ecologie.png" alt="Écologie" title="Écologie" />
              </button>
            </li>
            <li>
              <button onClick={() => dispatch({ type: "EDUCATION" })}>
                <img
                  src="/img/education.png"
                  alt="Éducation"
                  title="Éducation"
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
