import SearchMovieGrid from "../../../components/search/searc-movie-grid";
import Search from "../../../components/search/search";
import { fetchData } from "../../../helpers/api-util";
import { Fragment } from "react";

const SearcheMoviePage = (props) => {
  const searchedMovies = props.searchedMovie.results;

  if (!searchedMovies) return <p>Loading...</p>;

  return (
    <Fragment>
      <Search type="movie"></Search>
      <SearchMovieGrid
        type="movies"
        movies={searchedMovies}
        dataObject={props.searchedMovie}
      ></SearchMovieGrid>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const params = context.params.searchedMovie;
  const paramsConcat = params.split(" ").join("?");

  const data = await fetchData(
    `https://api.themoviedb.org/3/search/movie?api_key=2790a959466e0fce63ff081155b3b55f&query=${paramsConcat}&language=en-US`
  );

  return {
    props: { searchedMovie: data },
  };
}

export function getStaticPaths() {
  return {
    paths: [
      {
        params: { searchedMovie: "" },
      },
    ],
    fallback: "blocking",
  };
}

export default SearcheMoviePage;
