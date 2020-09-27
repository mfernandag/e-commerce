import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./components/Cart";
// import ItemDetailContainer from "./pages/ItemDetailContainer";
import ItemDetail from "./components/ItemDetail";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { itemList } from "./components/ItemList";

import { CartProvider } from "./context/cartContext";

function App() {
  const [getProductsList, setProductsList] = useState([]);
  const [error, setError] = useState("");

  itemList()
    .then((getProductList) => {
      setProductsList(getProductList);
    })
    .catch((err) => {
      setError(err);
    });

  // useEffect(() => {
  //   // productsList().then((response) => {
  //   //   setProductsList(response.data);
  //   // });
  //   productsList()
  //     .then((getProductList) => {
  //       setProductsList(getProductList);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     });
  // }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home data={getProductsList} error={error} />
        </Route>
        <CartProvider>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="/producto/:id">
            <ItemDetail data={getProductsList} />
          </Route>
        </CartProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
