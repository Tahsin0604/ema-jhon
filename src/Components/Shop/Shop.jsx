import React, { useEffect, useState } from "react";
import { addCardToDb, getShoppingCart, deleteShoppingCart } from "../../Utilities/localDb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    let savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if(addedProduct){
        const quantity=storedCart[id];
        addedProduct.quantity=quantity;
        savedCart.push(addedProduct);
      }
      
    }
    setCart(savedCart);
  }, [products]);
  const handleProduct = (product) => {
    let newCart=[];
    const exists=cart.find(pd=>pd.id===product.id);
    if(exists){
      exists.quantity+=1;
      const remaining=cart.filter(pd=>pd.id!==product.id);
      newCart=[...remaining,exists];
    }
    else{
      product.quantity=1;
      newCart=[...cart,product];
    }
    setCart(newCart);
    addCardToDb(product.id)
    
  };
  const clearAllCart=()=>{
    setCart([]);
    deleteShoppingCart();
    
  }
  return (
    <div className="flex">
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 w-4/5 px-16 py-6">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleProduct={handleProduct}
          />
        ))}
      </div>
      <Cart cart={cart} clearAllCart={clearAllCart}></Cart>
    </div>
  );
};

export default Shop;
