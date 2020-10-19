import React, { useState, useContext, useEffect, useRef } from "react";
import { CartContext } from "../context/cartContext";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import * as firebase from "firebase/app";
import { useParams } from "react-router-dom";
import "firebase/firestore";
import { getFirestore } from "../firebase";

const CheckoutOrder = () => {
  const { id } = useParams();
  const [cart, setCart] = useContext(CartContext);
  const [orderId, setOrderId] = useState({});
  const [error, setError] = useState({});
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  let totalSum;

  const reducer = () => {
    totalSum = cart.reduce((acc, subtotal) => acc + subtotal.subtotal, 0);
    return totalSum;
  };

  reducer();

  useEffect(() => {
    const db = getFirestore();
    const orders = db.collection("orders");
    const newOrder = {
      name: name,
      lastname: lastname,
      phone: phone,
      email: email,
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalSum,
    };

    orders
      .add(newOrder)
      .then(({ id }) => {
        setOrderId(id);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
      `${name} ${lastname} ${phone} ${email} Submitting order ${orderId}`
    );
  };

  return (
    <Container className="mt-4 pb-4">
      <h3 className="mb-4">Carrito de compras</h3>
      <hr></hr>
      <Row>
        <Col xs={12} md={8}>
          <Form id="checkout-form">
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Apellido"
                    name={"lastname"}
                    value={lastname}
                    onChange={(event) => setLastname(event.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Dirección de correo electrónico </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresar email"
                    values={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
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
              <Button
                variant="primary"
                size="lg"
                id="checkout-form"
                block
                onClick={() => orderId}
                onClick={handleSubmit}
              >
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
