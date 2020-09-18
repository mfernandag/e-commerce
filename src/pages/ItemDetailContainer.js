import React, { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
// import { productsList } from "../components/productsList";
// import { itemList } from "../components/ItemList";
// Detalle de producto - A

// 1- Crear componente ItemDetailContainer.js que al iniciar (usando effects) llame a una promise que en 3 segundos
//  le devuelva un Item y lo guarde en un estado propio, dando feedback visual del estado ‘Loading’ (como prefieras)

let min = 1;
let max = 10;

const ItemDetailContainer = ({ data }) => {
  // const { id } = useParams();
  const [counter, setCounter] = useState(0);
  // const [productsData, setProductsData] = useState([]);

  // useEffect(() => {
  //   const getData = setTimeout(() => {
  //     data().then((response) => {
  //       setProductsData(response.data);
  //     });
  //   }, 3000);

  // }, []);

  // useEffect(() => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(
  //         data().then((response) => {
  //           setProductsData(response.data);
  //         })
  //       );
  //     }, 5000);
  //   });
  // }, []);

  return (
    <div>
      {/* <h2>Now showing product {data[`${id - 1}`].id}</h2> */}
      <ItemDetail
        data={data}
        setCounter={setCounter}
        counter={counter}
        min={min}
        max={max}
      />
    </div>
  );
};

export default ItemDetailContainer;
