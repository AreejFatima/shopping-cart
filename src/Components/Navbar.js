import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  const getTotalItems = (cartItems) =>
    cartItems.reduce((acum, i) => acum + i.amount, 0);

  useEffect(() => {
    const count = getTotalItems(cartItems);
    setCartCount(count);
  }, [cartItems]);

  return (
    <div>
      <nav class="bg-slate-900 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div class=" pl-10 pr-10 container flex flex-wrap justify-between items-center mx-auto">
          <h1 class="flex items-center">
            <span class=" text-white self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Shopping Cart
            </span>
          </h1>
          <div
            class=" w-full md:block md:w-auto text-white"
            id="navbar-default"
          >
            <button class="w-8 h-8 relative" onClick={() => navigate("/cart")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>

              <div class="rounded-full font-semibold text-xs bg-red-500 flex justify-center align-center text-white w-5 h-5 absolute bottom-0 right-0 translate-x-2.5 translate-y-1">
                {cartCount}
              </div>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
