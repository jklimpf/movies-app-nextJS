import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchData } from "../../helpers/api-util";
import Image from "next/image";
import classes from "./details.module.css";

const Details = (props) => {
  const [movie, setMovie] = useState();
  const router = useRouter();

  const { query } = router;
  const posterPath = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    if (Object.keys(query).length === 0) return;
    fetchData(
      `https://api.themoviedb.org/3/${props.type}/${
        props.type === "tv" ? query.show : query.movieId
      }?api_key=2790a959466e0fce63ff081155b3b55f`
    ).then((data) => setMovie(data));
  }, [query.movieId, query.show, props.type, query]);

  if (!movie) return <p>Loading...</p>;

  const durationHours = Math.floor(movie.runtime / 60);
  const durationMin = Math.round((movie.runtime / 60 - durationHours) * 60);

  return (
    <div className={classes.container}>
      <div className={classes.upper}>
        <Image
          src={`${posterPath}${movie.backdrop_path || movie.poster_path}`}
          alt={movie.id}
          width={600}
          height={400}
          priority
        ></Image>
        <div className={classes.right}>
          <div className={classes.header}>
            <h1>{props.type === "movie" ? movie.title : movie.name}</h1>
            <h4>{movie.tagline}</h4>
          </div>
          <div className={classes.rate}>{movie.vote_average?.toFixed(1)}</div>
          <div className={classes.otherData}>
            {movie.runtime && (
              <div>
                <h3>Length</h3>
                <p>
                  {durationHours}:{durationMin} h
                </p>
              </div>
            )}
            <div>
              <h3>Language</h3>
              <p>{movie.spoken_languages[0]?.english_name || "N/D"}</p>
            </div>
            {movie.first_air_date && (
              <div>
                <h3>First air</h3>
                <p>{movie.first_air_date}</p>
              </div>
            )}
            {movie.last_air_date && (
              <div>
                <h3>Last air</h3>
                <p>{movie.last_air_date}</p>
              </div>
            )}
            <div>
              <h3>Year</h3>
              <p>
                {movie.release_date?.split("-")[0] ||
                  movie.first_air_date?.split("-")[0] ||
                  "N/D"}
              </p>
            </div>
            {movie.episode_run_time && (
              <div>
                <h3>Episode length</h3>
                <p>{movie.episode_run_time[0]} min</p>
              </div>
            )}
          </div>
          <div className={classes.genresDiv}>
            <h3>Genres</h3>
            <div className={classes.genre}>
              {movie.genres.map((genre) => (
                <div key={genre.id}>{genre.name}</div>
              ))}
            </div>
          </div>
          <div className={classes.links}>
            {movie.imdb_id && (
              <a
                className={classes.imbd}
                href={`https://www.imdb.com/title/${movie.imdb_id}/`}
              >
                IMBD Link
              </a>
            )}
            {movie.homepage && (
              <a className={classes.imbd} href={movie.homepage}>
                Homepage
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={classes.overview}>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Details;
