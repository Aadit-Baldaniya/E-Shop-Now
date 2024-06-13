import React from "react";

function Footer() {
  return (
    <div className="  bg-yellow-500 p-4 items-center  py-5 mb-5 mt-10 rounded-2xl ">
      <h1 className="font-medium text-center text-2xl  ">E-Shop Now</h1>

      <footer className="flex  ">
        <div className="flex  text-lg gap-10">
          <p className="font-medium"> © 2020@E-Shop Now </p>
          <p># Online Product App</p>
        </div>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {/* facebook  */}
          <a className="text-gray-100 cursor-pointer">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 border-double rounded-lg p-1 border-2 border-white-500 hover:bg-yellow-300"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>

          {/* twitter  */}
          <a className="ml-3 text-gray-100 cursor-pointer">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 border-double rounded-lg p-1 border-2 border-white-500 hover:bg-yellow-300"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>

          {/* instagram  */}
          <a className="ml-3 text-gray-100 cursor-pointer">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 border-double rounded-lg p-1 border-2 border-white-500 hover:bg-yellow-300"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>

          {/* linkedIn  */}
          <a className="ml-3 text-gray-100 cursor-pointer ">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-10 h-10 border-double rounded-lg p-1 border-2 border-white-500 hover:bg-yellow-300"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </span>
      </footer>

      <div>
        <p>E-mail:aadi@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
