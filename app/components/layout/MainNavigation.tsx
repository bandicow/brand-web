import classes from "./MainNavigation.module.scss";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Picapo</div>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/">Main</Link>
          </li>
          <li>
            <Link href="../login">account</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
