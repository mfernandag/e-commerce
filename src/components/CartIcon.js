import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/cartContext";

const CartIcon = () => {
  const [cart, setCart] = useContext(CartContext);
  let itemsQuantity;

  const reducer = () => {
    itemsQuantity = cart.reduce(
      (acc, sumQuantity) => acc + sumQuantity.quantity,
      0
    );
    return itemsQuantity;
  };

  reducer();

  return (
    <>
      <FontAwesomeIcon className="mr-2 ml-2" icon={faShoppingCart} />
      <span>({itemsQuantity})</span>
    </>
  );
};

export default CartIcon;
