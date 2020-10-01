import React from "react";
import { Link } from "react-router-dom";

import { Card, Button, Container } from "react-bootstrap";

const Item = ({ data }) => {
  console.log(data);
  return (
    <Container className="d-flex justify-content-around flex-wrap mt-4">
      {data.map((item, id) => {
        return (
          <Link key={id} to={`/producto/${item.id}`}>
            <Card className="mb-4" id={item.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
                <Button variant="success">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </Container>
  );
};

export default Item;
