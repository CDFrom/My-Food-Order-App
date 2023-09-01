import ProductList from "../../assets/ProductList";

import classes from "./Nav.module.css";

const Nav = (props) => {
  const sectionList = ProductList.map((section) => {
    return (
      <div
        key={section.title}
        className={classes["section-title"]}
        onClick={() => props.onClick(section.title)}
      >
        {section.title}
      </div>
    );
  });

  return (
    <div id={props.id} className={`${classes.nav} ${props.className}`}>
      {sectionList}
    </div>
  );
};

export default Nav;
