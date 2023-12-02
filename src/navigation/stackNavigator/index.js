import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
// import styles from './styles';
import EditProfile from '../../screens/editProfile';
import HeaderLeft from '../../component/Header/HeaderLeft';
import BottomTab from '../bottomTab';
import PaymentSuccess from '../../screens/paymentSuccess';
// import {Image, View} from 'react-native';
import Notification from '../../screens/notification';
import UploadDocument from '../../screens/uploadDocument';
import OrderDetails from '../../screens/orderDetails';
import NewOrderRequest from '../../screens/newOrderRequest';
// import PendingOrder from '../../screens/pendingOrder';
// import MapScreen from '../../screens/mapscreen';
import Invoice from '../../screens/invoice';
import BankDetails from '../../screens/banklDetails';
import AppSettings from '../../screens/appSetting';
import Language from '../../screens/language';

const Stack = createStackNavigator();

const StackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      // initialRouteName='ContactUs'
      screenOptions={() => ({
        // headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={() => ({
          headerShown: false,
        })}
      />

      <Stack.Screen
        name="PaymentSuccess"
        component={PaymentSuccess}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Payment Successful'} />
          ),
        })}
      />
      <Stack.Screen
        name="Invoice"
        component={Invoice}
        options={() => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Invoice'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={() => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Notification'} />
          ),
        })}
      />
      <Stack.Screen
        name="BankDetails"
        component={BankDetails}
        options={() => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'BankDetails'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="UploadDocument"
        component={UploadDocument}
        options={() => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Upload Document'} />
          ),
        })}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={() => ({
          headerShown: false,
          // header: () => (
          //   <HeaderLeft navigation={navigation} title={'Edit Profile'} />
          // ),
        })}
      />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="AppSettings"
        component={AppSettings}
        options={() => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'AppSettings'} />
          ),
        })}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={() => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Language'} />
          ),
        })}
      />
      {/* <Stack.Screen
        name="PendingOrder"
        component={PendingOrder}
        options={() => ({
          headerShown: false,
        })}
      /> */}

      <Stack.Screen
        name="NewOrderRequest"
        component={NewOrderRequest}
        options={() => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'New Order Request'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      {/* <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={() => ({
          headerShown: false,
        })}
        // options={() => ({
        //   header: () => (
        //     <HeaderLeft navigation={navigation} title={'User Location'} />
        //   ),
        // })}
      /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
