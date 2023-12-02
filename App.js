import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/redux';
import Root from './src/root';
// import SplashScreen from 'react-native-splash-screen';
// import { View } from 'react-native'
// import { getDeviceToken, notificationListener } from './services/notification';
// import NavigationService from './src/services/NavigationService';

// import Notification from './src/screens/notification';
const App = ({navigation}) => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, [])

  return (
    <Provider store={store}>
      <NavigationContainer
      // ref={ref => NavigationService.setTopLevelNavigator(ref)}
      >
        <Root />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
