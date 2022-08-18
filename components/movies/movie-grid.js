import MovieItem from "./movie-item";
import classes from "./movie-grid.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const MovieGrid = (props) => {
  const router = useRouter();
  const { results } = props.movies;
  const { query } = router;

  const prevPageHandler = () => {
    router.push(
      `${props.basePath}/genre/${query.genreId.split("&")[0]}&page=${
        props.movies.page - 1
      }`
    );
  };
  const nextPageHandler = () => {
    router.push(
      `${props.basePath}/genre/${query.genreId.split("&")[0]}&page=${
        props.movies.page + 1
      }`
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.movieGrid}>
        {results.map((movie) => (
          <Link key={movie.id} href={`${props.basePath}/${movie.id}`}>
            <a>
              <MovieItem
                basePath={props.basePath}
                id={movie.id}
                name={movie.name}
                title={movie.title}
                poster={movie.backdrop_path}
                posterBackup={movie.poster_path}
              ></MovieItem>
            </a>
          </Link>
        ))}
      </div>
      <div className={classes.pages}>
        {props.movies.page > 1 && (
          <button onClick={prevPageHandler}>Prev</button>
        )}
        <p>
          Page {props.movies.page} of{" "}
          {props.movies.total_pages > 500 ? "500" : props.movies.total_pages}
        </p>
        <button onClick={nextPageHandler}>Next</button>
      </div>
    </div>
  );
};

export default MovieGrid;
