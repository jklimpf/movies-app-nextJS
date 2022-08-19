import classes from "./search.module.css";
import { useRef } from "react";
import { useRouter } from "next/router";

const Search = (props) => {
  const searchRef = useRef();
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();

    const search = searchRef.current.value;

    console.log(search);

    router.push(`/search-results/${search}`);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        ref={searchRef}
        placeholder="Search for movies and TV shows"
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
