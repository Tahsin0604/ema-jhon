import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  const { handleProduct } = props;
  return (
    <>
      <div className="grid grid-cols-1 rounded-lg border-teal-700 shadow-lg border">
        <div className="pt-2 px-2">
          <img
            src={img}
            alt="no image"
            className="rounded-lg w-full h-72 mb-4 "
          />
        </div>

        <div className="text-left text-slate-700 px-3">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <h2 className="text-xl mb-5">Price : ${price}</h2>
          <h3>Manufacturer : {seller}</h3>
          <h3 className="mb-10">Rating : {ratings} star</h3>
        </div>
        <button
          className="mt-auto py-3 rounded-b-lg bottom-0 bg-[#FFE0B3] hover:bg-amber-500  w-full text-lg font-semibold duration-300 transition-all ease-in-out"
          onClick={() => handleProduct(props.product)}
        >
          Add to Cart
          <FontAwesomeIcon icon={faShoppingCart} className="ml-2" />
        </button>
      </div>
    </>
  );
};

export default Product;
