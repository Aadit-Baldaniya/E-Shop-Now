import { Button, Card, Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import Mycontaxt from "../../../contaxt/Mycontaxt";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, DeleteProduct } from "../../ReduxTollkit/Slice";
import toast from "react-hot-toast";
function AllProduct() {
  const cartItem = useSelector((store) => {
    return store.cart;
  });
  const dispatch = useDispatch();
  function AddToCart(id) {
    dispatch(addToCart(id));
    toast.success("Add To Cart");
  }
  function DeleteToCart(id) {
    dispatch(DeleteProduct(id));
    toast.error("Detele To Cart");
  }
  const navigate = useNavigate();
  function card(id) {
    navigate(`/ProductInfo/${id}`);
  }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);
  const contaxt = useContext(Mycontaxt);
  const { getAllProduct, loading } = contaxt;
  return (
    <div className="p-10">
      <div className="text-2xl font-bold border-t-4 border-b-4  flex justify-center items-center p-5">
        All Product
      </div>
      <div className="justify-center flex ">
        {loading && <Spinner className="w-20 h-20" />}
      </div>

      <div className="grid grid-rows-1 grid-flow-col gap-4 p-5">
        {getAllProduct.map((value, index) => {
          return (
            <Card
              key={index}
              className="max-w-2xl lg:max-w-72 lg:max-h-92 gap-3 "
              imgAlt="Meaningful alt text for an image that is not purely decorative"
            >
              <img
                onClick={() => card(value.id)}
                className="h-52 justify-center rounded-md"
                src={value.productImageUrl}
                alt=""
              />
              <h5 className="text-xl opacity-80 tracking-tight text-gray-900 dark:text-white">
                E-Shop Now
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {value.description.slice(0, 50)}...
              </p>
              <p className="text-md font-semibold">${value.price}</p>
              {cartItem?.some((item) => item.id === value.id) ? (
                <Button
                  onClick={() => DeleteToCart(value)}
                  className="bg-red-500"
                >
                  Delete To Cart
                </Button>
              ) : (
                <Button
                  onClick={() => AddToCart(value)}
                  className="bg-yellow-400"
                >
                  Add To Cart
                </Button>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default AllProduct;
