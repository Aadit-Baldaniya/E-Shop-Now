import { Navbar } from "@material-tailwind/react";
import { Children } from "react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="main-content min-h-screen">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
