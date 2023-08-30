import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

import classes from "./FoodItem.module.css";

const FoodItem = (props) => {
  return (
    <Card className={classes.item}>
      <div className={classes["item-left"]}>
        <h3 className={classes["item-name"]}>{props.product.name}</h3>
        <p className={classes.description}>{props.product.description}</p>
        <p className={classes.price}>${props.product.price.toFixed(2)}</p>
      </div>
      <div className={classes["item-right"]}>
        <div className={classes["item-amount"]}>
          <Button className={classes.minus}>-</Button>
          <input type='number' name='quantity' id='quantity' value={1} />
          <Button className={classes.plus}>+</Button>
        </div>
        <Button className={classes["button__add-to-cart"]}>Add to Cart</Button>
      </div>
    </Card>
  );
};

export default FoodItem;
