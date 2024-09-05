import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <nav className="flex items-center justify-between h-20  mx-auto sticky top-0 bg-[#0f1111] w-100vh">
      <Link to={"/"}>
        <div className="ml-5">
          <h3 className="text-orange-600 font-bold  text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
            ShopSmart
          </h3>
        </div>
      </Link>

      <div class="relative">
        <input
          placeholder="Search..."
          className="input shadow-lg focus:border-2 border-blue-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
          name="search"
          type="search"
        />
        <svg
          className="size-6 absolute top-3 right-3 text-blue-500"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>

      <ul className="flex list-none items-center space-x-6 text-white font-semibold">
        <Link to={"/"}>
          <li className="cursor-pointer list-none">Home</li>
        </Link>
        <Link to={"/cart"}>
          {/* <li className="cursor-pointer">Cart</li> */}
          {/* <button class=" bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
            Add to Cart
          </button> */}
          <button className="hover:border-slate-400">Cart</button>

          {/* <button className="bg-sky-500 hover:bg-sky-700 ...">Cart</button> */}
        </Link>
        <Link to={"/cart"}>
          <button className="w-[120px] bg-black h-[40px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            Login
          </button>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
