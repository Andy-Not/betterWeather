import classes from './Search.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useEffect, useState} from 'react';
import useApiFetch from '../hooks/useApiFetch';


const Search = () => {

    const [city, setCity] = useState('')
    const {requestData} = useApiFetch(`https://api.openweathermap.org/data/2.5/weather?${"q=" + city}&appid=8d342f682d66b6e1370bc79bd312bcd2&units=imperial`);
    const {requestData: onLoadFetch} = useApiFetch();

    useEffect(() =>{
        const geoLoactionHandler = async () => {
            if (navigator.geolocation){
                await navigator.geolocation.getCurrentPosition(position => {
                    onLoadFetch(`https://api.openweathermap.org/data/2.5/weather?${"&lat=" + position.coords.latitude  + "&lon=" + position.coords.longitude}&appid=8d342f682d66b6e1370bc79bd312bcd2&units=imperial`)
                });
            }else{
                alert('navigator geoloacation not allowed :(')
            }
        }
        geoLoactionHandler();
    },[onLoadFetch])

    const cityInputHandler = (event) => {
        setCity(event.target.value)
    }

    const searchDataByCityHandler = (event) => {
        event.preventDefault();
        if (city === ''){
            return
        }
       requestData(`https://api.openweathermap.org/data/2.5/weather?${"q=" + city}&appid=8d342f682d66b6e1370bc79bd312bcd2&units=imperial`)
        setCity('')
    }

    return(
        <div className={classes.wrapper}>
            <div>
                {city}
            </div>
            <form onSubmit={searchDataByCityHandler}>
                <TextField id="outlined-basic" label="City" variant="outlined" onChange={cityInputHandler} value={city}/>
                <Button variant={"contained"} type={"submit"}>Search</Button>
            </form>
        </div>
    )
}
export default Search;