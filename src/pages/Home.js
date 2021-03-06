import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import { Spinner } from "react-bootstrap";
import { getFirestore } from "../firebase/index";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results");
          return true;
        }
        setItems(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container-margin">
      {loading ? (
        <div className="d-flex align-items-center justify-content-center">
          <Spinner animation="grow" variant="success" />
        </div>
      ) : (
        <Item items={items} route={`/producto/${items.id}`} />
      )}
    </div>
  );
};

export default Home;
