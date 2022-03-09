import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComp from "./Components/NavBarComp";
import Footer from "./Components/Footer";
import CarouselLayout from "./Components/CarouselLayout";
function App() {
  return (
    <div className="App">
      <NavBarComp />
      <CarouselLayout />
      <Footer />
    </div>
  );
}

export default App;
