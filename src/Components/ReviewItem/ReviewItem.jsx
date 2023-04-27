import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const ReviewItem = ({ cart,handleDeleteBtn }) => {
  
  const { img, name, price, quantity, shipping,id } = cart;
  return (
    <div className="flex p-2 border border-slate-900 border-solid rounded-lg items-center justify-between ">
      <div className="flex items-center gap-8">
        <img src={img} alt="" className="w-28 h-28 rounded-lg" />
        <div>
          <h1>{name}</h1>
          <h2>Price :${price}</h2>
          <h3>Quantity :{quantity}</h3>
          <h3>Shipping Cahrge :${shipping}</h3>
        </div>
      </div>
      <button className="text-red-500 hover:text-red-500  bg-red-200 hover:bg-red-100 mr-0 lg:mr-12 p-3 rounded-full hover:scale-105 transition-all ease-in-out duration-300" onClick={()=>handleDeleteBtn(id)}><FontAwesomeIcon icon={faTrashCan} className="h-8 w-8"/></button>
      
    </div>
  );
};

export default ReviewItem;
