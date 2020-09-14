import React from "react";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
// Detalle de producto - B

// 1- Crear componente ItemDetail.js que debe recibir por prop el Ítem obtenido en el desafío A

// 2- Conectarlo con el contador del desafío n°4 (clase 5)  y un nuevo botón “Comprar”

const ItemDetail = ({ data, setCounter, counter, min, max }) => {
  const { id } = useParams();
  return (
    <Container>
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
          <p>${data[`${id - 1}`].price}</p>
          <p>{data[`${id - 1}`].description}</p>
          <ItemCount
            setCounter={setCounter}
            counter={counter}
            min={min}
            max={max}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
