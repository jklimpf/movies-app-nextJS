import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchData } from "../../helpers/api-util";
import Image from "next/image";

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
  }, [query.movieId, query.show]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{props.type === "movie" ? movie.title : movie.name}</h1>
      <h4>{movie.tagline}</h4>
      <Image
        src={`${posterPath}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.id}
        width={500}
        height={350}
        priority
      ></Image>
      <p>{movie.overview}</p>
    </div>
  );
};

export default Details;
