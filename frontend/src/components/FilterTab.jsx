import React from "react";
import "./styles/FilterTab.scss";
import { useDispatch, useSelector } from "react-redux";

function FilterTab(props) {
  const filterType = useSelector(
    props.type === "AMB_"
      ? state => state.filterAmbassadors
      : state => state.filterCauses
  );
  const dispatch = useDispatch();
  console.log(filterType);
  return (
    <div className="FilterTab">
      <div className="center">
        <p>Filtrer parmis les tags :</p>
        <nav className="FiltersNav">
          <ul>
            <li>
              <span
                className={filterType === 1 ? "isActive" : ""}
                onClick={() => dispatch({ type: `${props.type}SANTE` })}
              >
                <img src="/img/sante.png" alt="Santé" title="Santé" />
              </span>
            </li>
            <li>
              <span
                className={filterType === 2 ? "isActive" : ""}
                onClick={() => dispatch({ type: `${props.type}HUMANITAIRE` })}
              >
                <img
                  src="/img/humanitaire.png"
                  alt="Humanitaire"
                  title="Humanitaire"
                />
              </span>
            </li>
            <li>
              <span
                className={filterType === 3 ? "isActive" : ""}
                onClick={() => dispatch({ type: `${props.type}CULTURE` })}
              >
                <img src="/img/culture.png" alt="Culture" title="Culture" />
              </span>
            </li>
            <li>
              <span
                className={filterType === 4 ? "isActive" : ""}
                onClick={() => dispatch({ type: `${props.type}SPORT` })}
              >
                <img src="/img/sport.png" alt="Sport" title="Sport" />
              </span>
            </li>
            <li>
              <span
                className={filterType === 5 ? "isActive" : ""}
                onClick={() => dispatch({ type: `${props.type}ECOLOGIE` })}
              >
                <img src="/img/ecologie.png" alt="Écologie" title="Écologie" />
              </span>
            </li>
            <li>
              <span
                className={filterType === 6 ? "isActive" : ""}
                onClick={() => dispatch({ type: `${props.type}EDUCATION` })}
              >
                <img
                  src="/img/education.png"
                  alt="Éducation"
                  title="Éducation"
                />
              </span>
            </li>
            <li>
              <span
                className={filterType === null ? "isActive" : ""}
                onClick={() => dispatch({ type: `${props.type}ALL` })}
              >
                <img
                  src="/img/corbeille.png"
                  alt="close"
                  title="Supprimer filtre"
                />
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default FilterTab;
