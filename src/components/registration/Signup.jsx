import { Button, Spinner } from "flowbite-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Mycontaxt from "../../contaxt/Mycontaxt";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../FIREBASE/Firebaseconfing";
import { addDoc, collection, Timestamp } from "firebase/firestore";

function Signup() {
  const contaxt = useContext(Mycontaxt);
  const { loading, setLoading } = contaxt;
  const navigate = useNavigate();
  const [userSingUp, setUserSingUp] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "user",
  });

  const userSingupfunction = async () => {
    if (userSingUp.password !== userSingUp.confirmpassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (
      userSingUp.name === "" ||
      userSingUp.email === "" ||
      userSingUp.password === "" ||
      userSingUp.confirmpassword === ""
    ) {
      toast.error("All Fildes Are Require");
    }
    setLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSingUp.email,
        userSingUp.password
      );

      const user = {
        name: userSingUp.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSingUp.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };
      const userReference = collection(db, "user");
      addDoc(userReference, user);
      setUserSingUp({
        name: "",
        email: "",
        password: "",
      });

      toast.success("Sign Up Successfully");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen relative">
      <div className="left-[46%] absolute">
        {loading && <Spinner className="h-[25%] w-[25%]" />}
      </div>
      <div className="bord bg-yellow-300 p-6 px-12 rounded-3xl">
        <h2 className="text-center font-bold text-white text-2xl py-3">
          E-Signup
        </h2>
        <div className="py-2">
          <input
            className="rounded-lg w-80 font-medium "
            placeholder="Full Name"
            type="text"
            value={userSingUp.name}
            onChange={(e) => {
              setUserSingUp({ ...userSingUp, name: e.target.value });
            }}
          />
        </div>
        <div className="py-2">
          <input
            className="rounded-lg w-80 font-medium "
            placeholder="E-mail Address"
            type="text"
            value={userSingUp.email}
            onChange={(e) => {
              setUserSingUp({ ...userSingUp, email: e.target.value });
            }}
          />
        </div>{" "}
        <div className="py-2">
          <input
            className="rounded-lg w-80 font-medium "
            placeholder="Password"
            type="text"
            name="Password"
            value={userSingUp.password}
            onChange={(e) => {
              setUserSingUp({ ...userSingUp, password: e.target.value });
            }}
          />
        </div>{" "}
        <div className="py-2">
          <input
            className="rounded-lg w-80 font-medium "
            placeholder="Confirm Password"
            type="text"
            name="Confirm Password"
            onChange={(e) => {
              setUserSingUp({ ...userSingUp, confirmpassword: e.target.value });
            }}
          />
        </div>
        <div className="px-10 py-3  ">
          <Button className="px-20  " onClick={userSingupfunction}>
            Signup
          </Button>
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
