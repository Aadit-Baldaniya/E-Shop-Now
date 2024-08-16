import { product } from "../../data/data";
import Layout from "../../layout/Layout";
import { useContext } from "react";
import MyState from "../../../contaxt/MyState";
import Mycontaxt from "../../../contaxt/Mycontaxt";

function UserDasebord() {
  const user = JSON.parse(localStorage.getItem("users"));
  const context = useContext(Mycontaxt);
  const { loading, order } = context;
  return (
    <Layout>
      <div>
        <div className="max-auto  py-5 lg:py-8 items-center justify-center flex p-20 ">
          <div className="top hover:bg-yellow-200 bg-yellow-300 justify-center flex w-[60%] p-5 rounded-xl ">
            <div>
              <div className="flex justify-center items-center">
                <img
                  className=""
                  src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                  alt=""
                />
              </div>
              <div className="justify-center items-center p-5 ">
                <p className="flex justify-center gap-2 text-lg font-semibold">
                  Name:<span>{user?.name}</span>
                </p>
                <p className="flex justify-center gap-2 text-lg font-semibold">
                  E-mail:
                  <span>{user?.email}</span>
                </p>
                <p
                  className="flex 
                justify-center gap-2 text-lg font-semibold"
                >
                  Date:
                  <span>{user?.date}</span>
                </p>
                <p className="flex justify-center gap-2 text-lg font-semibold">
                  Role:
                  <span>{user?.role}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
            <h2 className="text-start text-2xl lg:text-3xl font-bold">
              Order Ditails
            </h2>

            {order
              .filter((value) => value.userId === user?.uid)
              .map((value, index) => {
                console.log(order.status);

                return (
                  <div key={index}>
                    {value.cartItem.map((value) => {
                      const {
                        id,
                        date,
                        quantity,
                        price,
                        title,
                        productImageUrl,
                        category,
                      } = value;
                      return (
                        <div className="mt-5 flex flex-col overflow-hidden rounded-xl border border-pink-100 md:flex-row">
                          <div className="w-full border-r border-pink-100 bg-pink-50 md:max-w-xs">
                            <div className="p-8">
                              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                                <div className="mb-4">
                                  <div className="text-sm font-semibold text-black">
                                    1. Order Id
                                  </div>
                                  <div className="text-sm font-medium text-gray-900">
                                    {id}
                                  </div>
                                </div>
                                <div className="mb-4">
                                  <div className="text-sm font-semibold text-black">
                                    2. Date
                                  </div>
                                  <div className="text-sm font-medium text-gray-900">
                                    {date}
                                  </div>
                                </div>{" "}
                                <div className="mb-4">
                                  <div className="text-sm font-semibold text-black">
                                    3. Total Amount
                                  </div>
                                  <div className="text-sm font-medium text-gray-900">
                                    ₹{price * quantity}
                                  </div>
                                </div>
                                <div className="mb-4">
                                  <div className="text-sm font-semibold">
                                    4. Order Status
                                  </div>
                                  <div
                                    className="
                                  
                                  first-letter:uppercase
                                  text-sm font-medium text-green-800"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="p-8">
                              <ul className="-my-7 divide-y divide-gray-200">
                                <li className="flex flex-col justify-between space-x-5 py-7 md:flex-row">
                                  <div className="flex flex-1 items-stretch">
                                    <div className="flex-shrink-0">
                                      <img
                                        className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                                        src={productImageUrl}
                                        // alt={value.imageSrc}
                                      />
                                    </div>
                                    <div className="ml-5 flex flex-col justify-between">
                                      <div className="flex-1">
                                        {/* <p className="text-sm font-bold text-gray-900">
                                              {value.name}
                                            </p> */}
                                        {/* >  <p className="mt-1.5 text-sm font-medium text-gray-500">
                                              {value.color}
                                            </p */}
                                      </div>
                                      <p className="mt-4 text-sm font-medium text-gray-500">
                                        x {quantity}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="ml-auto flex flex-col items-end justify-between">
                                    <p className="text-right text-sm font-bold text-gray-900">
                                      {price}
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserDasebord;
