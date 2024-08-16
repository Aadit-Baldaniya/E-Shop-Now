import { Button, Navbar } from "flowbite-react";
import SerachBar from "../serachBar/SerachBar";
import { Link, useNavigate } from "react-router-dom";
import img from "./Aadit .jpg";
import { ShoppingBasketIcon } from "lucide-react";
export function NavBar() {
  const user = JSON.parse(localStorage.getItem("users"));
  const cartData = JSON.parse(localStorage.getItem("cart"));

  const nevigate = useNavigate();

  function logout() {
    localStorage.removeItem("users");
    nevigate("/login");
  }
  return (
    <Navbar className="bg-yellow-400" fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          E-Shope Now
        </span>
      </Navbar.Brand>
      <div className="flex md:order-1">
        {/* <SerachBar>Get started</SerachBar> */}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link className="text-lg" href="/#" active>
          <Link to={"/"}>Home</Link>
        </Navbar.Link>
        <Navbar.Link className="text-lg" href="#">
          <Link to={"/Allproduct"}>AllProduct</Link>
        </Navbar.Link>
        <Navbar.Link className="text-lg" href="#">
          Services
        </Navbar.Link>
        <Navbar.Link className="text-lg" href="#">
          Pricing
        </Navbar.Link>
        {user?.role === "user" ? (
          <Navbar.Link>
            <Link className="text-lg flex gap-3 it" to={`/user-dashboard`}>
              <img className="h-9 rounded-md" src={img} alt="" />
              {user?.name}
            </Link>
          </Navbar.Link>
        ) : (
          ""
        )}
        {user?.role === "admin" ? (
          <Navbar.Link>
            <Link className="text-lg" to={`/admin-dashboard`}>
              {user?.name}
            </Link>
          </Navbar.Link>
        ) : (
          ""
        )}

        {!user ? (
          <Navbar.Link>
            <Link className="text-lg" to={`/Signup`}>
              SignUp
            </Link>
          </Navbar.Link>
        ) : null}
        {!user ? (
          <Navbar.Link>
            <Link className="text-lg" to={`/Login`}>
              Login{" "}
            </Link>
          </Navbar.Link>
        ) : null}

        {user ? (
          <Navbar.Link className="text-lg" href="#">
            <Link onClick={logout}>Logout</Link>
          </Navbar.Link>
        ) : null}
      </Navbar.Collapse>
      <SerachBar />
      <div>
        <Link
          className="flex gap-1 text-xl font-semibold items-center"
          to={"/CartProduct"}
        >
          <ShoppingBasketIcon height={"50px"} />

          {cartData.length}
        </Link>
      </div>
    </Navbar>
  );
}

export default NavBar;
