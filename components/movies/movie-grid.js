import MovieItem from "./movie-item";
import classes from "./movie-grid.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Badge from "../UI/badge";
import Pages from "../pageNav/pages";

const MovieGrid = (props) => {
  const router = useRouter();

  if (!props) return <p>Loading...</p>;

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
      {props.trending && (
        <div className={classes.header}>
          <h1>Top rated</h1>
          <div className={classes.badge}>
            <Badge
              type={props.basePath.includes("movie") ? "movie" : "TV"}
            ></Badge>
          </div>
        </div>
      )}
      <div className={classes.movieGrid}>
        {results.map((movie) => (
          <Link
            key={movie.id}
            href={`/${props.basePath.includes("movie") ? "movies" : "series"}/${
              movie.id
            }`}
          >
            <a>
              <MovieItem
                basePath={props.basePath}
                id={movie.id}
                name={movie.name}
                title={movie.title}
                year={movie.release_date || movie.first_air_date || "N/D"}
                poster={movie.backdrop_path}
                posterBackup={movie.poster_path}
                rate={movie.vote_average || -1.0}
              ></MovieItem>
            </a>
          </Link>
        ))}
      </div>
      {props.trending || (
        <Pages
          page={props.movies.page}
          totalPages={props.movies.total_pages}
          onPrevPage={prevPageHandler}
          onNextPage={nextPageHandler}
        ></Pages>
      )}
    </div>
  );
};

export default MovieGrid;
