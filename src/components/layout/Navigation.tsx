import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBeerMugEmpty,
  faScissors,
  faMartiniGlassCitrus,
  faMugHot,
  faUtensils,
  faImages,
  faThumbtack,
  faCalendarDays,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navigation.scss";

interface navigationProps {
  label: string;
  to: string;
  icon?: any;
}

const NavigationItem = ({ icon, label, to }: navigationProps) => (
  <li className="navItem">
    <Link to={to}>
      <FontAwesomeIcon icon={icon} />
      <span>{label}</span>
    </Link>
  </li>
);

const Navigation = () => {
  return (
    <div id="navBar">
      <div id="navHeader">
        <Link id="navTitle" to="/">
          <span>CPH RATINGS</span>
        </Link>
        <hr />
      </div>
      <ul id="navContent">
        <NavigationItem
          icon={faChartLine}
          label="Trending Places"
          to="/trending"
        />
        <NavigationItem icon={faImages} label="Assets" to="/assets" />
        <NavigationItem
          icon={faThumbtack}
          label="Pinned Places"
          to="/pinned-items"
        />
        <hr />
        <NavigationItem icon={faBeerMugEmpty} label="Bars" to="/bars" />
        <NavigationItem icon={faScissors} label="Barbers" to="/barbers" />
        <NavigationItem icon={faMugHot} label="Cafees" to="/cafees" />
        <NavigationItem
          icon={faMartiniGlassCitrus}
          label="Night Clubs"
          to="/clubs"
        />
        <NavigationItem icon={faUtensils} label="Restaurants" to="/events" />
        <NavigationItem icon={faCalendarDays} label="Events" to="/events" />
        <hr />

        <div id="navContentHighlight"></div>
      </ul>
    </div>
  );
};

export default Navigation;
