import { Link } from "react-scroll";
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
        <Link to="home" style={{margin: 'auto'}}><li className={classes.links}>Home</li></Link>
        <Link to="education" style={{margin: 'auto'}}><li className={classes.links}>Education</li></Link>
        <Link to="projects" style={{margin: 'auto'}}><li className={classes.links}>Projects</li></Link>
        <Link to="contact" style={{margin: 'auto'}}><li className={classes.links}>Contact</li></Link>
      </ul>
    </div>
  );
};

export default NavBar;
