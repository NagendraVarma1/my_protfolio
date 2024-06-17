import { Link } from "react-scroll";
import classes from "./NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [active, setActive] = useState(false)

  const activeHandler = () => {
    setActive(!active)
  }
  return (
    <div className={classes.navbar}>
      <h1 className={classes.brand}>Portfolio</h1>

      <div className={classes.burgerBtn} onClick={activeHandler}>
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
      <ul className={active ? classes.navlinkboxActive : classes.navlinkbox}>
        <Link onClick={activeHandler} to="home" style={{margin: 'auto'}} smooth={true} duration={30}><li className={classes.links}>Home</li></Link>
        <Link onClick={activeHandler} to="education" style={{margin: 'auto'}} smooth={true} duration={30}><li className={classes.links}>Education</li></Link>
        <Link onClick={activeHandler} to="projects" style={{margin: 'auto'}} smooth={true} duration={30}><li className={classes.links}>Projects</li></Link>
        <Link onClick={activeHandler} to="contact" style={{margin: 'auto'}} smooth={true} duration={30}><li className={classes.links}>Contact</li></Link>
      </ul>
    </div>
  );
};

export default NavBar;
