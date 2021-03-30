import { useSelector } from 'react-redux'
import {CurrentWeather} from '../CurrentWeather/CurrentWeather';
import {ForecastCityDisplay} from '../ForecastCityDisplay/ForecastCityDisplay';
import {selectDisplay} from './AppDisplaySlice';
import {isEmpty} from '../../utilities/HelperFunction';

export const AppDisplay:React.FC = () => {

    const currentDisplay = useSelector(selectDisplay);

    return isEmpty(currentDisplay) ? <CurrentWeather /> : <ForecastCityDisplay />;
}