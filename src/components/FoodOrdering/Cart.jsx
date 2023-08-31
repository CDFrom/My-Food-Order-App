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

  const amountIncrease = (item) => {
    const itemToAdd = { ...item, amount: 1 };
    cartContext.addItem(itemToAdd);
  };

  const amountDecrease = (item) => {
    cartContext.removeItem(item);
  };

  const orderList = cartContext.items.map((item) => {
    return (
      <div key={item.name} className={classes["order-item"]}>
        <div>
          {item.amount}x <span>{item.name}</span>
        </div>
        <div className={classes["order-item__right"]}>
          <div className={classes.price}>
            ${(item.price * item.amount).toFixed(2)}
          </div>
          <Button
            className={classes.plus}
            onClick={() => {
              amountDecrease(item);
            }}
          >
            -
          </Button>
          <Button
            className={classes.plus}
            onClick={() => {
              amountIncrease(item);
            }}
          >
            +
          </Button>
        </div>
      </div>
    );
  });

  return (
    <Card className={classes.cart}>
      <Button className={classes.exit} onClick={props.onClick}>
        X
      </Button>
      <div className={classes["order-list"]}>{orderList}</div>
      <div className={classes["cart__bottom"]}>
        <div>Total Price: ${cartContext.totalPrice.toFixed(2)}</div>
        <Button onClick={orderHandler}>Order</Button>
      </div>
    </Card>
  );
};

export default Cart;
