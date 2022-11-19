import React from "react";

// import components
import Header from "./components/Header";
import NewCollection from "./components/NewCollection";
import About from "./components/About";
import Bestseller from "./components/Bestseller";
import Product from "./components/Product";
import Discount from "./components/Discount";
import Testimonial from "./components/Testimonial";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";

// import AOS

function App() {
  // AOS init

  return (
    <div>
      <Header />
      <NewCollection />
      <About />
      <Bestseller />
      <Product />
      <Discount />
      <Testimonial />
      <div>
        <Instagram />
        <Footer />
      </div>
      <div className="h-[500px]" />
    </div>
  );
}

export default App;
