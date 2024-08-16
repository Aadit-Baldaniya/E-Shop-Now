import Layout from "../../layout/Layout";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  DecrementProduct,
  DeleteProduct,
  IncrementProduct,
} from "../../ReduxTollkit/Slice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BuyNoeOrder from "../../buyNowOrder/BuyNoeOrder";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "../../../FIREBASE/Firebaseconfing";

function CartProduct() {
  const cartItem = useSelector((store) => store.cart);
  const nevigate = useNavigate();
  const dispatch = useDispatch();

  function increment(id) {
    dispatch(IncrementProduct(id));
  }

  function decrement(id) {
    dispatch(DecrementProduct(id));
  }
  function deleteItem(id) {
    dispatch(DeleteProduct(id));
  }
  const cartItemTotal = cartItem
    .map((value) => value.quantity)
    .reduce((prevalue, currvalue) => prevalue + currvalue, 0);
  const cartTotal = cartItem
    .map((value) => value.price * value.quantity)
    .reduce((prevalue, currvalue) => prevalue + currvalue, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);
  const user = JSON.parse(localStorage.getItem("users"));
  const [addInfo, setAddInfo] = useState({
    name: "",
    Address: "",
    pincode: "",
    mobileNumber: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-Us", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  function buyNow() {
    if (
      addInfo.name === "" ||
      addInfo.Address === "" ||
      addInfo.pincode === "" ||
      addInfo.mobileNumber === ""
    ) {
      return toast.error("Required All Fields");
    }

    const orderInfo = {
      cartItem,
      addInfo,
      email: user.email,
      userId: user.uid,
      status: "Confirmed",
      time: Timestamp.now(),
      date: new Date().toLocaleString("en-Us", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    try {
      const orderRef = collection(db, "order");
      addDoc(orderRef, orderInfo);
      setAddInfo({
        name: "",
        Address: "",
        mobileNumber: "",
        pincode: "",
      });
      toast.success("Order Placed Successfull");
      nevigate("/user-dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <div>
        <div>
          <h2 className="text-3xl font-bold lg:grid-cols-12 lg:items-start justify-center py-4">
            Shopping-Cart
          </h2>
          <form
            action=""
            className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
          >
            <section
              aria-labelledby="cart-heading"
              className="rounded-lg   bg-white lg:col-span-8"
            >
              <ul role="list" className="divide-y divide-gray-300">
                {cartItem.length > 0 ? (
                  <>
                    {cartItem?.map((value, index) => {
                      const {
                        id,
                        title,
                        price,
                        productImageUrl,
                        quantity,
                        category,
                      } = value;

                      return (
                        <div>
                          <li key={index} className="flex py-5">
                            <div className="flex-shrink-0 px-3">
                              <img
                                src={productImageUrl}
                                alt=""
                                className=" px- sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                              />
                            </div>
                            <div>
                              {/* <h2 className="text-lg font-bold">{value.name}</h2>
                          <div className="flex gap-2 mt-1">
                            <h2 className="text-gray-400">{value.color}</h2>
                            <div className="inline-block h-5 w-0.5 bg-gray-400 mt-1"></div>
                            <h2 className="text-gray-400">{value.size}</h2>
                          </div> */}
                              <div className=" px-5 py-2 relative">
                                <h1 className="font-medium p-1">
                                  Price :${price}
                                </h1>

                                <h2 className="font-bold p-1"> {title}</h2>

                                <p className="text-green-500 p-1">{category}</p>
                              </div>
                            </div>
                          </li>
                          <div className="flex gap-2 px-5 p-2">
                            <button
                              onClick={() => decrement(id)}
                              className="font-semibold "
                            >
                              <FaMinus />
                            </button>
                            <button className="mx-1 h-7 w-9 rounded-md border text-center">
                              {quantity}
                            </button>
                            <button
                              onClick={() => increment(id)}
                              className=" font-semibold"
                            >
                              <FaPlus />
                            </button>
                            <div>
                              <button
                                onClick={() => deleteItem(value)}
                                className="flex items-center gap-1 px-5 text-red-600"
                              >
                                <FaTrash />
                                Remove
                              </button>
                            </div>
                          </div>
                          {/* <div className="bg-gray-400 w-[80%] mt-5 ml-3.5 h-0.5 opacity-50"></div> */}
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <div className="flex items-center justify-center">
                    <img
                      className=" mb-2"
                      src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png"
                      alt=""
                    />
                  </div>
                )}
              </ul>
            </section>
            <section
              aria-labelledby="summary-heading"
              className="mt-10 rounded-md bg-white lg:col-span-4 lg:mt-0  border-2 p-5 pr-5"
            >
              <h2 className="text-2xl font-medium sm:p-2">Price Detaitls</h2>
              <div>
                <dl className="space-y-1 px-2 py-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-500  text-lg">
                      Price ({cartItemTotal}) item
                    </dt>
                    <dd className="text-lg font-semibold ">
                      {cartTotal + ".00"}
                    </dd>
                  </div>
                  {/* <div className="flex items-center justify-between py-1">
                    <dt className="text-gray-500  text-lg">Discount</dt>
                    <dd className="text-lg text-green-500">$2,350</dd>
                  </div> */}
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-500  text-lg">Delivery Charges</dt>
                    <dd className="text-lg text-green-500">Free</dd>
                  </div>
                  <div className="flex items-center justify-between py-5 ">
                    <dt className="text-xl font-bold">Total Amount</dt>
                    <dd className="text-xl font-medium bg-gray-500 rounded-lg p-1 text-white">
                      {cartTotal}
                    </dd>
                  </div>
                </dl>
              </div>
              {
                user ? (
                  <BuyNoeOrder
                    addInfo={addInfo}
                    setAddInfo={setAddInfo}
                    buyNow={buyNow}
                  />
                ) : null
                // useNavigate("/login")
              }
            </section>
          </form>
        </div>
        <div></div>
      </div>
    </Layout>
  );
}

export default CartProduct;
