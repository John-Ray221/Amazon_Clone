import React, { useContext } from "react";
import "./Product.css";
import ShoppingContext from "../context/Shopping/shoppingContext";

const Product = ({ id, image, title, rating, price }) => {
  const ctxShopping = useContext(ShoppingContext);
  const { addToBasket } = ctxShopping;
  const addToBasketHandler = () => {
    addToBasket({ item: { id, image, title, rating, price } });
  };

  return (
    <div className="product" key={id}>
      <img src={image} alt="" />
      <div className="product_info">
        <p>{title}</p>
        <div className="product_rating">
          <p> {rating}</p>
        </div>
        <p className="product_price">{price}</p>
      </div>
      <button className="product_button" onClick={addToBasketHandler}>
        Add to Basket{" "}
      </button>
    </div>
  );
};

export default Product;
