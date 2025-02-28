import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import { NavLink } from "react-router-dom";

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navLinkStyle = {
    padding: ".5rem 1rem",
    display: "block",
    color: "#212529",
    textDecoration: "none",
  };

  const activeStyle = {
    ...navLinkStyle,
    fontWeight: "bold",
    color: "red",
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                exact
                style={navLinkStyle}
                activeStyle={activeStyle}
                to="/"
              >
                Home (List)
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={navLinkStyle}
                activeStyle={activeStyle}
                to="/cart"
              >
                Cart
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={navLinkStyle}
                activeStyle={activeStyle}
                to="/edit"
              >
                Edit
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
