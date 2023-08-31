import { useContext } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import CartContext from "../../context/cart-context";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const orderHandler = () => {
    cartContext.completeOrder();
  };

  const orderList = cartContext.items.map((item) => {
    return (
      <div className={classes["order-item"]}>
        <div>
          <span>{item.name}</span> x{item.amount}
        </div>
        <div>${item.price}</div>
      </div>
    );
  });

  return (
    <Card className={classes.cart}>
      <div className={classes.exit} onClick={props.onClick}>
        X
      </div>
      <div className={classes["order-list"]}>{orderList}</div>
      <div className={classes["cart__bottom"]}>
        <div>Total Price: {cartContext.totalPrice.toFixed(2)}</div>
        <Button onClick={orderHandler}>Order</Button>
      </div>
    </Card>
  );
};

export default Cart;
