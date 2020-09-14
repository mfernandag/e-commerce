import React from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/producto"} component={ItemDetailContainer}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
