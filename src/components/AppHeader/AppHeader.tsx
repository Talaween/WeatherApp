import {PageHeader, Input} from 'antd';
import {selectDisplay} from '../../components/AppDisplay/AppDisplaySlice';
import { useSelector, useDispatch } from 'react-redux'
import {setForecastFor} from '../../components/AppDisplay/AppDisplaySlice';
import {AppConfig} from '../../App.config';

export const AppHeader:React.FC = () => {
    const dispatch = useDispatch();
    const currentDisplay =  useSelector(selectDisplay);

    const searchControls = currentDisplay 
                ? [ <Input style={{ width: '25%' }} placeholder="Min Temp" />, 
                    <Input style={{ width: '25%' }} placeholder="Max Temp" />
                ]
                : [];

    return  <PageHeader
        className="app-header"
        onBack={() => dispatch(setForecastFor(''))}
        title="Simple Weather App"
        subTitle="Developed with React, Redux & TypeScript..."
        avatar={{ src: AppConfig.appAvatar  }}
        extra = {searchControls}
    />
}