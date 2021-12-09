import classes from './Search.module.css';
import {useEffect, useState} from 'react';
import useApiFetch from '../hooks/useApiFetch';


const Search = () => {
    const KEY = process.env.REACT_APP_API_KEY;
    const [city, setCity] = useState('');
    const {requestData} = useApiFetch(`https://api.openweathermap.org/data/2.5/weather?${"q=" + city}&appid=${KEY}`);
    const {requestData: onLoadFetch} = useApiFetch();

    useEffect(() =>{
        const geoLoactionHandler = async () => {
            if (window.navigator.geolocation){
                await navigator.geolocation.getCurrentPosition(position => {
                    onLoadFetch(`https://api.openweathermap.org/data/2.5/weather?${"&lat=" + position.coords.latitude  + "&lon=" + position.coords.longitude}&appid=${KEY}&units=imperial`)
                }, fallback => {
                    onLoadFetch(`https://api.openweathermap.org/data/2.5/weather?q=miami&appid=${KEY}&units=imperial`)
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
       requestData(`https://api.openweathermap.org/data/2.5/weather?${"q=" + city}&appid=${KEY}&units=imperial`)
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