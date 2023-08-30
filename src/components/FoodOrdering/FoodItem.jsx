import { useRef, useContext } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import CartContext from "../../context/cart-context";

import classes from "./FoodItem.module.css";

const FoodItem = (props) => {
  const cartContext = useContext(CartContext);
  const amountRef = useRef();

  const amountIncrease = () => {
    amountRef.current.value++;
  };

  const amountDecrease = () => {
    if (+amountRef.current.value === 1) {
      return;
    }
    amountRef.current.value--;
  };

  const addToCartHandler = () => {
    const { name, price } = props.product;
    const amount = amountRef.current.value;
    const productToAdd = {
      name: name,
      price: price,
      amount: +amount,
    };
    cartContext.addItem(productToAdd);
  };

  return (
    <Card className={classes.item}>
      <div className={classes["item-left"]}>
        <h3 className={classes["item-name"]}>{props.product.name}</h3>
        <p className={classes.description}>{props.product.description}</p>
        <p className={classes.price}>${props.product.price.toFixed(2)}</p>
      </div>
      <div className={classes["item-right"]}>
        <div className={classes["item-amount"]}>
          <Button className={classes.minus} onClick={amountDecrease}>
            -
          </Button>
          <input
            type='number'
            name={`quantity_${props.product.name}`}
            id={`quantity_${props.product.name}`}
            value={1}
            readOnly
            ref={amountRef}
          />
          <Button className={classes.plus} onClick={amountIncrease}>
            +
          </Button>
        </div>
        <Button
          className={classes["button__add-to-cart"]}
          onClick={addToCartHandler}
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default FoodItem;
