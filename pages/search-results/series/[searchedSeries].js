import SearchMovieGrid from "../../../components/search/searc-movie-grid";
import Search from "../../../components/search/search";
import { fetchData } from "../../../helpers/api-util";
import { Fragment } from "react";

const SearcheSeriesPage = (props) => {
  const searchedSeries = props.searchedSerie.results;

  if (!searchedSeries) return <p>Loading...</p>;

  return (
    <Fragment>
      <Search type="series"></Search>
      <SearchMovieGrid
        type="series"
        movies={searchedSeries}
        dataObject={props.searchedSerie}
      ></SearchMovieGrid>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const params = context.params.searchedSeries;
  const paramsConcat = params.split(" ").join("?");

  const data = await fetchData(
    `https://api.themoviedb.org/3/search/tv?api_key=2790a959466e0fce63ff081155b3b55f&query=${paramsConcat}&language=en-US`
  );

  return {
    props: { searchedSerie: data },
  };
}

export function getStaticPaths() {
  return {
    paths: [
      {
        params: { searchedSeries: "the" },
      },
    ],
    fallback: "blocking",
  };
}

export default SearcheSeriesPage;
