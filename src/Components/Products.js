import React from "react";
import useProducts from "../Hooks/useProducts";

const Products = () => {
  const { data, status } = useProducts();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>ERROR!!!</div>;
  }
  return (
    <div className="product-cards">
      {data.map((product, index) => {
        return (
          <div className="card">
            <img className="product-image" src={product.image} alt="product" />
            <h3 className="product-title">{product.title}</h3>
            <p className="price">${product.price}</p>
            <p className="product-description">{product.description}</p>
            <p>
              <button className="cart-button">Add to Cart</button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

//  {
//"id":1,
// "title":"Fjallraven - Foldsack No. 1 Backpack,Fits 15 Laptops"
// "price":109.95,
// "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category":"men's clothing",
// "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// "rating":{"rate":3.9,"count":120}
//  },
