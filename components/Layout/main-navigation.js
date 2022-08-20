import Link from "next/link";
import classes from "./main-navigation.module.css";
import { useRouter } from "next/router";
import { FaHome, FaTv, FaBookmark } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { FcClapperboard } from "react-icons/fc";
import { VscAccount } from "react-icons/vsc";

const MainNavigation = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <FcClapperboard size={35} />
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/">
              <a
                className={
                  currentRoute === "/" ? classes.active : classes.notActive
                }
                title="Homepage"
              >
                <FaHome size={currentRoute === "/" ? 25 : 30} />
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
                title="Movies"
              >
                <MdLocalMovies
                  size={currentRoute.includes("movies") ? 25 : 30}
                />
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
                title="TV shows"
              >
                <FaTv size={currentRoute.includes("series") ? 25 : 30} />
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
                title="Bookmarks"
              >
                <FaBookmark
                  size={currentRoute.includes("bookmark") ? 25 : 30}
                />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes.account}>
        <VscAccount size={35} />
      </div>
    </header>
  );
};

export default MainNavigation;
