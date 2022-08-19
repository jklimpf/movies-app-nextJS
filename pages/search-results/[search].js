import SearchMovieGrid from "../../components/search/searc-movie-grid";
import { fetchData } from "../../helpers/api-util";

const SearchResultsPage = (props) => {
  const searchedMovies = props.searchData.results;
  console.log(props.searchData);

  if (!searchedMovies) return <p>Loading...</p>;

  return (
    <SearchMovieGrid
      movies={searchedMovies}
      dataObject={props.searchData}
    ></SearchMovieGrid>
  );
};

export async function getStaticProps(context) {
  const params = context.params.search;
  const paramsConcat = params.split(" ").join("?");

  const data = await fetchData(
    `https://api.themoviedb.org/3/search/multi?api_key=2790a959466e0fce63ff081155b3b55f&query=${paramsConcat}&language=en-US`
  );

  return {
    props: { searchData: data },
  };
}

export function getStaticPaths() {
  return {
    paths: [
      {
        params: { search: "" },
      },
    ],
    fallback: "blocking",
  };
}

export default SearchResultsPage;
