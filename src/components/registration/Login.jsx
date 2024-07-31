import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Spinner } from "flowbite-react";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../FIREBASE/Firebaseconfing";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Mycontaxt from "../../contaxt/Mycontaxt";

function Login() {
  const context = useContext(Mycontaxt);
  const { loading, setLoading } = context;
  const nevigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const userLoginFunction = async () => {
    if ((userLogin.email === "", userLogin.password === "")) {
      toast.error("All Fildes Are Must Be Require");
    }
    setLoading(true);
    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );
      try {
        const q = query(
          collection(db, "user"),
          where("uid", "==", users?.user?.uid)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: "",
          });
          toast.success("Login Successfully");
          setLoading(false);
          if (user.role === "user") {
            nevigate("/user-dashboard");
          } else {
            nevigate("/admin-dashboard");
          }
        });
        return () => data;
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Login failed");
    }
  };
  return (
    <div className="flex py-40 items-center justify-center ">
      <div></div>
      {loading && <Spinner />}
      <form className="bg-yellow-300 p-10 rounded-3xl">
        <h3 className="text-center text-3xl mb-7 text-white">
          <i>Login</i>
        </h3>
        <div className="py-2">
          <input
            className="rounded-lg text-xl w-96 bg-yellow-200 "
            placeholder="E-mail Address"
            type="text"
            value={userLogin.email}
            onChange={(e) => {
              setUserLogin({
                ...userLogin,
                email: e.target.value,
              });
            }}
          />
        </div>
        <input
          placeholder="Password"
          className="rounded-lg text-xl w-96 bg-yellow-200"
          type="text"
          value={userLogin.password}
          onChange={(e) => {
            setUserLogin({
              ...userLogin,
              password: e.target.value,
            });
          }}
        />
        <div className="text-center text-2xl flex items-center justify-center mt-5">
          <Button
            className="bg-white  px-20 text-black  hover:text-white"
            type="button"
            onClick={userLoginFunction}
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
