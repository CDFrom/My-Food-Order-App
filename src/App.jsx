import CartProvider from "./context/CartProvider";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import "./App.css";

const App = () => {
  return (
    <CartProvider>
      <Header />
      <Main />
    </CartProvider>
  );
};

export default App;
