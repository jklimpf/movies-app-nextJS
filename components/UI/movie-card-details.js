import Badge from "./badge";
import classes from "./movie-card-details.module.css";

const MovieCardDetails = (props) => {
  const year = props.year.split("-")[0];

  return (
    <div className={classes.details}>
      <div className={classes.typeYear}>
        <h4 className={classes.year}>{year}</h4>
        <p> &#x2022;</p>
        {props.rate && (
          <div className={classes.rate}>{props.rate.toFixed(1)}</div>
        )}
        {props.type && <p>&#x2022;</p>}
        {props.type && <Badge type={props.type}></Badge>}
      </div>
      <h3 className={classes.title}>{props.title}</h3>
    </div>
  );
};

export default MovieCardDetails;
