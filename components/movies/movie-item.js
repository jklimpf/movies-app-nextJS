import classes from "./movie-item.module.css";
import Image from "next/image";

const MovieItem = (props) => {
  const posterPath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <Image
        src={`${posterPath}${props.poster || props.posterBackup}`}
        alt={props.id}
        width={350}
        height={250}
      ></Image>
      <p>{props.basePath.includes("movies") ? props.title : props.name}</p>
    </div>
  );
};

export default MovieItem;
