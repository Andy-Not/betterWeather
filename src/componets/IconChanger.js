import sun from '../assets/icons/svg/001-sunny.svg';
import moon from '../assets/icons/svg/013-new moon.svg';
import nightCloud from  '../assets/icons/svg/016-cloudy.svg';
import thunder from '../assets/icons/svg/007-thunder.svg';
import dayCloud from '../assets/icons/svg/sunnyCloundy.svg';
import cloud from '../assets/icons/svg/cloud.svg';
import rain from '../assets/icons/svg/005-heavy rain.svg';
import rainDay from '../assets/icons/svg/003-rain.svg';
import rainNight from '../assets/icons/svg/017-rainNight.svg';
import snow from '../assets/icons/svg/009-snow.svg';
import {useSelector} from "react-redux";



const IconChanger = () => {
    const currentIcon = useSelector(state => state.api.icon);

    let icon = '';

    if (currentIcon === '01d'){
        icon= sun;
    }
    if (currentIcon === '01n'){
        icon = moon;
    }
    if (currentIcon === '02n'){
        icon = nightCloud;
    }
    if (currentIcon === '02d'){
        icon = dayCloud;
    }
    if (currentIcon === '03n' || currentIcon === '03d'|| currentIcon === '04n'|| currentIcon === '04d'|| currentIcon === '50n'|| currentIcon === '50d'){
        icon = cloud;
    }
    if (currentIcon === '09d' || currentIcon === '09n'){
        icon = rain;
    }
    if (currentIcon === '10d'){
        icon = rainDay;
    }
    if (currentIcon === '10n'){
        icon = rainNight;
    }
    if (currentIcon === '11d' || currentIcon === '11n'){
        icon = thunder;
    }
    if (currentIcon === '13d' || currentIcon === '13n'){
        icon = snow;
    }

    return <img src={icon} alt=""/>
}


export default IconChanger;