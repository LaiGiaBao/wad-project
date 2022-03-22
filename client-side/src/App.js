import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComp from "./Components/NavBarComp";
import Footer from "./Components/Footer";
import CarouselLayout from "./Components/CarouselLayout";
import MainLayout from "./Components/MainLayout";
import "./styles/card-product.css";
import CardProduct from "./Components/CardProduct";
import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
function App() {
  const [listOfProducts, setListOfProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setListOfProducts(response.data);
    });
  }, []);
  // const [products, setProduct] = useState([
  //   {
  //     category: "Sport Shoes",
  //     name: "NIKE AIR JORDAN 1 LOW 'BRED TOE'",
  //     pictSource:
  //       "https://cdn.vortexs.io/api/images/c7f404af-2b7b-4644-8b2d-1036ff7da950/1140/w/10670-giay-nike-air-jordan-1-low-bred-toe.jpeg",
  //     price: "5,950,000đ",
  //     sizes: [7, 8, 9],
  //     colors: ["red", "smoke-grey", "black"],
  //     id: 1,
  //   },
  //   {
  //     category: "Sport Shoes",
  //     name: "NIKE AIR JORDAN 1 LOW 'BLACK UNIVERSITY BLUE'",
  //     pictSource:
  //       "https://cdn.vortexs.io/api/images/1f4a83f8-581a-4774-bd71-9df7b9496314/1140/w/giay-nike-air-jordan-1-low-black-university-blue.jpeg",
  //     price: "5,450,000đ",
  //     sizes: [9, 10, 11, 12],
  //     colors: ["red", "smoke-grey", "black"],
  //     id: 2,
  //   },
  //   {
  //     category: "Sport Shoes",
  //     name: "NIKE BLAZER MID 77",
  //     pictSource:
  //       "https://cdn.vortexs.io/api/images/41f71f18-5d2a-408a-a746-5080847c87cf/1140/w/8539-nike-blazer-mid-77-white-blac.jpeg",
  //     price: "2,950,000đ",
  //     sizes: [9, 10],
  //     colors: ["red", "smoke-grey", "black"],
  //     id: 3,
  //   },
  // ]);
  const categories = ["Shoes", "Shirt"];
  const RenderProducts = ({ categories }) => {
    return categories.map((category) => {
      return (
        <div className="product-list">
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
    <div className="App">
      <MainLayout>
        <div className="content">
          <RenderProducts categories={categories} />
        </div>
      </MainLayout>
    </div>
  );
}

export default App;
