import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<< Updated upstream
import Navbar from "./components/navbar";
import Footer from "./components/footer";
=======
import { BasicLayout } from "./layouts";
import HomePage from "./pages/home";
import ExpertProfilePage from "./pages/expertprofile";
>>>>>>> Stashed changes

export default function App() {
  return (
    <Router>
<<<<<<< Updated upstream
      <Navbar />
      <Routes></Routes>
      <Footer />
=======
      <Routes>
        <Route
          path="/"
          element={
            <BasicLayout>
              <HomePage />
            </BasicLayout>
          }
        ></Route>
        <Route
          path="/expert/:id"
          element={
            <BasicLayout>
              <ExpertProfilePage  />
            </BasicLayout>
          }
        ></Route>
      </Routes>
>>>>>>> Stashed changes
    </Router>
  );
}
