import React from "react";
import "./styles/FilterTab.scss";
import { tsPropertySignature } from "@babel/types";

function FilterTab(props) {
  return (
    <div className="FilterTab">
      <div className="center">
        {/* GET CONCERNED TITLE TO INSERT IT THERE ( AMBASSADORS? CAUSES? ) */}
        <p>Filtrer parmis les {props.filterType}:</p>
        <nav className="FiltersNav">
          <ul>
            {/* USE .map TO GENERATE BUTTONS ACCORDDING TO THE NUMBER OF CATEGORIES INVOLVED*/}
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
