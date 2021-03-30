import React from 'react';
import './App.css';
import {PageHeader } from 'antd';
import {AppConfig} from './App.config';
import { Cities } from './components/Cities/Cities';
import store from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div>
        <PageHeader
          className="app-header"
          onBack={() => null}
          title="Simple Weather App"
          subTitle="Developed with React & TypeScript..."
          avatar={{ src: AppConfig.appAvatar  }}
          backIcon={false}
        />
    
        <Cities />
      

      </div>
    </Provider>
  );
}

export default App;
