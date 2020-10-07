import React, { useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const cartItems = (a, b, c, d) => {
    const quantity = a;
    const name = b;
    const price = c;
    const total = a * c;
    const image = d;
    const compra = {
      quantity: quantity,
      name: name,
      price: price,
      total: total,
      image: image,
    };
    console.log(compra);
    let purchases = [...cart, compra];
    console.log(purchases);
    setCart(purchases);
  };

  return (
    <CartContext.Provider value={[cart, setCart, cartItems]}>
      {props.children}
    </CartContext.Provider>
  );
};
