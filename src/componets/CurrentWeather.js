import classes from "./CurrentWeather.module.css";
import {useSelector} from "react-redux";
import IconChnager from './IconChanger';
import loading from '../assets/icons/loadingIcon/isLoading.gif'


const CurrentWeather = () => {

    const weatherType = useSelector(state => state.api.weatherStatus);
    const temp = useSelector(state => state.api.temperature);
    let isLoading = false;


    return(
        <div className={classes.wrapper}>
            <div className={classes['city-wrapper']}>
                <div className={classes['city']}>
                    Wednesday
                </div>
            </div>
            <div className={classes.icon}>
                {!isLoading && <IconChnager/>}
                {isLoading && <img src={loading} alt=""/>}
            </div>
            <div className={classes['weather-info']}>
                <div className={classes['weather-type']}>{weatherType}</div>
                <div className={classes.temp}>{temp}F</div>
            </div>
        </div>
    )
}
export default CurrentWeather;