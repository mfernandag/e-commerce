import React from "react";
import { Link } from "react-router-dom";

import { Card, Button, Container } from "react-bootstrap";

const Item = ({ productsList, error }) => {
  if (!error) {
    return (
      <Container className="d-flex justify-content-around flex-wrap mt-4">
        {productsList.map((item, id) => {
          return (
            <Card className="mb-4" key={id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="success">Agregar al carrito</Button>
                <Link to={`/producto/${item.id}`}>VER DETALLES</Link>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    );
  } else return <span>{error}</span>;
};

export default Item;
