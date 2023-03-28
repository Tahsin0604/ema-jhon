//get carts info from local Storage
const getShoppingCart = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

// add cart info to local storage
const addCardToDb = (id) => {
  let shoppingCart = getShoppingCart();
  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
//remove a cart from localStorage
const removeFromDb = (id) => {
  let shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

//remove the whole shopping cart from local storage
const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export{
  getShoppingCart,
  addCardToDb,
  removeFromDb,
  deleteShoppingCart
}