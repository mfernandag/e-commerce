import React, { useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  // const cartItems = (a, b) => {
  //   const quantity = a;
  //   const description = b;
  //   setCart([...cart, { quantity, description }]);
  // };

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
