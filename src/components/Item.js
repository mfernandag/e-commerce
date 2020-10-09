import React from "react";
import { Link } from "react-router-dom";

import { Card, Container } from "react-bootstrap";

const Item = ({ items }) => {
  // console.log(items);
  return (
    <Container className="d-flex justify-content-around flex-wrap mt-4">
      {items.map((item, id) => {
        return (
          <Link className="card-links" key={id} to={`/producto/${item.id}`}>
            <Card className="mb-4" id={item.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title className="text-center">{item.name}</Card.Title>
                <Card.Text className="text-center price">
                  ${item.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </Container>
  );
};

export default Item;
