import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Item from "./components/Item";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { itemList } from "./components/ItemList";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState("");

  itemList()
    .then((productList) => {
      setProductsList(productList);
    })
    .catch((err) => {
      setError(err);
    });

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Banner
            greeting={
              "Bienvenidos, próximamente encontrarán algún producto a la venta"
            }
          />
          <Item productsList={productsList} error={error} />
        </Route>
        <Route path="/producto/:id">
          <ItemDetailContainer data={productsList} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
