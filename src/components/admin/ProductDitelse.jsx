import { Button } from "flowbite-react";
import { CarrotIcon, ShoppingBag } from "lucide-react";

function ProductDitelse() {
  return (
    <div>
      <div className="flex gap-5m  py-2 justify-center bg-slate-50 rounded-xl items-center w-52">
        <h1 className="text-2xl   text-start">All Product</h1>
      </div>
      <div className="w-full overflow-x-auto py-2">
        <table
          className="w-full   text-left border border-solid
         border-yellow-300 text-yellow-400 border-collapse sm:border-separate "
        >
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-center font-bold  border-yellow-100 first:border-l-0 text-md border-l"
              >
                Sr.No.
              </th>
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                Locatin Name
              </th>
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                Action
              </th>
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                Action
              </th>
            </tr>
            <tr className="text-yellow-100">
              <td className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t">
                1.
              </td>
              <td
                className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t
              first-letter:uppercase"
              >
                {"sitanager"}
              </td>
              <td className="text-green-300 h-12 px-6 font-bold transition duration-300 stroke-slate-500   border-yellow-200 first:border-l-0 text-md border-l border-t first-letter:uppercase cursor-pointer">
                Edit
              </td>
              <td className="text-red-500 h-12 px-6 font-bold transition duration-300 stroke-slate-500   border-yellow-200 first:border-l-0 text-md border-l border-t first-letter:uppercase cursor-pointer">
                Delete
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex  items-center justify-center">
        <Button className=" bg-green-200 text-black  ">
          <ShoppingBag className="w-10" />

          <p className="text-xl ">Add Product</p>
        </Button>
      </div>
    </div>
  );
}

export default ProductDitelse;
