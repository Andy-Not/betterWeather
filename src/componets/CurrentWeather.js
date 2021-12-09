import classes from "./CurrentWeather.module.css";
import {useSelector} from "react-redux";
import loading from '../assets/icons/loadingIcon/isLoading.gif'
import {useState} from "react";
import IconChanger from "./IconChanger";


const CurrentWeather = () => {
    const apiData = useSelector(state => state.api);
    let isLoading = false;
    const [isFahrenheit, setIsFahrenheit] = useState(true);

    const imperialToMetric = (imperialTemp) => {
        const metricTemp = (imperialTemp - 32) * 5/9;
        return  Math.round(metricTemp);
    }
    function getDayName()
    {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        const currentFullDate = mm + '/' + dd + '/' + yyyy
        const date = new Date(currentFullDate);
        return date.toLocaleDateString("en-US", { weekday: 'long' });
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
        <main className={classes.wrapper}>
            <section>
                <div className={classes['day-wrapper']}>
                    <h1>{apiData.city}</h1>
                    <h2>{getDayName()}</h2>
                </div>

                <div className={classes.icon}>
                    {!isLoading && <IconChanger/>}
                    {isLoading && <img src={loading} alt=""/>}
                </div>
            </section>

            <section className={classes['weather-info']}>
                <div className={classes['weather-type']}>
                    {apiData.weatherStatus}
                </div>

                <div>
                    {isFahrenheit && <div className={classes.temp}>{apiData.temperature}F&deg; </div>}
                    {!isFahrenheit && <div className={classes.temp}>{imperialToMetric(apiData.temperature)}C&deg; </div>}
                </div>

                <div className={classes['weather-input']}>
                    <button className={classes.btn} onClick={onUnitChangeHandler} id={"imperial"}>fahrenheit</button>
                    <button className={classes.btn} onClick={onUnitChangeHandler} id={"metric"}>celsius</button>
                </div>
            </section>
        </main>
    )
}
export default CurrentWeather;