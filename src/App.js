import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CheckoutOrder from "./pages/CheckoutOrder";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import CategoryItems from "./pages/CategoryItems";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { CartProvider } from "./context/cartContext";

import "./assets/styles/styles.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/producto/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/categories/:categoryId">
            <CategoryItems />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <CheckoutOrder />
          </Route>
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
