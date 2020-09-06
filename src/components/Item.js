import React, { useState } from "react";
import { itemList } from "./ItemList";
import { Card, Button, Container } from "react-bootstrap";

const Item = () => {
  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState("");

  itemList()
    .then((productList) => {
      setProductsList(productList);
    })
    .catch((err) => {
      setError(err);
    });

  if (!error) {
    return (
      <Container className="d-flex justify-content-around flex-wrap mt-4">
        {productsList.map((item, id) => {
          return (
            <Card className="mb-4" key={id} style={{ width: "18rem" }}>
              {/* <Card.Img variant="top" src={poppyImg} /> */}
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="success">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    );
  } else return <span>{error}</span>;

  // const [showProductsList, setProductsList] = useState(false);
  // useEffect(() => {
  //   let timer1 = setTimeout(() => setProductsList(itemList), 2000);
  //   return () => {
  //     clearTimeout(timer1);
  //   };
  // }, []);

  // return (
  //   showProductsList && (
  //     <Container className="d-flex justify-content-around flex-wrap">
  //       {itemList.map((item, id) => {
  //         return (
  //           <Card className="mb-4" key={id} style={{ width: "18rem" }}>
  //             {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  //             <Card.Body>
  //               <Card.Title>{item.name}</Card.Title>
  //               <Card.Text>{item.description}</Card.Text>
  //               <Button variant="primary">Go somewhere</Button>
  //             </Card.Body>
  //           </Card>
  //         );
  //       })}
  //     </Container>
  //   )
  // );
};

export default Item;
