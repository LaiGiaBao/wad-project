import React from "react";
import "../styles/card-product.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Colors = ({ product }) => {
  const listOfColors = product.colors.split(",");
  return listOfColors.map((color) => (
    <button style={{ background: color }} key={color}></button>
  ));
};
export default Colors;
