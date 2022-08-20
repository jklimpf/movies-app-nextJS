import classes from "./pages.module.css";

const Pages = (props) => {
  const prevPageHandler = () => {
    props.onPrevPage();
  };

  const nextPageHandler = () => {
    props.onNextPage();
  };

  return (
    <div className={classes.pages}>
      {props.page > 1 && <button onClick={prevPageHandler}>Prev</button>}
      <p>
        {props.page} of {props.totalPages > 500 ? "500" : props.totalPages}
      </p>
      {props.page < props.totalPages && (
        <button onClick={nextPageHandler}>Next</button>
      )}
    </div>
  );
};

export default Pages;
