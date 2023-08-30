import ProductList from "../../assets/ProductList";

import OrderSection from "../FoodOrdering/OrderSection";
import Card from "../UI/Card/Card";

import classes from "./Main.module.css";

const Main = (props) => {
  const sectionList = ProductList.map((section, index) => {
    return <OrderSection key={index} productSection={section} />;
  });

  return <Card className={classes["main-content"]}>{sectionList}</Card>;
};

export default Main;
