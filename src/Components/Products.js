import React from "react";

const Products = (props) => {
  const handleCartClick = (product) => {
    addToCart(product);
  };

  const { data, addToCart } = props;
  return (
    <div class="grid grid-cols-4 gap-y-7 gap-x-7 p-10">
      {data.map((product, index) => {
        return (
          <div
            key={index}
            class="border-2 border-teal-100 max-w-sm max-h-fit p-10 rounded text-center transition duration-700 ease-in-out  hover:shadow-lg hover:border-teal-300"
          >
            <img
              class="w-full h-48 object-contain mb-5"
              src={product.image}
              alt="product"
            />
            <h3 class="text-lg font-semibold leading-7 line-clamp-2 overflow-hidden h-14">
              {product.title}
            </h3>
            <p class="text-2xl p-1.5 text-zinc-400">${product.price}</p>
            <p class="text-base font-normal min-h-40 overflow-hidden line-clamp-2 mb-5">
              {product.description}
            </p>
            <p>
              <button
                class="p-2 bg-slate-800	text-white w-full text-sm font-light hover:bg-slate-900"
                onClick={() => handleCartClick(product)}
              >
                Add to Cart
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

