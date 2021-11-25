import classes from './Search.module.css';
import {useEffect, useState} from 'react';
import useApiFetch from '../hooks/useApiFetch';


const Search = () => {

    const [city, setCity] = useState('');
    const {requestData} = useApiFetch(`https://api.openweathermap.org/data/2.5/weather?${"q=" + city}&appid=8d342f682d66b6e1370bc79bd312bcd2&units=imperial`);
    const {requestData: onLoadFetch} = useApiFetch();

    useEffect(() =>{
        const geoLoactionHandler = async () => {
            if (window.navigator.geolocation){
                await navigator.geolocation.getCurrentPosition(position => {
                    onLoadFetch(`https://api.openweathermap.org/data/2.5/weather?${"&lat=" + position.coords.latitude  + "&lon=" + position.coords.longitude}&appid=8d342f682d66b6e1370bc79bd312bcd2&units=imperial`)
                }, fallback => {
                    onLoadFetch("https://api.openweathermap.org/data/2.5/weather?q=miami&appid=8d342f682d66b6e1370bc79bd312bcd2&units=imperial")
                        console.log(fallback)
                    }
                );
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
        <nav className={`${classes.wrapper} nav`}>
            <form onSubmit={searchDataByCityHandler}>
                <input placeholder={'Search City'} onChange={cityInputHandler} value={city}/>
                <button className={classes.btn} type={"submit"}>Submit</button>
            </form>
        </nav>
    )
}
export default Search;