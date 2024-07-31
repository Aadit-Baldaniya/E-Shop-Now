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
import AddProductPage from "./components/page/admin/AddProductPage";
import UpdateProductPage from "./components/page/admin/UpdateProductPage";
import MyState from "./contaxt/MyState";
import { Toaster } from "react-hot-toast";
import ProtectedRouteForUser from "./ProtectedRoute/ProtectedRouteForUser";
import ProtectedRouteForAdmin from "./ProtectedRoute/ProtectedRouteForAdmin";

function App() {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/ProductInfo/:id" element={<ProductInfo />} />
          <Route path="/CartProduct" element={<CartProduct />} />
          <Route path="/Allproduct" element={<AllProduct />} />
          <Route path="/Allproduct" element={<AllProduct />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRouteForUser>
                <UserDasebord />
              </ProtectedRouteForUser>
            }
          />

          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRouteForAdmin>
                <AdminDasebord />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/addproduct"
            element={
              <ProtectedRouteForAdmin>
                <AddProductPage />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/updateproduct/:id"
            element={
              <ProtectedRouteForAdmin>
                <UpdateProductPage />
              </ProtectedRouteForAdmin>
            }
          />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
}

export default App;
