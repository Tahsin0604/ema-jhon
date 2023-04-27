import { getShoppingCart } from "../../Utilities/localDb";

const cartProductLoaders=async ()=>{
  const res=await fetch('products.json');
  const products=await res.json();
  const storeData=getShoppingCart();
  const savedCart=[];
  for(const id in storeData){
    const exist=products.find(product=>product.id===id);
    if(exist){
      const quantity=storeData[id];
      exist.quantity=quantity;
      savedCart.push(exist);
    }
    
  }
  return savedCart;
}
export default cartProductLoaders;