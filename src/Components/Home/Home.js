import { Container } from "react-bootstrap";
import myPic from "../../Assests/myPic.JPG";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Container className={classes.container}>

      <img className={classes.profilePic} src={myPic} alt="myProfile" />

      <div className={classes.content}>
        <h3 className={classes.text}>Hi, Myself</h3>
        <h1 className={classes.text}>Nagendra Varma Lolabhattu</h1>
        <h3 className={classes.text}>
          And I'm a <span>Frontend Developer!</span>
        </h3>
        <p className={classes.desc}>I have a strong foundation in web development and a keen interest in creating engaging and user-friendly web applications.</p>
      </div>
    </Container>
  );
};

export default Home;
