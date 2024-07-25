import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

const ProductTile = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handelAddToCart() {
    dispatch(addToCart(product));
  }

  function handelRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  return (
    
    <div className="group flex flex-col flex-1 items-center border-2 border-black-200 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl hover:bg-gray-300">
      
      <div className="h-[140px]">
        <img
          src={product?.image}
          alt={product?.title}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="grid">
        <p className="w-auto truncate  mt-3 text-gray-700 font-semibold text-lg ">
          {product?.title}
        </p>
      </div>
      <div className="flex items-center justify-center w-full mt-5">
        <button
          onClick={
            cart.some((item) => item.id === product.id)
              ? handelRemoveFromCart
              : handelAddToCart
          }
          className="bg-sky-500  text-white border-2 rounded-lg font-bold p-4"
        >
          {cart.some((item) => item.id === product.id)
            ? "Remove from cart"
            : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductTile;
