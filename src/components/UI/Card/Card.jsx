import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      id={props.id}
      className={`${classes.card} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Card;
