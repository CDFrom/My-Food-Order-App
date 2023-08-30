import Card from "../UI/Card/Card";
import Cart from "../../assets/Cart.svg";

import classes from "./Header.module.css";

const Header = (props) => {
  const openCart = () => {};

  return (
    <>
      <div className={classes.header}>
        <span>Bill's Burgers, Fries & Shakes</span>
        <Card className={classes.cart} onClick={openCart}>
          <img src={Cart} alt='Shopping Cart' />
          <span className={classes.totalItems}>0</span>
        </Card>
      </div>
      <div className={classes["background-image"]} />
    </>
  );
};

export default Header;
