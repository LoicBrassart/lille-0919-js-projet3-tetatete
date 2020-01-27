import React, { useEffect } from "react";
import "./styles/FilterTab.scss";
import { useDispatch, useSelector } from "react-redux";

function FilterTab(props) {
  const filterType = useSelector(
    props.type === "AMB_"
      ? state => state.filterAmbassadors
      : state => state.filterCauses
  );
  const dispatch = useDispatch();

  const tagsList = [
    {
      id: 1,
      tagName: "Santé",
      reducerAction: "SANTE"
    },
    {
      id: 2,
      tagName: "Humanitaire",
      reducerAction: "HUMANITAIRE"
    },
    {
      id: 3,
      tagName: "Culture",
      reducerAction: "CULTURE"
    },
    {
      id: 4,
      tagName: "Sport",
      reducerAction: "SPORT"
    },
    {
      id: 5,
      tagName: "Écologie",
      reducerAction: "ECOLOGIE"
    },
    {
      id: 6,
      tagName: "Éducation",
      reducerAction: "EDUCATION"
    },
    {
      id: 7,
      tagName: "Tous",
      reducerAction: "ALL"
    }
  ];

  return (
    <div className="FilterTab">
      <div className="center">
        <p>Filtrer parmis les tags :</p>
        <nav className="FiltersNav">
          <ul>
            {tagsList.map(tag => {
              return (
                <li>
                  <span
                    className={filterType === `${tag.id}` ? "isActive" : ""}
                    onClick={() =>
                      dispatch({ type: `${props.type}${tag.reducerAction}` })
                    }
                  >
                    <img
                      src={`/img/${tag.id}.png`}
                      alt={tag.tagName}
                      title={tag.tagName}
                    />
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default FilterTab;
