import classes from "./movie-item.module.css";
import Image from "next/image";
import MovieCardDetails from "../UI/movie-card-details";

const MovieItem = (props) => {
  const posterPath = "https://image.tmdb.org/t/p/original";
  return (
    <div className={classes.item}>
      <Image
        src={`${posterPath}${props.poster || props.posterBackup}`}
        alt={props.id}
        width={350}
        height={250}
        className={classes.img}
      ></Image>
      <MovieCardDetails
        title={props.name || props.title}
        year={props.year}
        type={props.type}
        rate={props.rate}
      ></MovieCardDetails>
    </div>
  );
};

export default MovieItem;
