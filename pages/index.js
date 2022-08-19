import Trending from "../components/trending/trending";
import { fetchData } from "../helpers/api-util";
import { Fragment } from "react";
import MovieGrid from "../components/movies/movie-grid";
import Search from "../components/search/search";

const HomePage = (props) => {
  return (
    <Fragment>
      <Search></Search>
      <Trending movies={props.dataMovies}></Trending>
      <MovieGrid
        movies={props.dataTopRatedMovies}
        basePath="/movies"
        trending={true}
      ></MovieGrid>
      <Trending movies={props.dataTV}></Trending>
      <MovieGrid
        movies={props.dataTopRatedTV}
        basePath="/series"
        trending={true}
      ></MovieGrid>
      ;
    </Fragment>
  );
};

export async function getStaticProps() {
  const dataTrendingMovies = await fetchData(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=2790a959466e0fce63ff081155b3b55f"
  );

  const dataTrendingTV = await fetchData(
    "https://api.themoviedb.org/3/trending/tv/week?api_key=2790a959466e0fce63ff081155b3b55f"
  );

  const dataTopRatedMovies = await fetchData(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=2790a959466e0fce63ff081155b3b55f"
  );

  const dataTopRatedTV = await fetchData(
    "https://api.themoviedb.org/3/tv/top_rated?api_key=2790a959466e0fce63ff081155b3b55f"
  );

  return {
    props: {
      dataMovies: dataTrendingMovies,
      dataTV: dataTrendingTV,
      dataTopRatedMovies,
      dataTopRatedTV,
    },
  };
}

export default HomePage;
