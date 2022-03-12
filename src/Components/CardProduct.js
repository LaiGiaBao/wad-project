import React from "react";
import "../styles/card-product.css";
const CardProduct = (props) => {
  const { pictSource, name, price, sizes, colors } = props.product;
  return (
    <div className="card">
      <div className="card_like">
        <i className="bx bx-heart"></i>
      </div>
      <div className="card_cart">
        <i className="bx bx-cart-alt"></i>
      </div>
      <div className="card_img">
        <img
          src={pictSource}
          //   "https://cdn.vortexs.io/api/images/c7f404af-2b7b-4644-8b2d-1036ff7da950/1140/w/10670-giay-nike-air-jordan-1-low-bred-toe.jpeg"
          alt=""
        />
      </div>
      <div className="card_title">{name}</div>
      {/* NIKE AIR JORDAN 1 LOW 'BRED TOE' */}
      <div className="card_price"> {price}</div>
      {/* 5,950,000đ */}
      <div className="card_size">
        <h3>Size:</h3>
        {/* <span>7</span>
          <span>8</span>
          <span>9</span> */}
        {sizes.map((size) => (
          <span>{size}</span>
        ))}
      </div>
      <div className="card_color">
        <h3>Color: </h3>
        {/* <span class="red"></span>
        <span class="smoke-grey"></span>
        <span class="black"></span> */}
        {colors.map((color) => (
          <span className={color}></span>
        ))}
      </div>
      <div className="card_action">
        <button className="Buy">Buy</button>
        <button className="Add">Add Cart</button>
      </div>
    </div>
  );
};
export default CardProduct;
