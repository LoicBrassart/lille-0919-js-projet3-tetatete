import React from "react";
import "./styles/FilterTab.scss";

function FilterTab(props) {
  return (
    <div className="FilterTab">
      <div className="center">
        <p>Filtrer parmis les {props.filterType} :</p>
        <nav className="FiltersNav">
          <ul>
            <li>
              <button>
                <img src="https://via.placeholder.com/40x40?text=Icon" alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src="https://via.placeholder.com/40x40?text=Icon" alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src="https://via.placeholder.com/40x40?text=Icon" alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src="https://via.placeholder.com/40x40?text=Icon" alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src="https://via.placeholder.com/40x40?text=Icon" alt="" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default FilterTab;
