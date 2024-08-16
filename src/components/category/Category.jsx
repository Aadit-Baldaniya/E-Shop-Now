import { useNavigate } from "react-router-dom";
import { category } from "../data/data";
import { useSelect } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, DeleteProduct } from "../ReduxTollkit/Slice";
import { useEffect } from "react";

function Category() {
  const nevigate = useNavigate();

  return (
    <div className="flex flex-col mt-5">
      <div className="flex overflow-x-scroll  lg:justify-center hide-scroll-bar">
        <div className="flex">
          {category.map((value, index) => {
            return (
              <div
                onClick={() => nevigate(`/catagory/${value.name}`)}
                key={index}
                className="px-3 lg:px-10"
              >
                <div className="w-16 h-16 lg:w-24  lg:h-24 mb-1 bg-yellow-400 rounded-2xl hover:bg-yellow-300 transition-all cursor-pointer max-w-xs ">
                  <div className="flex justify-center">
                    <img className=" " src={value.image} alt="" />
                  </div>
                </div>
                <h1 className="text-center text-sm lg:text-sm font-medium  title-font first-letter:uppercase">
                  {value.name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Category;
