import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComp from "./Components/NavBarComp";
import Footer from "./Components/Footer";
import CarouselLayout from "./Components/CarouselLayout";
import MainLayout from "./Components/MainLayout";
import "./styles/card-product.css";
import CardProduct from "./Components/CardProduct";
import { useState } from "react";
function App() {
  // const [products, setProduct] = useState([

  // ]);
  const products = [
    {
      category: "Sport Shoes",
      name: "NIKE AIR JORDAN 1 LOW 'BRED TOE'",
      pictSource:
        "https://cdn.vortexs.io/api/images/c7f404af-2b7b-4644-8b2d-1036ff7da950/1140/w/10670-giay-nike-air-jordan-1-low-bred-toe.jpeg",
      price: "5,950,000đ",
      sizes: [7, 8, 9],
      colors: ["red", "smoke-grey", "black"],
      id: 1,
    },
    {
      category: "Sport Shoes",
      name: "NIKE AIR JORDAN 1 LOW 'BLACK UNIVERSITY BLUE'",
      pictSource:
        "https://cdn.vortexs.io/api/images/1f4a83f8-581a-4774-bd71-9df7b9496314/1140/w/giay-nike-air-jordan-1-low-black-university-blue.jpeg",
      price: "5,450,000đ",
      sizes: [9, 10, 11, 12],
      colors: ["red", "smoke-grey", "black"],
      id: 2,
    },
    {
      category: "Sport Shoes",
      name: "NIKE BLAZER MID 77",
      pictSource:
        "https://cdn.vortexs.io/api/images/41f71f18-5d2a-408a-a746-5080847c87cf/1140/w/8539-nike-blazer-mid-77-white-blac.jpeg",
      price: "2,950,000đ",
      sizes: [9, 10],
      colors: ["red", "smoke-grey", "black"],
      id: 3,
    },
  ];
  console.log(products);
  return (
    <div className="App">
      <MainLayout>
        <div className="content">
          <h2>{products[0].category}</h2>
          <div className="items">
            {products.map((product) => (
              <CardProduct product={product} key={product.id}></CardProduct>
            ))}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default App;
