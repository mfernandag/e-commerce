import React, { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Spinner,
} from "react-bootstrap";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../firebase";
import SuccessModal from "../components/SuccessModal";

const CheckoutOrder = () => {
  const [cart] = useContext(CartContext);
  const [orderId, setOrderId] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  let totalSum;

  const reducer = () => {
    totalSum = cart.reduce((acc, subtotal) => acc + subtotal.subtotal, 0);
    return totalSum;
  };

  reducer();

  const createOrder = () => {
    setLoading(true);
    const clientData = { name, lastname, phone, email };
    const db = getFirestore();
    const orders = db.collection("orders");
    const newOrder = {
      clientData: clientData,
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalSum,
    };

    orders
      .add(newOrder)
      .then(({ id }) => {
        setOrderId(id);
        setLoading(false);
        setModalShow(true);
      })
      .catch((error) => {
        console.log("Error processing order: ", error);
      });
  };

  if (loading) {
    return <Spinner></Spinner>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setModalShow(true);
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
                    required
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
                    required
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
                    required
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
                onClick={createOrder}
                // onClick={handleSubmit}
                disabled={!name || !phone || !lastname || !email}
              >
                Realizar el pedido
              </Button>
              <SuccessModal
                show={modalShow}
                orderId={orderId}
                name={name}
                onHide={() => setModalShow(false)}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutOrder;
