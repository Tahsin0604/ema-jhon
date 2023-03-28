import React from "react";

const Cart = (props) => {
  const {cart}=props;
  let totalPrice=0;
  let totalShipping=0;
  let totalQuantity=0;
  for(const product of cart){
    totalQuantity+=product.quantity;
    totalPrice+=product.price*product.quantity;
    totalShipping+=product.shipping;
    
  }
  const tax=totalPrice*7/100;
  const grandTotal=totalPrice+totalShipping+tax;
  return (
    <div className="flex-grow sticky top-0 h-screen bg-[#FFE0B3] px-3">
      <h1 className="text-center mt-4 mb-7 text-3xl text-slate-700">
        Order Summary
      </h1>
      <div className="text-left text-slate-700 text-lg mt-2">
        <h1>Selected Items: {totalQuantity}</h1>
        <h1>Total Price: ${totalPrice}</h1>
        <h1>Total Shipping Charge: ${totalShipping}</h1>
        <h1>Tax: ${tax.toFixed(2)}</h1>
      </div>
      <h1 className="text-left text-black text-2xl mt-4">Grand Total: ${grandTotal.toFixed(2)}</h1>
    </div>
  );
};

export default Cart;
