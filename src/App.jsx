import { useState } from "react";

import CartProvider from "./context/CartProvider";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";

import "./App.css";
import MobileNav from "./components/Nav/MobileNav";

const App = () => {
  const [isNavOpen, setNavIsOpen] = useState(false);

  const scrollToLink = (link) => {
    document
      .getElementById(link)
      .scrollIntoView({ behavior: "smooth", inline: "start" });
  };

  const openNavHandler = () => {
    setNavIsOpen(true);
  };

  const closeNavHandler = (link) => {
    if (link) {
      scrollToLink(link);
    }
    setTimeout(() => {
      setNavIsOpen(false);
    }, 300);
  };

  return (
    <CartProvider>
      <Header onOpenNav={openNavHandler} />
      {isNavOpen && <MobileNav onCloseNav={closeNavHandler} />}
      <Nav onClick={scrollToLink} />
      <Main />
    </CartProvider>
  );
};

export default App;
