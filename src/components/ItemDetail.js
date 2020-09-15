import React from "react";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
// Detalle de producto - B

// 1- Crear componente ItemDetail.js que debe recibir por prop el Ítem obtenido en el desafío A

// 2- Conectarlo con el contador del desafío n°4 (clase 5)  y un nuevo botón “Comprar”

const ItemDetail = ({ data, setCounter, counter, min, max }) => {
  const { id } = useParams();

  const handleClick = () => {
    console.log(`Soy el producto ${id}`);
  };

  return (
    <Container className="pt-4">
      <Row>
        <Col xs={6}>
          <img
            className="img-fluid"
            alt="flower"
            src={data[`${id - 1}`].img}
          ></img>
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
            onClick={() => handleClick()}
            className="mt-4"
            variant="warning"
            size="lg"
            block
          >
            Agregar al carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
