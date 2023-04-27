import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
const Cart = (props) => {
  const { cart, clearAllCart } = props;
  const location=useLocation();

  let totalPrice = 0;
  let totalShipping = 0;
  let totalQuantity = 0;
  for (const product of cart) {
    totalQuantity += product.quantity;
    totalPrice += product.price * product.quantity;
    totalShipping += product.shipping;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="flex-grow flex-col sticky top-0 h-screen bg-[#FFE0B3] px-3">
      <h1 className="text-center mt-4 mb-7 text-3xl text-slate-700">
        Order Summary
      </h1>
      <div className="text-left text-slate-700 text-lg mt-2">
        <h1>Selected Items: {totalQuantity}</h1>
        <h1>Total Price: ${totalPrice}</h1>
        <h1>Total Shipping Charge: ${totalShipping}</h1>
        <h1>Tax: ${tax.toFixed(2)}</h1>
      </div>
      <h1 className="text-left text-black text-2xl mt-4">
        Grand Total: ${grandTotal.toFixed(2)}
      </h1>
      <button
        className=" cart-btn text-red-500 hover:text-red-500 bg-red-200 hover:bg-red-100 group "
        onClick={clearAllCart}
      >
        <h1 className="cart-btn-text group-hover:text-2xl">Clear All</h1>
        <FontAwesomeIcon icon={faTrashCan} className="h-5 w-5" />
      </button>
      {location.pathname==='/orders' && <Link
        to="/checkout"
        className=" cart-btn text-white  bg-orange-300 hover:bg-orange-400 group"
      >
        <h1 className="cart-btn-text group-hover:text-2xl ">Proceed Checkout</h1>
      </Link>}
    </div>
  );
};

export default Cart;
