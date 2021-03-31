import {PageHeader, Input} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {selectDisplay} from '../../components/AppDisplay/AppDisplaySlice';
import {setForecastFor} from '../../components/AppDisplay/AppDisplaySlice';
import {AppConfig} from '../../App.config';

export const AppHeader:React.FC = () => {
    const dispatch = useDispatch();
    const currentDisplay =  useSelector(selectDisplay);

    return  <PageHeader
        className="app-header"
        onBack={() => dispatch(setForecastFor(''))}
        title="Simple Weather App"
        subTitle="Developed with React, Redux & TypeScript..."
        avatar={{ src: AppConfig.appAvatar  }}
        
    />
}