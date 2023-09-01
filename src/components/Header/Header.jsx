import { useContext, useState } from "react";
import CartContext from "../../context/cart-context";

import Card from "../UI/Card/Card";
import Cart from "../FoodOrdering/Cart";
import Modal from "../UI/Modal/Modal";
import ShoppingCart from "../../assets/ShoppingCart.svg";

import classes from "./Header.module.css";
import cartClasses from "../FoodOrdering/Cart.module.css";

const Header = (props) => {
  const cartContext = useContext(CartContext);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCart = () => {
    setCartIsOpen(true);
  };

  const closeCart = () => {
    document.getElementById("cart").classList.add(cartClasses["close-cart"]);
    setTimeout(() => {
      setCartIsOpen(false);
    }, 300);
  };

  return (
    <>
      {cartIsOpen && (
        <Modal onClose={closeCart}>
          <Cart onClick={closeCart} />
        </Modal>
      )}
      <div className={classes.header}>
        <div>
          <div className={classes.hamburger} onClick={props.onOpenNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className={classes["page-title"]}>
            Bill's Burgers, Fries & Shakes
          </span>
        </div>
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
