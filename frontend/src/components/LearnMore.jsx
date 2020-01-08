import React from "react";
import ReactTooltip from "react-tooltip";
import "./styles/LearnMore.scss";

export default function LearnMore() {
  return (
    <div className="LearnMore center">
      <ul className="list">
        <li data-tip data-for="press" data-class="press">
          <img src="https://via.placeholder.com/300x350" alt="..."></img>
        </li>
        <li data-tip data-for="cause">
          <img src="https://via.placeholder.com/300x350" alt="..."></img>
        </li>
        <li data-tip data-for="donation">
          <img src="https://via.placeholder.com/300x350" alt="..."></img>
        </li>

        <ReactTooltip id="press" place="left" type="info">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </div>
        </ReactTooltip>
        <ReactTooltip id="cause" place="bottom" type="info">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </div>
        </ReactTooltip>
        <ReactTooltip id="donation" place="right" type="info">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </div>
        </ReactTooltip>
      </ul>
    </div>
  );
}
