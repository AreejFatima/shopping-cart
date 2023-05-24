import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import ShoppingCart from "./ShoppingCart";

function RoutesTree() {
  return (
    <Routes>
      <Route path="/" element={<ShoppingCart />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default RoutesTree;
