import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
// import { itemList } from "../components/ItemList";
// Detalle de producto - A

// 1- Crear componente ItemDetailContainer.js que al iniciar (usando effects) llame a una promise que en 3 segundos
//  le devuelva un Item y lo guarde en un estado propio, dando feedback visual del estado ‘Loading’ (como prefieras)

const ItemDetailContainer = ({ data }) => {
  const { id } = useParams();
  return (
    <div>
      <h2>Now showing product {data[`${id - 1}`].id}</h2>
      <ItemDetail data={data} />
    </div>
  );
};

export default ItemDetailContainer;
