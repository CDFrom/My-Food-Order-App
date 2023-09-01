import { useContext, useState } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import CartContext from "../../context/cart-context";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isOrderProcessing, setIsOrderProcessing] = useState(false);

  const processOrder = () => {
    setIsOrderProcessing(true);
    setTimeout(() => {
      setIsOrderComplete(true);
      cartContext.completeOrder();
    }, 2000);
  };

  const orderHandler = () => {
    if (cartContext.items.length > 0) {
      processOrder();
    }
  };

  const amountIncrease = (item) => {
    const itemToAdd = { ...item, amount: 1 };
    cartContext.addItem(itemToAdd);
  };

  const amountDecrease = (item) => {
    cartContext.removeItem(item);
  };

  const Progress = () => {
    return (
      <Card className={classes.progress}>
        {!isOrderComplete && <div className={classes.blocker}></div>}
        {!isOrderComplete && <>Processing</>}
        {isOrderComplete && (
          <>
            Your order is complete!
            <br />
            Your food will be there soon!
            <br />
            <Button
              className={classes["order-complete__button"]}
              onClick={props.onClick}
            >
              Complete
            </Button>
          </>
        )}
      </Card>
    );
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
    <Card id='cart' className={classes.cart}>
      {isOrderProcessing && <Progress />}
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
