import React from 'react';
import './App.css';
import {PageHeader } from 'antd';
import {appConfig} from './App.config';
import { Cities } from './components/Cities/Cities';

function App() {
  return (
    <div>
      <PageHeader
        className="app-header"
        onBack={() => null}
        title="Simple Weather App"
        subTitle="Developed with React & TypeScript..."
        avatar={{ src: appConfig.appAvatar  }}
        backIcon={false}
      />
  
      <Cities />
     

    </div>
  );
}

export default App;
