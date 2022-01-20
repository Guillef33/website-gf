import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { StyledNavLink } from "../StyledNavLink";
import NavBarHam from './NavBarHam';


function Nav () {

    return (
      <nav className="container">
        <h2>
          <StyledNavLink to="/" className="BrandLink">
            Magnetitte devs
          </StyledNavLink>
        </h2>
        {/* <NavBarHam /> */}
      </nav>
    );
  }

export default Nav;
