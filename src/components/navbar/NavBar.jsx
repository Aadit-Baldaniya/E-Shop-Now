import { Button, Navbar, NavbarLink } from "flowbite-react";
import SerachBar from "../serachBar/SerachBar";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <Navbar className="bg-yellow-400" fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          E-Shope Now
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {/* <SerachBar>Get started</SerachBar> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="text-lg" href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link className="text-lg" href="#">
          About
        </Navbar.Link>
        <Navbar.Link className="text-lg" href="#">
          Services
        </Navbar.Link>
        <Navbar.Link className="text-lg" href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link>
          <Link className="text-lg" to={`/user-dasebord`}>
            Kamal
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link className="text-lg" to={`/admin-dasebord`}>
            Admin
          </Link>
        </Navbar.Link>
        <Navbar.Link className="text-lg" href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
      <SerachBar />
    </Navbar>
  );
}

export default NavBar;
