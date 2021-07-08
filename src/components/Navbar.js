import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as NavLinkReactstrap,
  NavbarText
} from 'reactstrap';


import { NavLink } from "react-router-dom";

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">wp.data Shop</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLinkReactstrap>
                <NavLink exact activeStyle={{ fontWeight: "bold", color: "red" }} to="/">Home (List)</NavLink>
              </NavLinkReactstrap>
            </NavItem>
            <NavItem>
              <NavLinkReactstrap>
                <NavLink activeStyle={{ fontWeight: "bold", color: "red" }} to="/cart">Cart</NavLink>
              </NavLinkReactstrap>
            </NavItem>
            <NavItem>
              <NavLinkReactstrap>
                <NavLink activeStyle={{ fontWeight: "bold", color: "red" }}  to="/edit">Edit</NavLink>
              </NavLinkReactstrap>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;