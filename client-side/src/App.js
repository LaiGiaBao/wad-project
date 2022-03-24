import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/card-product.css";
import React, { useState, Fragment, useEffect } from "react";
import Home from "./pages/Home";
import AddNewProduct from "./pages/AddNewProduct";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/addproduct" exact element={<AddNewProduct />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
