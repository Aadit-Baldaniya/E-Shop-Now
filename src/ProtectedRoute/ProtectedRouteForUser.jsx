import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRouteForUser({ children }) {
  const user = JSON.parse(localStorage.getItem("users"));
  console.log("user", user);
  if (user?.role === "user") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}

export default ProtectedRouteForUser;
