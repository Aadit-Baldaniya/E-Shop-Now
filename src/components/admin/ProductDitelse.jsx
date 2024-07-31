import { useContext } from "react";
import Mycontaxt from "../../contaxt/Mycontaxt";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "../../FIREBASE/Firebaseconfing";

function ProductDitelse() {
  const context = useContext(Mycontaxt);
  const { loading, setLoading, getAllProduct, getAllProductFunction } = context;
  const nevigate = useNavigate();
  const deletedata = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "products", id));
      toast.success("Product deleted Successfully");
      getAllProductFunction();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="flex gap-5m  py-2 justify-center bg-slate-50 rounded-xl items-center w-52">
        <h1 className="text-2xl   text-start">All Product</h1>
      </div>
      <div className="w-full overflow-x-auto py-2">
        <table
          className="w-full   text-left border border-solid rounded-lg
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
                Image
              </th>
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                Title
              </th>
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                Price
              </th>
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                Category
              </th>
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                Date
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

            {getAllProduct.map((value, index) => {
              const { id, title, price, category, date, productImageUrl } =
                value;
              console.log("id", id);
              return (
                <tr key={index} className="text-yellow-100">
                  <td className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t">
                    {index + 1}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-yellow-200 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    <div className="flex justify-center">
                      <img
                        className="w-10 rounded-lg "
                        src={productImageUrl}
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="text-slate-500 h-12 px-6 font-bold transition duration-300 stroke-slate-500   border-yellow-100 first:border-l-0 text-md border-l border-t first-letter:uppercase cursor-pointer">
                    {title}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-yellow-200 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    ₹{price}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-yellow-200 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    {category}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0  border-yellow-200 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    {date}
                  </td>

                  <td
                    onClick={() => nevigate(`/updateproduct/${id}`)}
                    className="text-green-500 h-12 px-6 font-bold transition duration-300 stroke-slate-500   border-yellow-200 first:border-l-0 text-md border-l border-t first-letter:uppercase cursor-pointer"
                  >
                    Edit
                  </td>
                  {/* <Button onClick={() => deleteProduct(id)}> */}
                  <td
                    onClick={() => deletedata(id)}
                    className="text-red-500 h-12 px-6 font-bold transition duration-300 stroke-slate-500   border-yellow-100 first:border-l-0 text-md border-l border-t first-letter:uppercase cursor-pointer"
                  >
                    Delete
                  </td>
                  {/* </Button> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductDitelse;
