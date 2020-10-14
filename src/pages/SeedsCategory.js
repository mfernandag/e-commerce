import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import { Spinner } from "react-bootstrap";
import firebase from "firebase";
import { getFirestore } from "../firebase/index";

const SeedsCategory = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const categoryDocRef = firebase
      .firestore()
      .doc("categories/EyolZ78wrbKeqyNPp0jv");
    const plantItems = itemCollection.where("categoryId", "==", categoryDocRef);
    plantItems
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No data!");
        }
        const queryItems = querySnapshot.docs.map((doc) => doc.data());
        setItems(queryItems);
      })
      .catch((error) => {
        console.log("There was an error trying to get items: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center">
          <Spinner animation="grow" variant="success" />
        </div>
      ) : (
        <>
          <h1>Semillas</h1>
          <Item items={items} />
        </>
      )}
    </>
  );
};

export default SeedsCategory;
