import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";

function Cart(props) {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalAmount = (cartItems) =>
    cartItems.reduce((acum, i) => acum + i.price * i.amount, 0);

  const handleIncrement = (item) => {
    setCartItems((prev) => {
      const isItemInTheCart = prev.find((i) => i.id === item.id);
      if (isItemInTheCart) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, amount: i.amount + 1 } : i
        );
      }
      return prev;
    });
  };

  const handleDecrement = (item) => {
    setCartItems((prev) => {
      const isItemInTheCart = prev.find((i) => i.id === item.id);
      if (isItemInTheCart) {
        return prev.map((i) =>
          i.id === item.id
            ? {
                ...i,
                amount: i.amount > 1 ? i.amount - 1: 1,
              }
            : i
        );
      }
      return prev;
    });
  };
 


  const handleRemoveItemFromCart = (id) => {
    setCartItems((prev) => {
      const foundItem = prev.find((i) => i.id === id);
      if (foundItem) {
        if (foundItem.amount === 1) {
          const newArray = prev.filter((i) => i.id !== id);
          return newArray;
        } else {
          return prev.map((i) =>
            i.id === id ? { ...i, amount: i.amount - 1 } : i
          );
        }
      } else {
        return prev;
      }
    });
  };
  useEffect(() => {
    setTotalPrice(calculateTotalAmount(cartItems));
  }, [cartItems]);

  return (
    <>
      <div className="w-full h-full bg-black bg-opacity-90 overflow-y-auto overflow-x-hidden fixed sticky-0">
      <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700">
        <div className="flex md:flex-row flex-col justify-end">
          <div className="lg:w-full w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen">
            <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-left"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
              <p className="text-sm pl-2 leading-none">Back</p>
            </div>
            <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
              Cart
            </p>

            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  className="md:flex items-center mt-14 py-8 border-t border-gray-200"
                  key={item.id}
                >
                  <div className="w-1/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-1/2 h-full object-center object-cover"
                    />
                  </div>
                  <div className="md:pl-3 md:w-full">
                    <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                      Product Id# {item.id}
                    </p>
                    <div className="flex items-center justify-between w-full pt-1">
                      <p className="text-base font-black leading-none text-gray-800">
                        {item.title}
                      </p>
                    </div>

                    <div className="custom-number-input h-10 w-32 mt-3">
                      <div className="flex flex-row  w-full rounded-lg relative bg-transparent ">
                        <button
                          onClick={() => handleDecrement(item)}
                          className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        >
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          className="outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700  outline-none"
                          value={item.amount}
                        />
                        <button
                          onClick={() => handleIncrement(item)}
                          className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                        >
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-5 pr-6">
                      <div className="flex itemms-center">
                        <p
                          className="text-xs leading-3 underline text-red-500 cursor-pointer"
                          onClick={() => handleRemoveItemFromCart(item.id)}
                        >
                          Remove
                        </p>
                      </div>
                      <p className="text-base font-black leading-none text-gray-800">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <h1>Your Cart is Empty!</h1>
                <p>Looks like you haven't made your choice yet...</p>
              </>
            )}
          </div>
          <div className="xl:w-1/3 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
            <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
              <div>
                <p className="text-4xl font-black leading-9 text-gray-800">
                  Summary
                </p>
                <div className="flex items-center justify-between pt-16">
                  <p className="text-base leading-none text-gray-800">
                    Subtotal
                  </p>
                  <p className="text-base leading-none text-gray-800">
                    ${totalPrice}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className="text-base leading-none text-gray-800">
                    Shipping
                  </p>
                  <p className="text-base leading-none text-gray-800">$30</p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className="text-base leading-none text-gray-800">Tax</p>
                  <p className="text-base leading-none text-gray-800">$35</p>
                </div>
              </div>
              <div>
                <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                  <p className="text-2xl leading-normal text-gray-800">
                    Total
                  </p>
                  <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                    {(totalPrice + 65).toFixed(2)} $
                  </p>
                </div>
                <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default Cart;
