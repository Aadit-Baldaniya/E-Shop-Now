import { useEffect, useState } from "react";
import Mycontaxt from "./Mycontaxt";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../FIREBASE/Firebaseconfing";

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
  useEffect(() => {
    getAllProductFunction();
  }, []);
  return (
    <Mycontaxt.Provider
      value={{ loading, setLoading, getAllProduct, getAllProductFunction }}
    >
      {children}
    </Mycontaxt.Provider>
  );
}

export default MyState;
