import React, { useState } from "react";
import Banner from "../components/Banner";
import ItemCount from "../components/ItemCount";
import Item from "../components/Item";
import { itemList } from "../components/ItemList";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState("");

  itemList()
    .then((productList) => {
      setProductsList(productList);
    })
    .catch((err) => {
      setError(err);
    });

  let min = 1;
  let max = 10;

  return (
    <>
      <Banner
        greeting={
          "Bienvenidos, próximamente encontrarán algún producto a la venta"
        }
      />
      <ItemCount
        setCounter={setCounter}
        counter={counter}
        min={min}
        max={max}
      />
      <Item productsList={productsList} error={error} />
    </>
  );
};

export default Home;
