import React, { useState, useEffect, useContext } from "react";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CartContext } from "../context/cartContext";

let min = 1;
let max = 10;

const ItemDetail = ({ data }) => {
  const { id } = useParams();
  const [counter, setCounter] = useState(0);
  // const [size, setSize] = useState('');
  const [showProduct, setShowProduct] = useState(false);

  const [cart, setCart, sumaProductos] = useContext(CartContext);

  const handleClick = () => {
    console.log(`Quiero comprar ${counter} items`);
  };

  const addToCart = () => {
    const product = data[id];
    console.log(product);
    setCart((currentCart) => [...currentCart, product]);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Container className="t-4 pt-4">
      <Row className="pt-4">
        <Col xs={6} className="mr-4">
          <img
            className="img-fluid"
            alt="flower"
            src={data[`${id - 1}`].img}
          ></img>
        </Col>
        <Col xs={4}>
          {/* <h1>{data[`${id - 1}`].name}</h1> */}

          <h1>{data[id].title}</h1>
          <h3>${data[`${id - 1}`].price}</h3>
          <p>{data[`${id - 1}`].description}</p>
          <ItemCount
            setCounter={setCounter}
            counter={counter}
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
  );
};

export default ItemDetail;
