import './App.css';
import  NavBar from './layout/navBar'
import Footer from "./layout/footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import React from "react";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import ProductDetail from "./pages/productDetail";



function App() {
  return (
    <div>
      <NavBar/>
      <Routes> {/* Define routes and specify corresponding components */}
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product/:slug/" element={<ProductDetail/>} />
        {/*<Route path="/category/:slug/" element={<CategoryDetail/>} />*/}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
