import React, { useEffect } from 'react';
import AppContainer from './AppContainer';
import {Provider} from 'react-redux';
import {store} from './src/redux';
import SplashScreen from 'react-native-splash-screen';

const Main = AppContainer;

const App = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
export default App;
