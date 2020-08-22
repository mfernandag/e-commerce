import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import CartIcon from "./CartIcon";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="#home">Nombre tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#carrito">
              <CartIcon />
              Carrito
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
