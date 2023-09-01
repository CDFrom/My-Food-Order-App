import Modal from "../UI/Modal/Modal";
import Nav from "./Nav";

import classes from "./MobileNav.module.css";

const MobileNav = (props) => {
  const playAnimationHandler = () => {
    const mobileNav = document.getElementById("mobileNav");
    mobileNav.classList.add(classes["animation-reverse"]);
  };

  return (
    <Modal
      onClose={() => {
        playAnimationHandler();
        props.onCloseNav(null);
      }}
    >
      <Nav
        id='mobileNav'
        onClick={props.onCloseNav}
        onPlayAnimation={playAnimationHandler}
        className={classes["mobile-nav"]}
      />
    </Modal>
  );
};

export default MobileNav;
