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
  const [size, setSize] = useState("");
  const [showProduct, setShowProduct] = useState(false);

  const [cart, setCart, sumaProductos] = useContext(CartContext);

  const onKeyDown = (e) => {
    e.preventDefault();
    let value = e.key;
    const notAllowedChars = new RegExp("[aeiou]");
    if (notAllowedChars.test(value)) {
      e.stopPropagation();
    } else {
      setSize(size + value);
    }
  };

  const handleSizeChange = (event) => {
    event.preventDefault();
    // `event` es un Synthetic Event de React.
    // Puedo acceder al evento original con `event.nativeEvent`.
    console.log(event.nativeEvent.target.value);
    // Pero React ya tiene los valores más comunes definidos dentro de este event.
    setSize(event.target.value);
  };

  useEffect(() => {
    console.log(size);
  }, [size]);

  useEffect(() => {
    const onScroll = (e) => {
      // e.preventDefault();
      const newShowProduct = window.scrollY > 50;
      showProduct !== newShowProduct && setShowProduct(newShowProduct);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  });

  const renderProduct = () => <p className="">{data[`${id - 1}`].name}</p>;

  // Set the Cart Context with the added product
  const addToCart = () => {
    const product = data[`${id - 1}`];
    console.log(product);
    setCart((currentCart) => [...currentCart, product]);
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
            <h1>{data[`${id - 1}`].name}</h1>
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
    </>
  );
};

export default ItemDetailContainer;
