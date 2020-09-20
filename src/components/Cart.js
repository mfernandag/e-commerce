import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

const Cart = () => {
  return (
    <Container className="mt-4">
      <Row>
        <h3>Carrito de compras</h3>
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
            <tr>
              <td></td>
            </tr>
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
    </Container>
  );
};

export default Cart;
