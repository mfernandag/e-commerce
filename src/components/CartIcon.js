import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartIcon = () => {
  return <FontAwesomeIcon className="mr-2 ml-2" icon={faShoppingCart} />;
};

export default CartIcon;
