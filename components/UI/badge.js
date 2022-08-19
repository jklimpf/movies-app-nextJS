import classes from "./Badge.module.css";

const Badge = (props) => {
  return (
    <div className={classes.badge}>
      <p className={classes.type}>{props.type.toUpperCase()}</p>
    </div>
  );
};

export default Badge;
