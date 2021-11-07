import classes from "./CurrentWeather.module.css";
import {useSelector} from "react-redux";
import IconChnager from './IconChanger';
import loading from '../assets/icons/loadingIcon/isLoading.gif'
import {useState} from "react";


const CurrentWeather = () => {

    const weatherType = useSelector(state => state.api.weatherStatus);
    const temp = useSelector(state => state.api.temperature);
    let isLoading = false;
    const [isFahrenheit, setIsFahrenheit] = useState(true);

    const imperialToMetric = (imperialTemp) => {
        const metricTemp = (imperialTemp - 32) * 5/9;
        return  Math.round(metricTemp);
    }

    const onUnitChangeHandler = (event) => {
        if (event.target.id === "metric"){
            setIsFahrenheit(false);
        }
        if (event.target.id === "imperial"){
            setIsFahrenheit(true)
        }
    }
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
                {isFahrenheit && <div className={classes.temp}>{temp}F</div>}
                {!isFahrenheit && <div className={classes.temp}>{imperialToMetric(temp)}C</div>}
            </div>
            <div>
                <button onClick={onUnitChangeHandler} id={"imperial"}>imperial</button>
                <button onClick={onUnitChangeHandler} id={"metric"}>metric</button>
            </div>
        </div>
    )
}
export default CurrentWeather;