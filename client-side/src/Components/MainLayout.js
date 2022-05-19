import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComp from "./NavBarComp";
import Footer from "./Footer";
import CarouselLayout from "./CarouselLayout";
const MainLayout = (props) => {
  const userName = "Bao";
  return (
    <div className="App">
      {/* <NavBarComp /> */}
      <CarouselLayout />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainLayout;
