import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes></Routes>
      <Footer />
    </Router>
  );
}
