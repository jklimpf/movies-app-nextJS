import Trending from "../components/trending/trending";
import { fetchData } from "../helpers/api-util";
import { Fragment } from "react";

const HomePage = (props) => {
  return (
    <Fragment>
      <Trending movies={props.dataMovies}></Trending>
      <Trending movies={props.dataTV}></Trending>
    </Fragment>
  );
};

export async function getStaticProps() {
  const dataMovies = await fetchData(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=2790a959466e0fce63ff081155b3b55f"
  );
  const dataTV = await fetchData(
    "https://api.themoviedb.org/3/trending/tv/week?api_key=2790a959466e0fce63ff081155b3b55f"
  );

  return {
    props: {
      dataMovies,
      dataTV,
    },
  };
}

export default HomePage;
