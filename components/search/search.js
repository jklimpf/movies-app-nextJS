import classes from "./search.module.css";
import { useRef } from "react";
import { useRouter } from "next/router";

const Search = (props) => {
  const searchRef = useRef();
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();

    let path;

    const search = searchRef.current.value;

    if (props.type === "all") path = `/search-results/${search}`;

    if (props.type === "movie") path = `/search-results/movies/${search}`;

    if (props.type === "series") path = `/search-results/series/${search}`;

    router.push(path);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        ref={searchRef}
        placeholder={`${
          props.type === "all"
            ? "Search movies and shows"
            : props.type === "movie"
            ? "Search movies"
            : "Search shows"
        }`}
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
