import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/signups/Signup";
import Login from "./components/logins/Login";
import AddProducts from "./components/addproducts/AddProducts"
import EditProducts from "./components/editproducts/EditProducts";
import CreateOrder from "./components/createorder/CreateOrder";
import Home from "./components/home/Home";
import ProductList from "./components/productlists/ProductList";
import ProductDetails from "./components/productdetails/ProductDetails";

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth"/>} />
        <Route exact path="/users" element={<Signup />} />
        <Route path="/auth" element={<Login />} />
        <Route adminOnly={true} path="/add-product" element={<AddProducts />} />
        <Route adminOnly={true} path="/modify-product/:id" element={<EditProducts />} />
        <Route adminOnly={false} path="/order/:id/:quantity" element={<CreateOrder />} />
        <Route adminOnly={false} path="/home" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
