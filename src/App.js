import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import PlantsCategory from "./pages/PlantsCategory";
import SeedsCategory from "./pages/SeedsCategory";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { productsList } from "./components/productsList";

import { CartProvider } from "./context/cartContext";

import "./assets/styles/styles.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home data={productsList} />
          </Route>
          <Route exact path="/productos/plantas">
            <PlantsCategory />
          </Route>
          <Route exact path="/productos/semillas">
            <SeedsCategory />
          </Route>
          <Route path="/producto/:id">
            <ItemDetailContainer data={productsList} />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
