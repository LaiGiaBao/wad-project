import React, { useState, useEffect } from "react";
import CardProduct from "../Components/CardProduct";
import axios from "axios";
import MainLayout from "../Components/MainLayout";
import "../styles/card-product.css";
function Home() {
  const [listOfProducts, setListOfProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setListOfProducts(response.data);
    });
  }, []);
  const categories = ["Shoes", "Shirt"];
  const RenderProducts = ({ categories }) => {
    return categories.map((category) => {
      return (
        <div key={category} className="product-list">
          <h2>{category}</h2>
          <div className="items">
            {listOfProducts
              .filter(
                (productsFiltered) => productsFiltered.category === category
              )
              .map((product) => (
                <CardProduct product={product} key={product.id} />
              ))}
          </div>
        </div>
      );
    });
  };
  return (
    <MainLayout>
      <div className="content">
        <RenderProducts categories={categories} />
      </div>
    </MainLayout>
  );
}

export default Home;
