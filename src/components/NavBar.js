import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Link className="nav-link" to="/">
          <Navbar.Brand>Nombre tienda</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/productos/semillas">
                Semillas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/plantas">
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
