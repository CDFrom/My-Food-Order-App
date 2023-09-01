import FoodItem from "./FoodItem";

import classes from "./OrderSection.module.css";

const OrderSection = (props) => {
  const products = props.productSection.products;
  const itemList = products.map((product) => {
    return <FoodItem key={product.name} product={product} />;
  });

  return (
    <div className={classes.section}>
      <h1 id={props.productSection.title}>{props.productSection.title}</h1>
      {itemList}
    </div>
  );
};

export default OrderSection;
