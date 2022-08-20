import classes from "./search-movie-grid.module.css";
import MovieItem from "../movies/movie-item";
import Link from "next/link";
import { useRouter } from "next/router";
import Pages from "../pageNav/pages";

const SearchMovieGrid = (props) => {
  const router = useRouter();
  const { movies } = props;

  const searchedMovie =
    (props.type === "all" && router.query.search.split("&")[0]) ||
    (props.type === "movies" && router.query.searchedMovie.split("&")[0]) ||
    (props.type === "series" && router.query.searchedSeries.split("&")[0]);

  let pathForw;
  let pathBackw;

  if (props.type === "all") {
    pathBackw = `${searchedMovie}&page=${props.dataObject.page - 1}`;
    pathForw = `${searchedMovie}&page=${props.dataObject.page + 1}`;
  }

  if (props.type === "movies") {
    pathBackw = `${searchedMovie}&page=${props.dataObject.page - 1}`;
    pathForw = `${searchedMovie}&page=${props.dataObject.page + 1}`;
  }
  if (props.type === "series") {
    pathBackw = `${searchedMovie}&page=${props.dataObject.page - 1}`;
    pathForw = `${searchedMovie}&page=${props.dataObject.page + 1}`;
  }

  const prevPageHandler = () => {
    router.push(pathBackw);
  };
  const nextPageHandler = () => {
    router.push(pathForw);
  };

  return (
    <div className={classes.container}>
      <div className={classes.movieGrid}>
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={`/${
              movie.media_type === "movie"
                ? "movies"
                : movie.media_type === "tv"
                ? "series"
                : !movie.media_type
                ? props.type
                : null
            }/${movie.id}`}
          >
            <a>
              <MovieItem
                basePath={
                  movie.media_type === "movie"
                    ? "movies"
                    : movie.media_type === "tv"
                    ? "series"
                    : props.type
                }
                id={movie.id}
                name={movie.name}
                title={movie.title}
                poster={movie.backdrop_path}
                posterBackup={movie.poster_path}
                year={movie.release_date || movie.first_air_date || "N/D"}
                rate={movie.vote_average || -1}
                type={movie.media_type}
              ></MovieItem>
            </a>
          </Link>
        ))}
      </div>
      <Pages
        page={props.dataObject.page}
        totalPages={props.dataObject.total_pages}
        onPrevPage={prevPageHandler}
        onNextPage={nextPageHandler}
      ></Pages>
    </div>
  );
};

export default SearchMovieGrid;
