import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("scroll to top");
  }, [location.pathname]);

  return null;
}

export default ScrollToTop;
