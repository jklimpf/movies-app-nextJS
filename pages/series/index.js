import { fetchData } from "../../helpers/api-util";
import GenresGrid from "../../components/Genres/genres-grid";

const SeriesPage = (props) => {
  return (
    <GenresGrid genres={props.tvGenres} basePath="/series/genre/"></GenresGrid>
  );
};

export async function getStaticProps() {
  const data = await fetchData(
    "https://api.themoviedb.org/3/genre/tv/list?api_key=2790a959466e0fce63ff081155b3b55f&language=en-US"
  );

  return {
    props: {
      tvGenres: data.genres,
    },
  };
}
export default SeriesPage;
