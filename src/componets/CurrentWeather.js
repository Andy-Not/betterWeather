import classes from "./CurrentWeather.module.css";
import icon from '../assets/icons/svg/001-sunny.svg'
import {useSelector} from "react-redux";

let isInitial = true;

const CurrentWeather = () => {

    const weatherType = useSelector(state => state.api.weatherStatus);
    const temp = useSelector(state => state.api.temperature);

    return(
        <div className={classes.wrapper}>
            <div className={classes['city-wrapper']}>
                <div className={classes['city']}>
                    Wednesday
                </div>
            </div>
            <div className={classes.icon}>
                <img src={icon} alt="sunny"/>
            </div>
            <div className={classes['weather-info']}>
                <div className={classes['weather-type']}>{weatherType}</div>
                <div className={classes.temp}>{temp}F</div>
            </div>
        </div>
    )
}
export default CurrentWeather;