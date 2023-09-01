import Modal from "../UI/Modal/Modal";
import Nav from "./Nav";

import classes from "./MobileNav.module.css";

const MobileNav = (props) => {
  return (
    <Modal
      onClose={() => {
        const mobileNav = document.getElementById("mobileNav");
        mobileNav.classList.add(classes["animation-reverse"]);
        props.onCloseNav(null);
      }}
    >
      <Nav
        id='mobileNav'
        onClick={props.onCloseNav}
        className={classes["mobile-nav"]}
      />
    </Modal>
  );
};

export default MobileNav;
