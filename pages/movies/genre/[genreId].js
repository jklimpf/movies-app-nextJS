import MovieGrid from "../../../components/movies/movie-grid";
import { fetchData } from "../../../helpers/api-util";

const MoviesByGenrePage = (props) => {
  return <MovieGrid movies={props.movies} basePath="/movies"></MovieGrid>;
};

export async function getStaticProps(context) {
  const params = context.params;
  const pageNum = params.genreId.split("=")[1];
  const queryId = params.genreId.split("&")[0];

  const movies = await fetchData(
    `https://api.themoviedb.org/3/discover/movie?api_key=2790a959466e0fce63ff081155b3b55f&language=en-US&with_genres=${
      pageNum < 1 || pageNum > 500 ? queryId : params.genreId
    }`
  );
  if (!movies)
    return {
      notFound: true,
    };

  return {
    props: { movies },
  };
}

export async function getStaticPaths() {
  const genres = await fetchData(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=2790a959466e0fce63ff081155b3b55f&language=en-US"
  );

  const genrePaths = genres.genres.map((genre) => ({
    params: { genreId: genre.id + "" },
  }));

  return {
    paths: genrePaths,
    fallback: "blocking",
  };
}

export default MoviesByGenrePage;
