import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from './src/root';
// import SplashScreen from 'react-native-splash-screen';
// import { View } from 'react-native'
// import { getDeviceToken, notificationListener } from './services/notification';
import NavigationService from './src/services/NavigationService';

// import Notification from './src/screens/notification';
const AppContainer = ({navigation}) => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, [])
  //  <NavigationContainer ref={ref => NavigationService.setTopLevelNavigator(ref)}>
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};
export default AppContainer;
