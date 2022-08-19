import classes from "./search-movie-grid.module.css";
import MovieItem from "../movies/movie-item";
import Link from "next/link";
import { useRouter } from "next/router";

const SearchMovieGrid = (props) => {
  const router = useRouter();
  const { movies } = props;

  const searchedMovie = router.query.search.split("&")[0];
  console.log(searchedMovie);

  const prevPageHandler = () => {
    router.push(`${searchedMovie}&page=${props.dataObject.page - 1}`);
  };
  const nextPageHandler = () => {
    router.push(`${searchedMovie}&page=${props.dataObject.page + 1}`);
  };

  return (
    <div className={classes.container}>
      <div className={classes.movieGrid}>
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={`/${movie.media_type === "movie" ? "movies" : "series"}/${
              movie.id
            }`}
          >
            <a>
              <MovieItem
                basePath={movie.media_type === "movie" ? "movies" : "series"}
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
        {props.dataObject.page > 1 && (
          <button onClick={prevPageHandler}>Prev</button>
        )}
        <p>
          Page {props.dataObject.page} of{" "}
          {props.dataObject.total_pages > 500
            ? "500"
            : props.dataObject.total_pages}
        </p>
        {props.dataObject.page < props.dataObject.total_pages && (
          <button onClick={nextPageHandler}>Next</button>
        )}
      </div>
    </div>
  );
};

export default SearchMovieGrid;
