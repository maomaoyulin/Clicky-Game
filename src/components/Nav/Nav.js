import React from "react";
import "./Nav.css";

const Nav = (props) => (

  <nav className="nav nav-pills nav-fill">

    <li className="nav-item">
      <a className='nav-link' href='/'>{props.brand}</a>
    </li>

    <li className="nav-item navbar-text">
      {props.navText}
    </li>

    <li className="nav-item navbar-text">
      Score: {props.score} | Top Score: {props.topScore}
    </li>

  </nav>
);

export default Nav;
