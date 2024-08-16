import { Dialog, DialogBody } from "@material-tailwind/react";
import { Button } from "flowbite-react";
import React, { useState } from "react";

function BuyNoeOrder({ addInfo, setAddInfo, buyNow }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl"
      >
        Buy now
      </Button>
      <Dialog open={open} handler={handleOpen} className=" bg-pink-50 w-[180%]">
        <p className="text-2xl text-pink-400 text-center font-serif p-4">
          Delivery Point.....
        </p>
        <DialogBody className="">
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={addInfo.name}
              onChange={(e) => {
                setAddInfo({
                  ...addInfo,
                  name: e.target.value,
                });
              }}
              placeholder="Enter your name"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="address"
              value={addInfo.Address}
              onChange={(e) => {
                setAddInfo({
                  ...addInfo,
                  Address: e.target.value,
                });
              }}
              placeholder="Enter your address"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              name="pincode"
              value={addInfo.pincode}
              onChange={(e) => {
                setAddInfo({
                  ...addInfo,
                  pincode: e.target.value,
                });
              }}
              placeholder="Enter your pincode"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="mobileNumber"
              value={addInfo.mobileNumber}
              onChange={(e) =>
                setAddInfo({
                  ...addInfo,
                  mobileNumber: e.target.value,
                })
              }
              placeholder="Enter your mobileNumber"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>

          <div className="py-10">
            <Button
              type="button"
              onClick={() => {
                // handleOpen();
                buyNow();
              }}
              className="w-full  text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 rounded-lg"
            >
              Buy now
            </Button>
          </div>
        </DialogBody>
        <img
          className=" bottom-8  relative left-24 rounded-xl "
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p className="text-xl bottom-4 relative font-semibold text-center">
          ©2025 E-Shop Now
        </p>
      </Dialog>
    </>
  );
}

export default BuyNoeOrder;
