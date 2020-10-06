import React, { useEffect, useState, useContext } from "react";
import ItemCount from "../components/ItemCount";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { Container, Row, Col, Button } from "react-bootstrap";

let min = 1;
let max = 10;

const ItemDetailContainer = ({ data }) => {
  const [counter, setCounter] = useState(1);

  const { id } = useParams();

  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const product = data[id];
    console.log(product);
    setCart((currentCart) => [...currentCart, product]);
    // cartItems(counter, data.id);
  };

  const countMaker = (c) => {
    setCounter(c);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <Container className="t-4 pt-4">
        <Row className="pt-4">
          <Col xs={6} className="mr-4">
            {/* <img className="img-fluid" alt="flower" src={data[id].img}></img> */}
          </Col>
          <Col xs={4}>
            <h1>{data[id].name}</h1>
            <h3>${data[id].price}</h3>
            <p>{data[id].description}</p>
            <ItemCount
              // setCounter={setCounter}
              // counter={counter}
              countMaker={countMaker}
              min={min}
              max={max}
            />
            <Button
              onClick={addToCart}
              className="mt-4"
              variant="warning"
              size="lg"
              block
            >
              Agregar al carrito {counter} items
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetailContainer;
