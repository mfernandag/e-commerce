import React, { useEffect, useState } from "react";
import { getFirestore } from "../firebase";
import firebase from "firebase";
import { useParams } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import Item from "../components/Item";

const CategoryItems = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const categoryDocRef = firebase.firestore().doc(`categories/${categoryId}`);
    const categoryItemCollection = itemCollection.where(
      "categoryId",
      "==",
      categoryDocRef
    );
    categoryItemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No data!");
        }
        setItems(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => {
        console.log("There was an error trying to get items: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  let categoryTitle = items.map((p) => p.category)[0];

  return (
    <>
      {loading && (
        <div className="d-flex align-items-center justify-content-center">
          <Spinner animation="grow" variant="success"></Spinner>
        </div>
      )}
      <Container>
        <h3>{categoryTitle}</h3>
        <hr></hr>
      </Container>
      <Item items={items} />
    </>
  );
};

export default CategoryItems;
