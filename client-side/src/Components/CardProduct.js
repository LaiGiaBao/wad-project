import React from "react";
import "../styles/card-product.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CardProduct = ({ product }) => {
  const { id, pictSource, name, price, colors, sizes } = product;
  const listOfColors = colors.split(",");
  const listOfSizes = sizes.split(",");
  let navigate = useNavigate();
  return (
    <div className="card">
      <div className="card_like">
        <i className="bx bx-heart"></i>
      </div>
      <div className="card_cart">
        <i className="bx bx-cart-alt"></i>
      </div>
      <div className="card_img">
        <img src={pictSource} alt="" />
      </div>
      <div className="card_title">{name}</div>
      <div className="card_price"> {price}</div>
      <div className="card_size">
        <h3>Size:</h3>
        {listOfSizes.map((size) => (
          <span key={size}>{size}</span>
        ))}
      </div>
      <div className="card_color">
        <h3>Color: </h3>
        {listOfColors.map((color) => (
          <span key={color} style={{ background: color }}></span>
        ))}
      </div>
      <div className="card_action">
        <button className="Buy">Buy</button>
        <button
          className="Add"
          onClick={() => {
            navigate(`product/${id}`);
          }}
        >
          Detail
        </button>
      </div>
    </div>
  );
};
export default CardProduct;
