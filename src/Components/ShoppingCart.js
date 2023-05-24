import React, { useContext, useEffect } from "react";
import { CartContext } from "../Context/cartContext";
import useProducts from "../Hooks/useProducts";
import Products from "./Products";

function ShoppingCart() {
  const { isLoading, error, data } = useProducts();
  const { setCartItems, cartItems } = useContext(CartContext);

  const handleAddItemToCart = (item) => {
    setCartItems((prev) => {
      const isItemInTheCart = prev.find((i) => i.id === item.id);
      if (isItemInTheCart) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, amount: i.amount + 1 } : i
        );
      }
      return [...prev, { ...item, amount: 1 }];
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>ERROR!!!</div>;
  }

  return (
    <>
      <Products data={data} addToCart={handleAddItemToCart} />
    </>
  );
}

export default ShoppingCart;
