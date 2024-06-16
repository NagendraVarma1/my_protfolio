import classes from "./Education.module.css";

const Qualification = () => {
  return (
    <div id="education" className={classes.educationBg}>
      <h1 className={classes.header}>EDUCATION</h1>
      <div className={classes.cardDiv}>
        {/* lets only mention graduation and sharpener in this columns */}
        <div className={classes.card}>
          <div className={classes.course}>
            <h1>GRADUATION</h1>
          </div>
          <div className={classes.details}>
            <h2>MECHANICAL ENGINEERING</h2>
            <p>(2018 - 2022)</p>
            <h4>Centurion University of Technology and Management</h4>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.course}>
            <h1>INTERNSHIP</h1>
          </div>
          <div className={classes.details}>
            <h2>FRONTEND DEVELOPMENT</h2>
            <p>(2022 - 2023)</p>
            <h4>Sharpener Tech</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
