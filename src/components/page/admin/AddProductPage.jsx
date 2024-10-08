import { useContext, useState } from "react";
import Mycontaxt from "../../../contaxt/Mycontaxt";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "../../../FIREBASE/Firebaseconfing";

const categoryList = [
  {
    name: "fashion",
  },
  {
    name: "shirt",
  },
  {
    name: "jacket",
  },
  {
    name: "mobile",
  },
  {
    name: "laptop",
  },
  {
    name: "shoes",
  },
  {
    name: "home",
  },
  {
    name: "books",
  },
];

const AddProductPage = () => {
  const context = useContext(Mycontaxt);
  const { loading, setLoading } = context;
  // navigate
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const addProductFunction = async () => {
    if (
      product.title === "" ||
      product.price === "" ||
      product.productImageUrl === "" ||
      product.category === "" ||
      product.description === ""
    ) {
      return toast.error("all fields are required");
    }
    setLoading(true);
    try {
      const productRef = collection(db, "products");
      await addDoc(productRef, product);
      toast.success("Product Added successfully");
      navigate("/admin-dashboard");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Add Product Failed");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        {loading && <Loader />}
        {/* Login Form  */}
        <div className="login_Form bg-yellow-50 px-8 py-6 border border-yellow-100 rounded-xl shadow-md">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-yellow-500 ">
              Add Product
            </h2>
          </div>

          {/* Input One  */}
          <div className="mb-3">
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={(e) => {
                setProduct({
                  ...product,
                  title: e.target.value,
                });
              }}
              placeholder="Product Title"
              className="bg-yellow-50 border text-yellow-300 border-yellow-200 px-2 py-2 w-96 rounded-md outline-none placeholder-yellow-300"
            />
          </div>

          {/* Input Two  */}
          <div className="mb-3">
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={(e) => {
                setProduct({
                  ...product,
                  price: e.target.value,
                });
              }}
              placeholder="Product Price"
              className="bg-yellow-50 border text-yellow-300 border-yellow-200 px-2 py-2 w-96 rounded-md outline-none placeholder-yellow-300"
            />
          </div>

          {/* Input Three  */}
          <div className="mb-3">
            <input
              type="text"
              name="productImageUrl"
              value={product.productImageUrl}
              onChange={(e) => {
                setProduct({
                  ...product,
                  productImageUrl: e.target.value,
                });
              }}
              placeholder="Product Image Url"
              className="bg-yellow-50 border text-yellow-300 border-yellow-200 px-2 py-2 w-96 rounded-md outline-none placeholder-yellow-300"
            />
          </div>

          {/* Input Four  */}
          <div className="mb-3">
            <select
              value={product.category}
              onChange={(e) => {
                setProduct({
                  ...product,
                  category: e.target.value,
                });
              }}
              className="w-full px-1 py-2 text-yellow-300 bg-yellow-50 border border-yellow-200 rounded-md outline-none  "
            >
              <option disabled>Select Product Category</option>
              {categoryList.map((value, index) => {
                const { name } = value;
                return (
                  <option
                    className=" first-letter:uppercase"
                    key={index}
                    value={name}
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Input Five  */}
          <div className="mb-3">
            <textarea
              value={product.description}
              onChange={(e) => {
                setProduct({
                  ...product,
                  description: e.target.value,
                });
              }}
              name="description"
              placeholder="Product Description"
              rows="5"
              className=" w-full px-2 py-1 text-yellow-300 bg-yellow-50 border border-yellow-200 rounded-md outline-none placeholder-yellow-300 "
            ></textarea>
          </div>

          {/* Add Product Button  */}
          <div className="mb-3">
            <button
              onClick={addProductFunction}
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 w-full text-white text-center py-2 font-bold rounded-md "
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
