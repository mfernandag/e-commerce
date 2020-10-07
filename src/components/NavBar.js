import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        {/* <Navbar.Brand href="/">Nombre tienda</Navbar.Brand> */}
        <Link className="nav-link" to="/">
          <Navbar.Brand>Nombre tienda</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/productos">
              Productos
            </Link>
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
