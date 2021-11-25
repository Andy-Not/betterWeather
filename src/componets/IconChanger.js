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
    let alt = ''

    if (currentIcon === '01d'){
        icon= sun;
        alt = 'image of the sun';
    }
    if (currentIcon === '01n'){
        icon = moon;
        alt = 'image of the moon';
    }
    if (currentIcon === '02n'){
        icon = nightCloud;
        alt = 'image of cloud and moon';
    }
    if (currentIcon === '02d'){
        icon = dayCloud;
        alt = 'image of a cloud and sun';
    }
    if (currentIcon === '03n' || currentIcon === '03d'|| currentIcon === '04n'|| currentIcon === '04d'|| currentIcon === '50n'|| currentIcon === '50d'){
        icon = cloud;
        alt = 'image of a cloud';
    }
    if (currentIcon === '09d' || currentIcon === '09n'){
        icon = rain;
        alt = 'image of rain';
    }
    if (currentIcon === '10d'){
        icon = rainDay;
        alt = 'image of rainy day';
    }
    if (currentIcon === '10n'){
        icon = rainNight;
        alt = 'image of rainy night';
    }
    if (currentIcon === '11d' || currentIcon === '11n'){
        icon = thunder;
        alt = 'image of thunder';
    }
    if (currentIcon === '13d' || currentIcon === '13n'){
        icon = snow;
        alt = 'image of snow';
    }

    return <img src={icon} alt={alt}/>
}


export default IconChanger;