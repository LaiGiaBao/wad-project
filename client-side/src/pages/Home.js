import React, { useState, useEffect, useContext } from "react";
import CardProduct from "../Components/CardProduct";
import axios from "axios";
import MainLayout from "../Components/MainLayout";
import "../styles/card-product.css";
import { AuthContext } from "../helpers/AuthContext";
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
            <h2>{category.category}</h2>
            <div className="items">
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
