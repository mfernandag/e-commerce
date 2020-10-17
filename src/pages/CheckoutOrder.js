import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/cartContext";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const CheckoutOrder = () => {
  const [cart, setCart] = useContext(CartContext);

  let totalSum;

  const reducer = () => {
    totalSum = cart.reduce((acc, subtotal) => acc + subtotal.subtotal, 0);
    return totalSum;
  };

  reducer();

  return (
    <Container className="mt-4 pb-4">
      <h3 className="mb-4">Carrito de compras</h3>
      <Row>
        <Col xs={12} md={8}>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="formName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formSurname">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" placeholder="Apellido" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formPhone">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control type="email" placeholder="Teléfono" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Dirección de correo electrónico </Form.Label>
              <Form.Control type="email" placeholder="Ingresar email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Tu pedido</Card.Title>
              {cart.map((item, id) => {
                return (
                  <Row key={id} className="mb-2 align-middle">
                    <Col>
                      <img
                        className="rounded float-left mr-2"
                        alt="flower"
                        width="45px"
                        src={item.image}
                      ></img>
                      <p className="align-middle">
                        {item.name} x {item.quantity}
                      </p>
                    </Col>
                    <Col>
                      <p className="ml-2 align-middle">
                        Subtotal: <strong>${item.subtotal}</strong>
                      </p>
                    </Col>
                  </Row>
                );
              })}
              <hr></hr>
              <p className="float-right">
                Total: <strong>${totalSum}</strong>
              </p>
              <Button variant="primary" size="lg" block>
                Realizar el pedido
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutOrder;
