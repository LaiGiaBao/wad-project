import React, { useState, useEffect, useContext } from "react";
import CardProduct from "../Components/CardProduct";
import axios from "axios";
import MainLayout from "../Components/MainLayout";
import "../styles/card-product.css";
import { AuthContext } from "../helpers/AuthContext";
import { Link } from "react-router-dom";
function Home() {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { searchText, setSearchText, cartId } = useContext(AuthContext);
  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setListOfProducts(response.data);
    });
    axios.get("http://localhost:3001/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);
  const RenderProducts = () => {
    return categories.map((category) => {
      const listOfFilteredProducts = listOfProducts.filter(
        (product) => product.category === category.id.toString()
      );
      if (listOfFilteredProducts.length !== 0)
        return (
          <div key={category.id} className="product-list">
            <h2 class = "text-center">{category.category}</h2>
            <h3 class = "text-center"><Link to={`/product/byCategory/${category.id}`}>See All</Link></h3>
            <div class="items">
              {listOfFilteredProducts.map((product) => (
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
        {!searchText ? (
          <RenderProducts />
        ) : (
          listOfProducts
            .filter((product) =>
              product.name.toLowerCase().includes(searchText)
            )
            .map((filtered) => (
              <CardProduct product={filtered} key={filtered.id} />
            ))
        )}
      </div>
    </MainLayout>
  );
}

export default Home;
