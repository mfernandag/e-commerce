import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Table, Button, Spinner } from "react-bootstrap";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import * as firebase from "firebase/app";
import { useParams } from "react-router-dom";
import "firebase/firestore";
import { getFirestore } from "../firebase";

const Cart = () => {
  const { id } = useParams();
  const [cart, setCart] = useContext(CartContext);
  const [orderId, setOrderId] = useState({});
  const [error, setError] = useState({});

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
      buyer: "fer",
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

  return (
    <Container className="mt-4 pb-4">
      {cart.length > 0 ? (
        <>
          <Row>
            <h3>Carrito de compras</h3>
          </Row>
          <Row>
            <Table responsive>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th className="text-center">Precio</th>
                  <th className="text-center">Cantidad</th>
                  <th className="text-center">Subtotal</th>
                </tr>
              </thead>

              <tbody className="vh-100 align-items-center">
                {cart.map((item, id) => {
                  return (
                    <tr key={id}>
                      <td>
                        <img
                          className="img-fluid mr-2"
                          alt="flower"
                          width="70px"
                          src={item.image}
                        ></img>
                        {item.name}
                      </td>
                      <td className="text-center align-middle">
                        ${item.price}
                      </td>
                      <td className="text-center align-middle">
                        {item.quantity}
                      </td>
                      <td className="text-center align-middle">
                        ${item.subtotal}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Row>
          <Row className="d-flex flex-column float-right">
            <Row>
              <Col>
                <h4>TOTAL: ${totalSum}</h4>
                <Link to="/checkout">
                  <Button
                    className="mt-4"
                    variant="dark"
                    block
                    onClick={() => orderId}
                  >
                    FINALIZAR COMPRA
                  </Button>
                </Link>
              </Col>
            </Row>
          </Row>
        </>
      ) : (
        <div className="text-center">
          <h3 className="mb-4">El carrito de compras está vacío</h3>
          <Link to="/">
            <Button variant="success">Ver productos</Button>{" "}
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Cart;
