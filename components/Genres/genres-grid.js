import Link from "next/link";
import classes from "./genres-grid.module.css";
import GenresItem from "./genres-item";
const GenresGrid = (props) => {
  return (
    <div className={classes.genreGrid}>
      {props.genres.map((genre) => (
        <Link key={genre.id} href={`${props.basePath}${genre.id}`}>
          <a>
            <GenresItem name={genre.name} id={genre.id}></GenresItem>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default GenresGrid;
