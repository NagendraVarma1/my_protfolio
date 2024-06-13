import {  Nav,  Navbar } from "react-bootstrap";
import classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <Navbar className={classes.navbar} >
            <Navbar.Brand className={classes.brand}><h1>Portfolio</h1></Navbar.Brand>
            <Nav className={classes.navlinkbox}>
                <Nav.Link className={classes.links}>Home</Nav.Link>
                <Nav.Link className={classes.links}>Qualification</Nav.Link>
                <Nav.Link className={classes.links}>Projects</Nav.Link>
                <Nav.Link className={classes.links}>Contact</Nav.Link>
            </Nav>
            
        </Navbar>
    )
}

export default NavBar;