import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import ErrorPage from "./pages/errorpage";
import ExpertProfilePage from "./pages/expertprofile";
import ConsultPage from "./pages/consultation";
import HistoryPage from "./pages/history";
import BecomeExpertPage from "./pages/become-expert";
import UserPage from "./pages/user";
import "./css/global.css";
import ExpertChoosePage from "./pages/expertchoose";
import BuildYourOwnTeamLibrary from "./pages/test";
import PlazaPage from "./pages/plaza";
import ArticlePage from "./pages/article";
import RankingPage from "./pages/ranking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/expert",
    element: <ExpertChoosePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/expert/:id",
    element: <ExpertProfilePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/expert/:id/consultation",
    element: <ConsultPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/article/:id",
    element: <ArticlePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/plaza",
    element: <PlazaPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/become-expert",
    element: <BecomeExpertPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user",
    element: <UserPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ranking",
    element: <RankingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
