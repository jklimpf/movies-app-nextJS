import { fetchData } from "../helpers/api-util";

const HomePage = (props) => {
  return <div>Home</div>;
};

export async function getStaticProps() {
  const data = await fetchData(
    "https://api.themoviedb.org/3/discover/movie?api_key=2790a959466e0fce63ff081155b3b55f&language=en-US&with_genres=37&page=2"
  );

  return {
    props: {
      data,
    },
  };
}

export default HomePage;
