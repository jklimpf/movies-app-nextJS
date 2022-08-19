import TrendingItem from "./trending-item";
import classes from "./trending.module.css";
import { useRef } from "react";

const Trending = (props) => {
  const carouselRef = useRef();

  const transformRightHandler = function () {
    carouselRef.current.scrollLeft += 800;
  };

  const transformLeftHandler = function () {
    carouselRef.current.scrollLeft -= 800;
  };
  const { results } = props.movies;
  console.log(results);

  if (!results) return <p>Loading...</p>;

  return (
    <div className={classes.container}>
      <h1>Trending</h1>
      <div className={classes.wrapper}>
        <button onClick={transformLeftHandler} className={classes.left}>
          <p className={classes.arrow}>&lt;</p>
        </button>
        <div ref={carouselRef} className={classes.carousel}>
          {results.map((movie) => (
            <TrendingItem
              key={movie.id}
              poster={movie.backdrop_path}
              title={movie.name}
              year={movie.first_air_date}
            ></TrendingItem>
          ))}
        </div>
        <button onClick={transformRightHandler} className={classes.right}>
          <p className={classes.arrow}>&gt;</p>
        </button>
      </div>
    </div>
  );
};

export default Trending;
