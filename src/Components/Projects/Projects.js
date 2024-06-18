import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <div id="projects" className={classes.projectsBg}>
      <h1 className={classes.header}>PROJECTS</h1>
      <div className={classes.cardDiv}>
        <div className={classes.card}>
          <h3 className={classes.projectTitle}>E-COMMERCE WEBSITE</h3>
          <p className={classes.description}>
            In this website, user can find different products and add them to
            the cart.
          </p>
          <ul>
            <li className={classes.list}>
              Technologies used are React js and Bootstrap for the styling.
            </li>
            <li className={classes.list}>
              User need to log in to access some options of the website
            </li>
            <li className={classes.list}>
              Used firebase for authentication and for the data storage.
            </li>
          </ul>
          <a href="https://github.com/NagendraVarma1/Ecommerce-Website-Main">
            Repository
          </a>
        </div>
        <div className={classes.card}>
          <h3 className={classes.projectTitle}>EXPENSE TRACKER</h3>
          <p className={classes.description}>
            It is the projects that helps the user to maintain and the expenses.
          </p>
          <ul>
            <li className={classes.list}>
              Technologies used are React js and Bootstrap for the styling.
            </li>
            <li className={classes.list}>
              We can change from Light theme to Dark theme and vice versa.
            </li>
            <li className={classes.list}>
              Used firebase for authentication and for the data storage.
            </li>
          </ul>
          <a href="https://github.com/NagendraVarma1/Ecommerce-Website-Main">
            Repository
          </a>
        </div>
        <div className={classes.card}>
          <h3 className={classes.projectTitle}>MAIL CLIENT BOX</h3>
          <p className={classes.description}>
            It is the website which helps the user to send and recieve from
            other users.
          </p>
          <ul>
            <li className={classes.list}>
              Technologies used are React js and Bootstrap for the styling.
            </li>
            <li className={classes.list}>
              User need to log in to access some options of the website
            </li>
            <li className={classes.list}>
              We can send and receive mails from the other users and delete the
              unwanted mails.
            </li>
          </ul>
          <a href="https://github.com/NagendraVarma1/Ecommerce-Website-Main">
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
