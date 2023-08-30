import Cart from "../../assets/Cart.svg";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <div className={classes.header}>
        <span>Bill's Burgers, Fries & Shakes</span>
        {/* <span>Basket</span> */}
        <img src={Cart} alt='Shopping Cart' />
      </div>
      <div className={classes["background-image"]} />
    </>
  );
};

export default Header;
