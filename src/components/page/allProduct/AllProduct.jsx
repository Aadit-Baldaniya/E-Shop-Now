import { Button, Card, Spinner } from "flowbite-react";
import { Layout } from "lucide-react";
import { products } from "../../data/data";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MyState from "../../../contaxt/MyState";
import Mycontaxt from "../../../contaxt/Mycontaxt";

function AllProduct() {
  const navigate = useNavigate();
  function card(id) {
    navigate(`/ProductInfo/${id}`);
  }
  const contaxt = useContext(Mycontaxt);
  const { getAllProduct, loading } = contaxt;
  return (
    <div>
      <div className="justify-center flex ">
        {loading && <Spinner className="w-20 h-20" />}
      </div>

      <div className="grid  grid-rows-3 grid-flow-col    ">
        {getAllProduct.map((value, index) => {
          return (
            <Card
              className="max-w-sm max-auto "
              imgAlt="Meaningful alt text for an image that is not purely decorative"
            >
              <img
                onClick={() => card(value.id)}
                className="w-52 justify-center rounded-md"
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
              <Button className="bg-yellow-400">Add</Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default AllProduct;
