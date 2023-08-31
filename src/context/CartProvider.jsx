import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const itemToAdd = action.item;

    let newItemState;
    if (state.items.some((item) => item.name === itemToAdd.name)) {
      const index = state.items.findIndex(
        (item) => item.name === itemToAdd.name
      );
      newItemState = JSON.parse(JSON.stringify(state.items));
      newItemState[index].amount += action.item.amount;
    } else {
      newItemState = [...state.items, itemToAdd];
    }

    const updatedItems = newItemState;
    const updatedAmount = state.totalAmount + action.item.amount;
    const updatedPrice =
      state.totalPrice + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
      totalPrice: updatedPrice,
    };
  }
  if (action.type === "REMOVED") {
  }
  if (action.type === "COMPLETE") {
    return defaultCartState;
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const completeOrderHandler = () => {
    dispatchCartAction({ type: "COMPLETE" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalPrice: cartState.totalPrice,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    completeOrder: completeOrderHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
