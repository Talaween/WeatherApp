import React from 'react';
import './App.css';
import store from './store/store'
import { Provider } from 'react-redux'
import { AppDisplay } from './components/AppDisplay/AppDisplay';
import { AppHeader } from './components/AppHeader/AppHeader';


function App() {
  
 
  return (
    <Provider store={store}>
      <div>
       
        <AppHeader />
        <AppDisplay />
  
      </div>
    </Provider>
  );
}

export default App;
