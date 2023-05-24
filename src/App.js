import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CartContextProvider from "./Context/cartContext";
import ShoppingCart from "./Components/ShoppingCart";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";

function App() {
  const queryClient = new QueryClient();

  return (
    <div class="font-sans">
      <QueryClientProvider client={queryClient}>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ShoppingCart />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
