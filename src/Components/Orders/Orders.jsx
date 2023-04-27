import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb,deleteShoppingCart } from '../../Utilities/localDb';

const Orders = () => {
  const savedCart=useLoaderData();
  const [cart,setCart]=useState(savedCart);
  const handleDeleteBtn=(id)=>{
    console.log(id);
    const newCarts=cart.filter(card=>card.id!==id);
    console.log(newCarts);
    removeFromDb(id);
    setCart(newCarts);
  }
  const clearAllCart=()=>{
    setCart([]);
    deleteShoppingCart();
    
  }
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
      <div className="grid grid-cols-1 gap-4 w-full lg:w-4/5 px-4 lg:px-24 py-6 items-start h-fit">
        {
          cart.map((cart,id)=><ReviewItem key={id} cart={cart} handleDeleteBtn={handleDeleteBtn}/>)
          
        }
      </div>
      <Cart cart={cart} clearAllCart={clearAllCart}/>
    </div>
    </div>
  );
};

export default Orders;