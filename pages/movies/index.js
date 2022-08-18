import GenresGrid from "../../components/Genres/genres-grid";
import { fetchData } from "../../helpers/api-util";

const MoviesPage = (props) => {
  return (
    <GenresGrid
      genres={props.movieGenres}
      basePath="/movies/genre/"
    ></GenresGrid>
  );
};

export async function getStaticProps() {
  const data = await fetchData(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=2790a959466e0fce63ff081155b3b55f&language=en-US"
  );

  return {
    props: {
      movieGenres: data.genres,
    },
  };
}

export default MoviesPage;
