import { Button } from "@material-tailwind/react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/page/Home";
// import Layout from "./components/layout/Layout";
import NoPage from "./components/page/NoPage";
import ScrollTop from "./components/scrollTop/ScrollTop";
import ProductInfo from "./components/page/productInfo/ProductInfo";
import CartProduct from "./components/page/cart/CartProduct";
import AllProduct from "./components/page/allProduct/AllProduct";
import Login from "./components/registration/Login";
import Signup from "./components/registration/Signup";
import UserDasebord from "./components/page/user/UserDasebord";
import AdminDasebord from "./components/page/admin/AdminDasebord";

function App() {
  return (
    <div>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/ProductInfo" element={<ProductInfo />} />
          <Route path="/CartProduct" element={<CartProduct />} />
          <Route path="/Allproduct" element={<AllProduct />} />
          <Route path="/Allproduct" element={<AllProduct />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/user-dasebord" element={<UserDasebord />} />
          <Route path="/admin-dasebord" element={<AdminDasebord />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
