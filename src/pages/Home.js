import React, { useState } from "react";
import Banner from "../components/Banner";
import ItemCount from "../components/ItemCount";
import Item from "../components/Item";
import { itemList } from "../components/ItemList";

const Home = ({ data, error }) => {
  // const [getProductsList, setProductsList] = useState([]);
  // const [error, setError] = useState("");

  // itemList()
  //   .then((getProductList) => {
  //     setProductsList(getProductList);
  //   })
  //   .catch((err) => {
  //     setError(err);
  //   });
  // const [getProductsList, setProductsList] = useState([]);
  // const [error, setError] = useState("");

  // itemList()
  //   .then((getProductList) => {
  //     setProductsList(getProductList);
  //   })
  //   .catch((err) => {
  //     setError(err);
  //   });

  return (
    <>
      <Banner
        greeting={
          "Bienvenidos, próximamente encontrarán algún producto a la venta"
        }
      />
      <Item productsList={data} error={error} />
    </>
  );
};

export default Home;
