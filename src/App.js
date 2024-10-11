// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { DefaultLayout, AdminLayout } from "./components/layout/index";
import './App.css'
import Login from "./pages/Auth/Login";
import Account from "./pages/Profile/Account";
import EditProfile from "./pages/Profile/EditProfile";
import ChangePass from "./pages/Profile/ChangePass";
import ProductDetail from "./pages/product/productDetail";
import Product from "./pages/product/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Adhome from "./pages/Admin/Adhome";
const App = () => {
  return (
    <Router>
      {/* <UserProvider> */}
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
        <Route path="/login" element={<DefaultLayout><Login /></DefaultLayout>} />
        <Route path="/profile" element={<DefaultLayout><Account /></DefaultLayout>} />
        <Route path="/edit_profile" element={<DefaultLayout><EditProfile /></DefaultLayout>} />
        <Route path="/change_password" element={<DefaultLayout><ChangePass /></DefaultLayout>} />
        <Route path="/product_detail" element={<DefaultLayout><ProductDetail /></DefaultLayout>} />
        <Route path="/product_list" element={<DefaultLayout><Product /></DefaultLayout>} />
        <Route path="/contact" element={<DefaultLayout><Contact /></DefaultLayout>} />
        <Route path="/about" element={<DefaultLayout><About /></DefaultLayout>} />
        {/* admin */}
        <Route path="/admin" element={<AdminLayout><Adhome /></AdminLayout>} />


      </Routes>
      {/* <ToastContainer /> */}
    </Router>
  );
};

export default App;