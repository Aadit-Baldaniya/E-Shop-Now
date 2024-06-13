import { Button, Card } from "flowbite-react";
import { Layout } from "lucide-react";
import { products } from "../../data/data";
import { useNavigate } from "react-router-dom";

function AllProduct() {
  const navigate = useNavigate();
  function card() {
    navigate(`/ProductInfo`);
  }
  return (
    <div className="grid  grid-rows-3 grid-flow-col    ">
      {products.map((value, index) => {
        return (
          <Card
            onClick={card}
            className="max-w-sm max-auto "
            imgAlt="Meaningful alt text for an image that is not purely decorative"
          >
            <img className="h-72 rounded-md" src={value.image} alt="" />
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
  );
}

export default AllProduct;
