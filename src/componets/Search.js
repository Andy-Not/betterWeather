import classes from './Search.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useSelector, useDispatch} from "react-redux";
import {apiActions} from "../store/api-slice";


const Search = () => {

    const city = useSelector(state => state.api.city);

    const dispatch = useDispatch();

    const fetchWeather = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?${"q=" + "florida"}&appid=8d342f682d66b6e1370bc79bd312bcd2&units=imperial`);
        if (!response.ok){
            throw new Error('something went wrong');
        }
        console.log('REQUESTED SEARCH')
        const data = await response.json()

        dispatch(apiActions.updateWeatherInfo({
            city: data.name,
            temperature: data.main.temp,
            weatherStatus: data.weather[0].description
        }))
    }

    const dummyFunc = (e) => {
        e.preventDefault();
        fetchWeather();
    }

    return(
        <div className={classes.wrapper}>
            <div>
                {city}
            </div>
            <form onSubmit={dummyFunc}>
                <TextField id="outlined-basic" label="City" variant="outlined" />
                <Button variant={"contained"} type={"submit"}>Search</Button>
            </form>
        </div>
    )
}
export default Search;