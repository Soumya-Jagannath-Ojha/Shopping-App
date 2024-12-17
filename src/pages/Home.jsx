import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/product-tile/ProductTile";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disableButton, setDisablebutton] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);
    // const res = await fetch(
    //   `https://fakestoreapi.in/api/products?limit=8&skip=${
    //     count === 0 ? 0 : count * 8
    //   }`
    // );
    const res = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`
    );
   

    const data = await res.json();
    console.log(data);

    if (data) {
      setLoading(false);
      setProducts((prevData) => [...prevData, ...data.products]);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length == 194) {
      setDisablebutton(true);
    }
  }, [products]);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(66, 123, 245)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((productItem) => (
                <ProductTile key={productItem.id} product={productItem} />
              ))
            : null}
        </div>
      )}

      <div className="button-container mt-6 text-center">
        <button
          className={`px-6 py-2 rounded-md text-white font-semibold ${
            disableButton
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          }`}
          disabled={disableButton}
          onClick={() => setCount(count + 1)}
        >
          Load More Products
        </button>
        {disableButton ? (
          <p className="mt-2 text-gray-600">You have reached 50 products.</p>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
