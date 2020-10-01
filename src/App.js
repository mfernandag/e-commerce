import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./components/Cart";
// import ItemDetailContainer from "./pages/ItemDetailContainer";
import ItemDetail from "./components/ItemDetail";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { itemList } from "./components/ItemList";

import { productsList } from "./components/productsList";

import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home data={productsList} />
        </Route>
        <CartProvider>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="/producto/:id">
            <ItemDetail data={productsList} />
          </Route>
        </CartProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
