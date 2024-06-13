import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex py-40 items-center justify-center ">
      <form className="bg-yellow-300 p-10 rounded-3xl">
        <h3 className="text-center text-3xl mb-7 text-white">
          <i>Login</i>
        </h3>
        <div className="py-2">
          <input
            className="rounded-lg text-xl w-96 bg-yellow-200 "
            placeholder="E-mail Address"
            type="text"
          />
        </div>
        <input
          placeholder="Password"
          className="rounded-lg text-xl w-96 bg-yellow-200"
          type="text"
        />
        <div className="text-center text-2xl flex items-center justify-center mt-5">
          <Button
            className="bg-white  px-20 text-black  hover:text-white"
            type="submit"
          >
            <p className="text-xl">Login</p>
          </Button>
        </div>
        <p className="flex text-lg text-white items-center gap-3  p-2 mt-5 ">
          Don't Have account{" "}
          <Link className="text-xl text-black  hover:text-black" to={`/signup`}>
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
