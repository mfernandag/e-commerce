import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import ItemCount from "./components/ItemCount";
import Item from "./components/Item";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { itemList } from "./components/ItemList";

function App() {
  const [counter, setCounter] = useState(0);
  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState("");

  let min = 1;
  let max = 10;

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
          <ItemCount
            setCounter={setCounter}
            counter={counter}
            min={min}
            max={max}
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
