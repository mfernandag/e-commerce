import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Item from "./components/Item";
import Home from "./pages/Home";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import { productsList } from "./components/productsList";
import { itemList } from "./components/ItemList";

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
          {/* <Banner
            greeting={
              "Bienvenidos, próximamente encontrarán algún producto a la venta"
            }
          />
          <Item productsList={getProductsList} error={error} /> */}
        </Route>
        <Route path="/producto/:id">
          <ItemDetailContainer data={getProductsList} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
