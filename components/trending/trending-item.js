import Image from "next/image";
import Link from "next/link";
import classes from "./trending-item.module.css";

const TrendingItem = (props) => {
  const posterPath = "https://image.tmdb.org/t/p/original";

  const year = props.year.split("-")[0];

  const linkType = props.type === "movie" ? "movies" : "series";

  return (
    <Link href={`/${linkType}/${props.id}`}>
      <a>
        <div className={classes.card}>
          <img
            className={classes.img}
            src={`${posterPath}${props.poster}`}
            alt={props.poster}
          />
          <div className={classes.details}>
            <div className={classes.typeYear}>
              <h4 className={classes.year}>{year}</h4>
              <p> &#x2022;</p>
              <p className={classes.type}>{props.type.toUpperCase()}</p>
            </div>
            <h3 className={classes.title}>{props.title}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
};
export default TrendingItem;
