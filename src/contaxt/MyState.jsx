import { useEffect, useState } from "react";
import Mycontaxt from "./Mycontaxt";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../FIREBASE/Firebaseconfing";
import toast from "react-hot-toast";
import { QuerySnapshot } from "firebase/firestore/lite";

function MyState({ children }) {
  const [loading, setLoading] = useState(false);
  const [getAllProduct, setGetAllProduct] = useState([]);
  const getAllProductFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllProduct(productArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [order, setOrder] = useState([]);

  const OrderFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "order"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let orderArray = [];
        QuerySnapshot.forEach((value) => {
          orderArray.push({ ...value.data(), id: value.id });
        });
        setOrder(orderArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const DeleteOrder = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "order", id));
      toast.success("Order Deleted Successfully");
      getAllProductFunction();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [allUser, setAllUser] = useState([]);

  const allUserFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "user"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let userArray = [];
        QuerySnapshot.forEach((value) => {
          userArray.push({ ...value.data(), id: value.id });
        });
        setAllUser(userArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "user", id));
      toast.success("User Deeletes Successful");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    OrderFunction();
    getAllProductFunction();
    allUserFunction();
  }, []);
  return (
    <Mycontaxt.Provider
      value={{
        loading,
        setLoading,
        getAllProduct,
        getAllProductFunction,
        order,
        DeleteOrder,
        allUser,
        deleteUser,
      }}
    >
      {children}
    </Mycontaxt.Provider>
  );
}
export default MyState;
