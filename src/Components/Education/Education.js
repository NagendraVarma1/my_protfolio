import classes from './Education.module.css'

const Qualification = () => {
    return (
        <div className={classes.educationBg}>
            <h1 className={classes.header}>EDUCATION</h1>
            <div className={classes.cardDiv}>
                {/* lets only mention graduation and sharpener in this columns */}
                <div className={classes.card}></div>
                <div className={classes.card}></div>
            </div>
        </div>
    )
}

export default Qualification;