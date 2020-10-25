import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  return (
    <>
      <Navbar expand="md">
        <Link className="nav-link" to="/">
          <img src={logo} alt="Logo Audrey, plantas y semillas"></img>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              {/* <NavDropdown.Item as={Link} to="/productos/semillas">
                Semillas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/plantas">
                Plantas
              </NavDropdown.Item> */}
              <NavDropdown.Item
                as={Link}
                to={`/categories/EyolZ78wrbKeqyNPp0jv`}
              >
                Semillas
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={`/categories/1yrzKw8JZFcFVp4mc2RJ`}
              >
                Plantas
              </NavDropdown.Item>
            </NavDropdown>
            <Link className="nav-link" to="/cart">
              <CartIcon />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
