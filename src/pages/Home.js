import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Banner from "../components/Banner";
import ItemCount from "../components/ItemCount";
import Item from "../components/Item";

const Home = () => {
  const [counter, setCounter] = useState(0);
  let min = 1;
  let max = 10;

  return (
    <>
      <Navbar />
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
      <Item />
    </>
  );
};

export default Home;
