import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Item from "../components/Item";
import { Spinner } from "react-bootstrap";

const Home = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setData(props.data);
      setLoading(false);
    }, 2000);
  }, [props.data]);

  return (
    <div>
      <Banner
        greeting={
          "Bienvenidos, próximamente encontrarán algún producto a la venta"
        }
      />
      {loading ? (
        <div className="d-flex align-items-center justify-content-center">
          <Spinner animation="grow" variant="success" />
        </div>
      ) : (
        <Item data={data} />
      )}
    </div>
  );
};

export default Home;
