import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faImages,
  faThumbtack,
  faHeart,
  faChartLine,
  faFire,
  faMagic,
  faGem,
  faCaretUp,
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
          CPH RATINGS
        </Link>
        <hr />
      </div>
      <ul id="navContent">
        <NavigationItem icon={faPalette} label="Your Work" to="/your-work" />
        <NavigationItem icon={faImages} label="Assets" to="/assets" />
        <NavigationItem
          icon={faThumbtack}
          label="Pinned Items"
          to="/pinned-items"
        />
        <hr />
        <NavigationItem icon={faHeart} label="Following" to="/following" />
        <NavigationItem icon={faChartLine} label="Trending" to="/trending" />
        <NavigationItem icon={faFire} label="Challenges" to="/challenges" />
        <NavigationItem icon={faMagic} label="Spark" to="/spark" />
        <hr />
        <NavigationItem icon={faGem} label="Codepen Pro" to="/codepen-pro" />
        <div id="navContentHighlight"></div>
      </ul>
    </div>
  );
};

export default Navigation;
