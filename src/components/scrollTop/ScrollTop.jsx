import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop() {
  const { pathName } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathName]);
  return null;
}

export default ScrollTop;
