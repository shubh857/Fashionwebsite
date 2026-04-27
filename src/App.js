import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import './App.css';
import About from "./pages/About";
import Arrival from "./pages/Arrival";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom'
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Single from "./pages/Single";

const App = () => {
  return <>
    {/* <Blog /> */}
    {/* <Header /> */}
    {/* <Home /> */}
    {/* <About />
  <Arrival />
  <Product />
  <Register />
  <Footer />  */}
    {/* <Contact /> */}


    
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/product/:id' element={<Single />}></Route>
        {/* <Route path='/arrival' element={<Arrival />}></Route> */}
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footer />



  </>
}

export default App