// CartContextProvider.js
import React, { createContext, useState, useEffect } from "react";
import { getItemsFromLocalStorage, setItemsToLocalStorage } from '../Helper/helper';

export const CartContext = createContext();

const CartContextProvider = (props) => {

  const storedCart = getItemsFromLocalStorage();
  const initialCartItems = storedCart ? JSON.parse(storedCart) : [];

  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
   setItemsToLocalStorage(cartItems)
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
