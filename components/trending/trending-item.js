import Image from "next/image";
import classes from "./trending-item.module.css";

const TrendingItem = (props) => {
  const posterPath = "https://image.tmdb.org/t/p/original";

  const year = props.year.split("-")[0];

  return (
    <div className={classes.card}>
      <img
        className={classes.img}
        src={`${posterPath}${props.poster}`}
        alt={props.poster}
      />
      <div className={classes.details}>
        <h3 className={classes.title}>{props.title}</h3>
        <h4 className={classes.year}>{year}</h4>
      </div>
    </div>
  );
};
export default TrendingItem;
