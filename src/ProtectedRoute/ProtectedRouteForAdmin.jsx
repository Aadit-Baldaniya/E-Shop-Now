import React from "react";
import AdminDasebord from "../components/page/admin/AdminDasebord";

function ProtectedRouteForAdmin({ children }) {
  const user = JSON.parse(localStorage.getItem("users"));
  if (user?.role === "admin") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}

export default ProtectedRouteForAdmin;
