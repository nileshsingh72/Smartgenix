import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Notfound from "../pages/Notfound";
import Order from "../pages/Order";
import Product from "../pages/Product";
import Signup from "../pages/Signup";
import SingleProduct from "../pages/SingleProduct";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product/:id" element={<Product />}></Route>
      <Route path="/signgleproduct/:id" element={<SingleProduct />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/order" element={<PrivateRoute><Order /></PrivateRoute>}></Route>
      <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>}></Route>
      <Route path="*" element={<Notfound />}></Route>
    </Routes>
  );
}

export default AllRoutes;
