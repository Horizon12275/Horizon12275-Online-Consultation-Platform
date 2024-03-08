import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BasicLayout } from "./layouts";
import HomePage from "./pages/home";
import ExpertProfilePage from "./pages/expertprofile";

export default function App() {
  return (
    <Router>
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
    </Router>
  );
}
