import { Fragment } from "react";
import MainNavigation from "./main-navigation";
import classes from "./layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <MainNavigation></MainNavigation>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
