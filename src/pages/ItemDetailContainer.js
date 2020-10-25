import React, { useEffect, useState, useContext } from "react";
import ItemCount from "../components/ItemCount";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { getFirestore } from "../firebase";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";

let min = 1;
let max = 10;

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [counter, setCounter] = useState(1);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [cart, setCart, cartItems] = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(id);

    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("Item does not exist");
        }
        console.log("Item found");
        setProduct({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log("Error searching item: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const addToCart = () => {
    cartItems(counter, product.name, product.price, product.img);
  };

  const countMaker = (c) => {
    setCounter(c);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center">
          <Spinner animation="grow" variant="success" />
        </div>
      ) : (
        <Container className="t-4 pt-4">
          <Row className="pt-4">
            <Col xs={6} className="mr-4">
              <img className="img-fluid" alt="flower" src={product.img}></img>
            </Col>
            <Col xs={4}>
              <h1>{product.name}</h1>
              <h3>${product.price},00</h3>
              <p>{product.description}</p>
              <ItemCount countMaker={countMaker} min={min} max={max} />
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
      )}
    </>
  );
};

export default ItemDetailContainer;
