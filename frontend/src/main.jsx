import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import ErrorPage from "./pages/errorpage";
import ExpertProfilePage from "./pages/expertprofile";
import ConsultPage from "./pages/consultation";
import UserPage from "./pages/user";
import "./css/global.css";
import "./index.css";
import ExpertChoosePage from "./pages/expertchoose";
import PlazaPage from "./pages/plaza";
import ArticlePage from "./pages/article";
import LandingPage from "./pages/landing.jsx";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import RankingPage from "./pages/ranking";
import VideoChatPage from "./pages/videoChat.jsx";
import ArticleBrowsePage from "./pages/article_browse.jsx";
import BecomeExpertPage from "./pages/become_expert.jsx";
import WriteArticlePage from "./pages/writeArticle.jsx";
import VerifyExpertPage from "./pages/verifyExpert.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import Expert_profile from "./pages/expert_profile.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";

const router = createBrowserRouter([
  {
    element: <ScrollToTop />,
  },
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
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
    path: "/consultation",
    element: <ConsultPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/landing",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/article",
    element: <ArticleBrowsePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/article/:id",
    element: <ArticlePage />,
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
    path: "/videochat/:receiverId",
    element: <VideoChatPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/write-article",
    element: <WriteArticlePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/verify-expert",
    element: <VerifyExpertPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/expert_profile",
    element: <Expert_profile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
