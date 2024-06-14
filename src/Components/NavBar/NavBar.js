import { Nav, Navbar } from "react-bootstrap";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <h1 className={classes.brand}>Portfolio</h1>

      <div className={classes.burgerBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          viewBox="0 0 20 20"
          className={classes.logo}
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
      <ul className={classes.navlinkbox}>
        <li className={classes.links}>Home</li>
        <li className={classes.links}>Qualification</li>
        <li className={classes.links}>Projects</li>
        <li className={classes.links}>Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
