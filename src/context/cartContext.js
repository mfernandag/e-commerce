import React, { useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const cartItems = (a, b, c, d) => {
    let quantity = a;
    let name = b;
    let price = c;
    let subtotal = a * c;
    let image = d;
    const purchaseData = {
      quantity: quantity,
      name: name,
      price: price,
      subtotal: subtotal,
      image: image,
    };
    console.log(purchaseData);
    let purchases = [...cart, purchaseData];
    console.log(purchases);
    setCart(purchases);
  };

  function cleanCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={[cart, setCart, cartItems, cleanCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
