import React from "react";
import itemList from "./ItemList";
import { Card, Button, Container } from "react-bootstrap";

const Item = () => {
  return (
    <Container className="d-flex flex-wrap">
      {itemList.map((item, id) => {
        return (
          <Card key={id} style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default Item;

// {/* <Card style={{ width: "18rem" }}>
//         {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//         <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card> */}
