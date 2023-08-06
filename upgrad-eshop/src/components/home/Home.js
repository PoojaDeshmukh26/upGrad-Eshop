import React, { useEffect } from "react";
import { Box } from '@mui/material';
import { Route, BrowserRouter as Router, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ToggleButtons from "../../common/togglebutton/ToggleButtons";
 import ProductDetails from "../../components/productdetails/ProductDetails";
import ProductList from "../../components/productlists/ProductList";
import SearchBar from '../../components/searchbar/SearchBar';


const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = axios.defaults.headers.common["Authorization"];

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Box mt={2} display="flex" justifyContent="center">
        <ToggleButtons />
        <SearchBar />
      </Box>
      <Router>
      <Routes location={location}>
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
      </Router> 
    </>
  );
};

export default Home;
