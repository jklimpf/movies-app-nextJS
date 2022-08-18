import classes from "./genres-item.module.css";

const GenresItem = (props) => {
  return <div className={classes.genre}>{props.name}</div>;
};

export default GenresItem;
