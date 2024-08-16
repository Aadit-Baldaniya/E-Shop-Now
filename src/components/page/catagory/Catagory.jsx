import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Mycontaxt from "../../../contaxt/Mycontaxt";
import { Card, Spinner } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, DeleteProduct } from "../../ReduxTollkit/Slice";
import toast from "react-hot-toast";

function Catagory() {
  const { catagoryname } = useParams();
  const context = useContext(Mycontaxt);
  const { loading, getAllProduct } = context;
  const nevigate = useNavigate();

  const productFilter = getAllProduct.filter((value) => {
    return value.category.includes(catagoryname);
  });
  const cartItem = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  function AddToCart(id) {
    dispatch(addToCart(id));
    toast.success("Add To Cart");
  }
  function DeleteToCart(id) {
    dispatch(DeleteProduct(id));
    toast.success("Delete To Cart");
  }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);
  return (
    <div>
      <h1 className="text-3xl text-center mt-5 font-bold">{catagoryname}</h1>

      <div className="text-center font-semibold text-2xl mt-10 p-5 flex justify-center items-center gap-5">
        {loading ? (
          <>
            <Spinner />
          </>
        ) : (
          <>
            {productFilter.length > 0 ? (
              <>
                {productFilter.map((value, index) => {
                  const { id, title, price, productImageUrl } = value;
                  return (
                    <Card key={index} className="max-w-2xl lg:max-w-sm">
                      <img
                        onClick={() => nevigate(`/ProductInfo/${id}`)}
                        className="w-52 justify-center flex items-center"
                        src={productImageUrl}
                        alt=""
                      />
                      <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                          {title}
                        </h5>
                      </a>
                      <div className="mb-5 mt-2.5 flex items-center">
                        <svg
                          className="h-5 w-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="h-5 w-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="h-5 w-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="h-5 w-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="h-5 w-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                          5.0
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                          ${price}
                        </span>
                        {cartItem?.some((item) => item.id === id) ? (
                          <a
                            onClick={() => DeleteToCart(value)}
                            href="#"
                            className="rounded-lg bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                          >
                            Delete To Cart
                          </a>
                        ) : (
                          <a
                            onClick={() => AddToCart(value)}
                            href="#"
                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                          >
                            Add To Cart
                          </a>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </>
            ) : (
              <div>
                <div className="flex items-center justify-center">
                  <img
                    className=" mb-2"
                    src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png"
                    alt=""
                  />
                </div>
                <h1 className=" text-black text-xl">
                  No
                  <span className="font-bold p-1">
                    {catagoryname.toUpperCase()}
                  </span>
                  product found
                </h1>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Catagory;
