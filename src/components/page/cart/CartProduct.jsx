import {
  MinusIcon,
  PlusCircle,
  PlusCircleIcon,
  PlusIcon,
  Trash,
} from "lucide-react";
import { product } from "../../data/data";
import Layout from "../../layout/Layout";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Button } from "flowbite-react";

function CartProduct() {
  return (
    <Layout>
      <div>
        <div>
          <h2 className="text-3xl font-bold lg:grid-cols-12 lg:items-start justify-center py-4">
            Shopping-Cart
          </h2>
          <form
            action=""
            className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
          >
            <section
              aria-labelledby="cart-heading"
              className="rounded-lg   bg-white lg:col-span-8"
            >
              {/* <h2> Items in your shopping cart</h2> */}
              <ul role="list" className="divide-y divide-gray-300">
                {product.map((value) => {
                  return (
                    <div>
                      <li className="flex py-5">
                        <div className="flex-shrink-0 px-3">
                          <img
                            src={value.imageSrc}
                            alt=""
                            className=" px- sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                          />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold">{value.name}</h2>
                          <div className="flex gap-2 mt-1">
                            <h2 className="text-gray-400">{value.color}</h2>
                            <div className="inline-block h-5 w-0.5 bg-gray-400 mt-1"></div>
                            <h2 className="text-gray-400">{value.size}</h2>
                          </div>
                          <div className="flex gap-3 ">
                            <h1 className="line-through font-medium">
                              {value.originalPrice}
                            </h1>
                            <h2 className="font-bold"> {value.price}</h2>
                            <p className="text-green-500">{value.discount}</p>
                          </div>
                        </div>
                      </li>
                      <div className="flex gap-2 px-5 p-2">
                        <button className="font-semibold ">
                          <FaMinus />
                        </button>
                        <button className="mx-1 h-7 w-9 rounded-md border text-center">
                          {0}
                        </button>
                        <button className=" font-semibold">
                          <FaPlus />
                        </button>
                        <div>
                          <button className="flex items-center gap-1 px-5 text-red-600">
                            <FaTrash />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </ul>
            </section>
            <section
              aria-labelledby="summary-heading"
              className="mt-10 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
            >
              <h2 className="text-2xl font-medium sm:p-4">Price Detaitls</h2>
              <div>
                <dl className="space-y-1 px-2 py-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-500  text-lg">Price (3)item</dt>
                    <dd className="text-lg font-semibold ">$52,350</dd>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <dt className="text-gray-500  text-lg">Discount</dt>
                    <dd className="text-lg text-green-500">$2,350</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-500  text-lg">Delivery Charges</dt>
                    <dd className="text-lg text-green-500">Free</dd>
                  </div>
                  <div className="flex items-center justify-between py-5 ">
                    <dt className="text-xl font-bold">Total Amount</dt>
                    <dd className="text-xl font-medium bg-gray-500 rounded-lg p-1 text-white">
                      $48,200
                    </dd>
                  </div>
                </dl>
              </div>
              <Button className="w-72 h-10 rounded-xl ml-16 bg-yellow-400">
                Buy Now
              </Button>
            </section>
          </form>
        </div>
        <div></div>
      </div>
    </Layout>
  );
}

export default CartProduct;

// {/* <Layout>
// <div className="container mx-auto px-4 max-w-7xl lg:px-0">
//     <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
//         <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Shopping Cart
//         </h1>
//         <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
//             <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
//                 <h2 id="cart-heading" className="sr-only">
//                     Items in your shopping cart
//                 </h2>
//                 <ul role="list" className="divide-y divide-gray-200">
//                     {cartItems.length > 0 ?

//                         <>
//                             {cartItems.map((item, index) => {
//                                 const { id, title, price, productImageUrl, quantity, category } = item
//                                 return (
//                                     <div key={index} className="">
//                                         <li className="flex py-6 sm:py-6 ">
//                                             <div className="flex-shrink-0">
//                                                 <img
//                                                     src={productImageUrl}
//                                                     alt="img"
//                                                     className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
//                                                 />
//                                             </div>

//                                             <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
//                                                 <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
//                                                     <div>
//                                                         <div className="flex justify-between">
//                                                             <h3 className="text-sm">
//                                                                 <div className="font-semibold text-black">
//                                                                     {title}
//                                                                 </div>
//                                                             </h3>
//                                                         </div>
//                                                         <div className="mt-1 flex text-sm">
//                                                             <p className="text-sm text-gray-500">{category}</p>
//                                                         </div>
//                                                         <div className="mt-1 flex items-end">
//                                                             <p className="text-sm font-medium text-gray-900">
//                                                                 ₹{price}
//                                                             </p>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </li>
//                                         <div className="mb-2 flex">
//                                             <div className="min-w-24 flex">
//                                                 <button onClick={() => handleDecrement(id)} type="button" className="h-7 w-7" >
//                                                     -
//                                                 </button>
//                                                 <input
//                                                     type="text"
//                                                     className="mx-1 h-7 w-9 rounded-md border text-center"
//                                                     value={quantity}
//                                                 />
//                                                 <button onClick={() => handleIncrement(id)} type="button" className="flex h-7 w-7 items-center justify-center">
//                                                     +
//                                                 </button>
//                                             </div>
//                                             <div className="ml-6 flex text-sm">
//                                                 <button onClick={() => deleteCart(item)} type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
//                                                     <Trash size={12} className="text-red-500" />
//                                                     <span className="text-xs font-medium text-red-500">Remove</span>
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )
//                             })}
//                         </>
//                         :

//                         <h1>Not Found</h1>}
//                 </ul>
//             </section>
//             {/* Order summary */}
//             <section
//                 aria-labelledby="summary-heading"
//                 className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
//             >
//                 <h2
//                     id="summary-heading"
//                     className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
//                 >
//                     Price Details
//                 </h2>
//                 <div>
//                     <dl className=" space-y-1 px-2 py-4">
//                         <div className="flex items-center justify-between">
//                             <dt className="text-sm text-gray-800">Price ({cartItemTotal} item)</dt>
//                             <dd className="text-sm font-medium text-gray-900">₹ {cartTotal}</dd>
//                         </div>
//                         <div className="flex items-center justify-between py-4">
//                             <dt className="flex text-sm text-gray-800">
//                                 <span>Delivery Charges</span>
//                             </dt>
//                             <dd className="text-sm font-medium text-green-700">Free</dd>
//                         </div>
//                         <div className="flex items-center justify-between border-y border-dashed py-4 ">
//                             <dt className="text-base font-medium text-gray-900">Total Amount</dt>
//                             <dd className="text-base font-medium text-gray-900">₹ {cartTotal}</dd>
//                         </div>
//                     </dl>
//                     <div className="px-2 pb-4 font-medium text-green-700">
//                         <div className="flex gap-4 mb-6">
//                             {user
//                                 ? <BuyNowModal
//                                     addressInfo={addressInfo}
//                                     setAddressInfo={setAddressInfo}
//                                     buyNowFunction={buyNowFunction}
//                                 /> : <Navigate to={'/login'}/>
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </form>
//     </div>
// </div>
// </Layout>
// );
// }

// export default CartPage; */}
