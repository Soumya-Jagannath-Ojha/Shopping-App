import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

const CartTile = ({ cartItem }) => {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }
  return (
    <>
      <div className="flex items-center p-5 justify-between bg-black mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            src={cartItem?.image}
            alt={cartItem?.title}
            className="h-14 w-24 md:h-auto"  //h-28 rounded-lg w-24
          />
          <div className="ml-10 self-start space-y-5 ">
            <p className="text-sm text-white font-bold">{cartItem?.title}</p>
            <p className="text-green-500 font-extrabold ">${cartItem?.price}</p>
          </div>
        </div>
        <div>
          {/* <button
            onClick={handleRemoveFromCart}
            className="bg-red-950  text-white border-2 rounded-lg font-bold p-4"
          >
            Remove from cart
          </button> */}

          <button
            class="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
            onClick={handleRemoveFromCart}
          >
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              class="h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default CartTile;
