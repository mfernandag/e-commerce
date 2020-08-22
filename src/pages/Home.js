import React from "react";
import Navbar from "../components/NavBar";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner
        greeting={
          "Bienvenidos, próximamente encontrarán algún producto a la venta"
        }
      />
    </>
  );
};

export default Home;
