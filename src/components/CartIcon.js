import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/cartContext";

const CartIcon = () => {
  const [cart, setCart] = useContext(CartContext);

  return (
    <>
      <FontAwesomeIcon className="mr-2 ml-2" icon={faShoppingCart} />
      <span>({cart.length})</span>
    </>
  );
};

export default CartIcon;
