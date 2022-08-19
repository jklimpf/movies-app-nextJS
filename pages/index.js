import Trending from "../components/trending/trending";
import { fetchData } from "../helpers/api-util";

const HomePage = (props) => {
  return <Trending movies={props.data}></Trending>;
};

export async function getStaticProps() {
  const data = await fetchData(
    "https://api.themoviedb.org/3/trending/tv/week?api_key=2790a959466e0fce63ff081155b3b55f"
  );

  return {
    props: {
      data,
    },
  };
}

export default HomePage;
