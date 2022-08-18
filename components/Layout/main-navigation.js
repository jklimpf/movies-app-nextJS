import Link from "next/link";
import classes from "./main-navigation.module.css";
import { useRouter } from "next/router";

const MainNavigation = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header className={classes.header}>
      <div>Logo</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/">
              <a
                className={
                  currentRoute === "/" ? classes.active : classes.notActive
                }
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/movies">
              <a
                className={
                  currentRoute.includes("movies")
                    ? classes.active
                    : classes.notActive
                }
              >
                Movies
              </a>
            </Link>
          </li>
          <li>
            <Link href="/series">
              <a
                className={
                  currentRoute.includes("series")
                    ? classes.active
                    : classes.notActive
                }
              >
                Show
              </a>
            </Link>
          </li>
          <li>
            <Link href="/bookmark">
              <a
                className={
                  currentRoute === "/bookmark"
                    ? classes.active
                    : classes.notActive
                }
              >
                Bookmark
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div>Account</div>
    </header>
  );
};

export default MainNavigation;
