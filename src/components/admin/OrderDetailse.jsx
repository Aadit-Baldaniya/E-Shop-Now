import { Button } from "flowbite-react";
import { useContext } from "react";
import Mycontaxt from "../../contaxt/Mycontaxt";

function OrderDetailse() {
  const contxt = useContext(Mycontaxt);
  const { order, DeleteOrder } = contxt;

  return (
    <div>
      <div className="flex gap-5m  py-2 justify-center bg-slate-50 rounded-xl items-center w-52">
        <h1 className="text-2xl   text-start">All Order</h1>
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
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                Sr.No.
              </th>
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                Order Id
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
                className="h-12 px-6 text-center font-bold  border-yellow-100 first:border-l-0 text-md border-l bg-slate-100"
              >
                Category
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
                Quantity
              </th>
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                Total Price
              </th>
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                Status
              </th>
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                name{" "}
              </th>
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                Address{" "}
              </th>
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                Pin Code
              </th>
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                Phone Number
              </th>
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                E-mail
              </th>
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                Date
              </th>{" "}
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                Action
              </th>{" "}
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                Edit
              </th>{" "}
              <th
                scope="col"
                className="h-12 px-6 font-bold  border-yellow-200 first:border-l-0 text-md border-l bg-slate-100"
              >
                Delete
              </th>
            </tr>
            {order.map((value, index) => {
              return (
                <>
                  {value.cartItem.map((data, index) => {
                    const {
                      id,
                      productImageUrl,
                      price,
                      date,
                      category,
                      description,
                      quantity,
                      title,
                    } = data;
                    return (
                      <tr key={index} className="text-yellow-100">
                        <td className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t">
                          {index++}
                        </td>
                        <td
                          className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t
                first-letter:uppercase"
                        >
                          {id}
                        </td>
                        <td
                          className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t
                first-letter:uppercase"
                        >
                          <img src={productImageUrl} alt="" />
                        </td>{" "}
                        <td
                          className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t
                first-letter:uppercase"
                        >
                          {title}
                        </td>{" "}
                        <td
                          className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t
                first-letter:uppercase"
                        >
                          {category}
                        </td>
                        <td
                          className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t
                first-letter:uppercase"
                        >
                          {price}
                        </td>{" "}
                        <td
                          className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t
                first-letter:uppercase"
                        >
                          {quantity}
                        </td>{" "}
                        <td
                          className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t
                first-letter:uppercase"
                        >
                          {price * quantity}
                        </td>{" "}
                        <td
                          className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t
                first-letter:uppercase"
                        >
                          {value?.status}
                        </td>{" "}
                        <td
                          className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t
                first-letter:uppercase"
                        >
                          {value?.addInfo?.name}
                        </td>{" "}
                        <td
                          className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t
                first-letter:uppercase"
                        >
                          {value?.addInfo?.Address}
                        </td>{" "}
                        <td
                          className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t
                first-letter:uppercase"
                        >
                          {value?.addInfo?.pincode}
                        </td>{" "}
                        <td
                          className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t
                first-letter:uppercase"
                        >
                          {value?.addInfo?.mobileNumber}
                        </td>{" "}
                        <td
                          className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t
                first-letter:uppercase"
                        >
                          {value.email}
                        </td>
                        <td
                          className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t
                first-letter:uppercase"
                        >
                          {value.date}
                        </td>
                        <td
                          className="h-12 px-6 font-bold transition duration-300 stroke-slate-500 text-slate-500  border-yellow-200 first:border-l-0 text-md border-l border-t
                first-letter:uppercase"
                        >
                          {" "}
                          {/* {value.date} */}
                        </td>
                        <td className="text-green-500 h-12 px-6 font-bold transition duration-300 stroke-slate-500   border-yellow-200 first:border-l-0 text-md border-l border-t first-letter:uppercase cursor-pointer">
                          Edit
                        </td>
                        <td
                          onClick={() => DeleteOrder(value.id)}
                          className="text-red-500 h-12 px-6 font-bold transition duration-300 stroke-slate-500   border-yellow-200 first:border-l-0 text-md border-l border-t first-letter:uppercase cursor-pointer"
                        >
                          Delete
                        </td>
                      </tr>
                    );
                  })}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderDetailse;
