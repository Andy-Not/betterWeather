import classes from "./CurrentWeather.module.css";
import icon from '../assets/icons/svg/001-sunny.svg'

const CurrentWeather = () => {
    return(
        <div className={classes.wrapper}>
            <div className={classes['city-wrapper']}>
                <div className={classes['city']}>
                    friday
                </div>
            </div>
            <div className={classes.icon}>
                <img src={icon} alt="sunny"/>
            </div>
            <div className={classes['weather-info']}>
                <div className={classes['weather-type']}>Sunny</div>
                <div className={classes.temp}>69F</div>
            </div>
        </div>
    )
}
export default CurrentWeather;