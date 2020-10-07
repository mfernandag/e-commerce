import React, { useContext } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { CartContext } from "../context/cartContext";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);

  return (
    <Container className="mt-4">
      {cart.length > 0 ? (
        <>
          <Row>
            <h3>Carrito de compras</h3>
            <span>Items in cart: {cart.length}</span>
          </Row>
          <Row>
            <Table responsive>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
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
                      <td>${item.price}</td>
                      <td>{item.quantity}</td>
                      <td>${item.total}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Row>
          <Row className="d-flex flex-column float-right">
            <Col>
              <h4>TOTAL:</h4>
              <Button className="mt-4" variant="dark" block>
                FINALIZAR COMPRA
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <h3 className="text-center">El carrito está vacío</h3>
      )}
    </Container>
  );
};

export default Cart;
