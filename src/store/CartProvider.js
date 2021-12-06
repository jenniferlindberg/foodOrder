import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removerItemFromCartHandler = (item) => {};

  const cartContext = {
    utems: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removerItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
