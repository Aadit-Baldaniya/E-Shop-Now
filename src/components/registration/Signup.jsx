import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bord bg-yellow-300 p-6 px-12 rounded-3xl">
        <h2 className="text-center font-bold text-white text-2xl py-3">
          E-Signup
        </h2>
        <div className="py-2">
          <input
            className="rounded-lg w-80 font-medium "
            placeholder="Full Name"
            type="text"
          />
        </div>
        <div className="py-2">
          <input
            className="rounded-lg w-80 font-medium "
            placeholder="E-mail Address"
            type="text"
          />
        </div>{" "}
        <div className="py-2">
          <input
            className="rounded-lg w-80 font-medium "
            placeholder="Password"
            type="text"
          />
        </div>{" "}
        <div className="py-2">
          <input
            className="rounded-lg w-80 font-medium "
            placeholder="Confirm Password"
            type="text"
          />
        </div>
        <div className="px-10 py-3  ">
          <Button className="px-20  ">Signup</Button>
        </div>
        <div>
          <h2 className="flex gap-3 text-lg text-white">
            Have an account
            <Link className="text-black" to={`/Login`}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
