import TrendingItem from "./trending-item";
import classes from "./trending.module.css";
import { useRef } from "react";
import Badge from "../UI/badge";

const Trending = (props) => {
  const carouselRef = useRef();

  const transformRightHandler = function () {
    carouselRef.current.scrollLeft += 800;
  };

  const transformLeftHandler = function () {
    carouselRef.current.scrollLeft -= 800;
  };

  if (!props) return <p>Loading...</p>;

  const { results } = props.movies;

  if (!results) return <p>Loading...</p>;

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Trending</h1>
        <Badge type={results[0].media_type}></Badge>
      </div>
      <div className={classes.wrapper}>
        <button onClick={transformLeftHandler} className={classes.left}>
          <p className={classes.arrow}>&lt;</p>
        </button>
        <div ref={carouselRef} className={classes.carousel}>
          {results.map((movie) => (
            <TrendingItem
              key={movie.id}
              poster={movie.backdrop_path}
              title={movie.name || movie.title}
              year={movie.first_air_date || movie.release_date}
              type={movie.media_type}
              id={movie.id}
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
