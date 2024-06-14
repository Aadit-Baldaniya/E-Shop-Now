import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProductDitelse from "../../admin/ProductDitelse";
import { Home } from "lucide-react";
import OrderDetailse from "../../admin/OrderDetailse";
import AllProduct from "../allProduct/AllProduct";
import UserDetailse from "../../admin/UserDetailse";

function AdminDasebord() {
  return (
    <div>
      <div className="flex justify-center items-center w-full max-w-auto py-6 ">
        <div className="border-2 border-solid border-yellow-200 p-4 bg-yellow-200   px-[40%] rounded-xl ">
          <h2 className="text-2xl justify-center text-center font-semibold text-yellow-700">
            Admin Dasebord
          </h2>
        </div>
      </div>
      <div className="max-auto py-5 lg:py-10 items-center justify-center flex ">
        <div className="top hover:bg-yellow-300 bg-yellow-200 justify-center flex w-[80%] p-3 rounded-xl ">
          <div>
            <div className="flex justify-center items-center">
              <img
                className=""
                src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                alt=""
              />
            </div>
            <div className="justify-center items-center p-4 ">
              <p className="flex text-center gap-2 text-lg font-semibold">
                Name:<span>Baldaniya Aadit Jagdishbhai</span>
              </p>
              <p className="flex justify-center text-center gap-2 text-lg font-semibold">
                E-mail:
                <span>aadit1818@gmail.com </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Tabs>
          <TabList className="flex flex-wrap py-5 -m-4 text-center justify-center">
            {/* Total Products */}
            <Tab className="p-4  md:w-1/3 sm:w-1/2 w-full cursor-pointer">
              <div className=" border bg-yellow-50 hover:bg-yellow-100 border-yellow-100 px-4 py-3 rounded-xl">
                <div className="text-yellow-500 w-12 h-12 mb-3 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shopping-basket"
                  >
                    <path d="m5 11 4-7" />
                    <path d="m19 11-4-7" />
                    <path d="M2 11h20" />
                    <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                    <path d="m9 11 1 9" />
                    <path d="M4.5 15.5h15" />
                    <path d="m15 11-1 9" />
                  </svg>
                </div>
                <h2 className="title-font font-medium text-3xl text-yellow-400 fonts1">
                  10
                </h2>
                <p className=" text-yellow-500  font-bold">Total Products</p>
              </div>
            </Tab>
            {/* Total Order  */}
            <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
              <div className=" border bg-yellow-50 hover:bg-yellow-100 border-yellow-100 px-4 py-3 rounded-xl">
                <div className="text-yellow-500 w-12 h-12 mb-3 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-list-ordered"
                  >
                    <line x1={10} x2={21} y1={6} y2={6} />
                    <line x1={10} x2={21} y1={12} y2={12} />
                    <line x1={10} x2={21} y1={18} y2={18} />
                    <path d="M4 6h1v4" />
                    <path d="M4 10h2" />
                    <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                  </svg>
                </div>
                <h2 className="title-font font-medium text-3xl text-yellow-400 fonts1">
                  10
                </h2>
                <p className=" text-yellow-500  font-bold">Total Order</p>
              </div>
            </Tab>
            {/* Total User  */}
            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
              <div className=" border bg-yellow-50 hover:bg-yellow-100 border-yellow-100 px-4 py-3 rounded-xl">
                <div className="text-yellow-500 w-12 h-12 mb-3 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h2 className="title-font font-medium text-3xl text-yellow-400 fonts1">
                  10
                </h2>
                <p className=" text-yellow-500  font-bold">Total Order</p>
              </div>
            </Tab>
          </TabList>
          <div className="p-5">
            <TabPanel>
              <ProductDitelse />
            </TabPanel>
            <TabPanel>
              <OrderDetailse />
            </TabPanel>
            <TabPanel>
              <UserDetailse />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default AdminDasebord;
