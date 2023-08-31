import { useContext, useState } from "react";

import Card from "../UI/Card/Card";
import ShoppingCart from "../../assets/ShoppingCart.svg";

import classes from "./Header.module.css";
import Modal from "../UI/Modal/Modal";
import Cart from "../FoodOrdering/Cart";
import CartContext from "../../context/cart-context";

const Header = (props) => {
  const cartContext = useContext(CartContext);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCart = () => {
    setCartIsOpen(true);
  };

  const closeCart = () => {
    setCartIsOpen(false);
  };

  return (
    <>
      {cartIsOpen && (
        <Modal onClose={closeCart}>
          <Cart />
        </Modal>
      )}
      <div className={classes.header}>
        <span>Bill's Burgers, Fries & Shakes</span>
        <Card className={classes.cart} onClick={openCart}>
          <img src={ShoppingCart} alt='Shopping Cart' />
          <span className={classes.totalItems}>{cartContext.totalAmount}</span>
        </Card>
      </div>
      <div className={classes["background-image"]} />
    </>
  );
};

export default Header;
