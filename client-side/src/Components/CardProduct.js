import React, { useContext, useState } from "react";
import "../styles/card-product.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
const CardProduct = ({ product }) => {
  const { id, pictSource, name, price, colors, sizes } = product;
  const listOfColors = colors.split(",");
  const listOfSizes = sizes.split(",");
  const { authState, cartDetails, setCartDetails } = useContext(AuthContext);
  let navigate = useNavigate();
  const buyButton = () => {
    axios
      .get(`http://localhost:3001/carts/byUserId/${authState.id}`)
      .then((response) => {
        let data = {
          ProductId: product.id,
          Price: product.price,
          Quantity: 1,
          CartId: response.data.slice(-1)[0].id,
        };
        axios
          .post("http://localhost:3001/cart-details", data)
          .then((response) => {
            alert("Added to Cart")
          });
      });
  };
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
        {authState.status && (
          <button className="Buy" onClick={buyButton}>
            Buy
          </button>
        )}
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
