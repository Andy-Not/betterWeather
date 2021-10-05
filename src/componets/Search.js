import classes from './Search.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useSelector, useDispatch} from "react-redux";
import {apiActions} from "../store/api-slice";
import {useEffect} from 'react';

const Search = () => {

    const city = useSelector(state => state.api.city);
    const dispatch = useDispatch();



    useEffect(() =>{

        const fetchWeatherViaGeo = async (position) => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?${"&lat=" + position.lat  + "&lon=" + position.lon}&appid=8d342f682d66b6e1370bc79bd312bcd2&units=imperial`);
            if (!response.ok){
                throw new Error('something went wrong');
            }
            console.log('REQUESTED SEARCH')
            const data = await response.json()
            console.log({data,  text:'AUTO DATA'})

            dispatch(apiActions.updateWeatherInfo({
                city: data.name,
                temperature: data.main.temp,
                weatherStatus: data.weather[0].description,
                weatherMain: data.weather[0].main,
                currentTime: data.dt,
                sunsetTime: data.sys.sunset,
                sunriseTime: data.sys.sunrise,
                icon: data.weather[0].icon
            }))
        }
        const geoHandeler = async () => {
            await navigator.geolocation.getCurrentPosition(position => {
                fetchWeatherViaGeo({lat: position.coords.latitude, lon: position.coords.longitude})
            });
        }

        geoHandeler();

    },[dispatch])





    const fetchWeather = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?${"q=" + city}&appid=8d342f682d66b6e1370bc79bd312bcd2&units=imperial`);
        if (!response.ok){
            throw new Error('something went wrong');
        }
        console.log('REQUESTED SEARCH')
        const data = await response.json()
        console.log({data,  text:'SRC DATA'})
        dispatch(apiActions.updateWeatherInfo({
            city: data.name,
            temperature: data.main.temp,
            weatherStatus: data.weather[0].description,
            weatherMain: data.weather[0].main,
            currentTime: data.dt,
            sunsetTime: data.sys.sunset,
            sunriseTime: data.sys.sunrise,
            icon: data.weather[0].icon
        }))
    }

    const cityInputHandler = (event) => {
        dispatch(apiActions.updateWeatherInfo({city: event.target.value}))
    }

    const dummyFunc = (e) => {
        e.preventDefault();
        if (city === ''){
            return
        }
        fetchWeather();
    }

    return(
        <div className={classes.wrapper}>
            <div>
                {city}
            </div>
            <form onSubmit={dummyFunc}>
                <TextField id="outlined-basic" label="City" variant="outlined" onChange={cityInputHandler}/>
                <Button variant={"contained"} type={"submit"}>Search</Button>
            </form>
        </div>
    )
}
export default Search;