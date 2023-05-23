import classes from "./MainNavigation.module.scss";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
            <Link href="/">
                <div className={classes.logo}>Momenta Momento</div>
            </Link>

      <nav>
        <ul>
          <li>
            <Link href="/">Main</Link>
          </li>
          <li>
            <Link href="/gallery">account</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
