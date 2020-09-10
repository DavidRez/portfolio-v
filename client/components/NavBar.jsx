import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div id="nav">
      <ul>
        <li>
          <NavLink to="/" data-type="all">
            <a className={props.category === '/' ? "current" : ""}>ALL</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/web">
            <a data-type="web" className={props.category === '/web' ? "current" : ""}>WEB</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/photo">
            <a data-type="photo" className={props.category === '/photo' ? "current" : ""}>PHOTO</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/illustration">
            <a data-type="illustration" className={props.category === '/illustration' ? "current" : ""}>ILLUSTRATION</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/other">
            <a data-type="other" className={props.category === '/other' ? "current" : ""}>OTHER</a>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
