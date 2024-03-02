import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, SIZES, icons, images} from '../../constants';
import Icons from '../../component/Icons';
import styles from './styles';
import {Text} from 'react-native';
import Account from '../../screens/account';
import HeaderLeft from '../../component/Header/HeaderLeft';
import Order from '../../screens/order';
import Earning from '../../screens/earning';
import Home from '../../screens/home';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const tabOptions = {
  activeTintColor: COLORS.white,
  // tabBarInActiveTintColor: COLORS.white,
};

const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: COLORS.white,
        tabBarStyle: styles.tabBarStyle,
        tabBarHideOnKeyboard: true,
        tabBarLabel: ({focused}) => {
          const tabBarLabelStyle = focused
            ? styles.activeLabelStyle
            : styles.inactiveLabelStyle;
          switch (route.name) {
            case 'Home':
              return <Text style={tabBarLabelStyle}>Home</Text>;
            case 'Order':
              return <Text style={tabBarLabelStyle}>Order</Text>;
            case 'Earning':
              return <Text style={tabBarLabelStyle}>Earnings</Text>;
            case 'Account':
              return <Text style={tabBarLabelStyle}>Account</Text>;
          }
        },
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.white : null;
          switch (route.name) {
            case 'Home':
              return (
                <Icons
                  name={focused ? 'home' : 'home_outline'}
                  size={25}
                  color={tintColor}
                />
              );
            case 'Order':
              return (
                <Icons
                  name={focused ? 'order' : 'order_outline'}
                  size={25}
                  color={tintColor}
                />
              );
            case 'Earning':
              return (
                <Icons
                  name={focused ? 'earning' : 'earning_outline'}
                  size={25}
                  color={tintColor}
                />
              );
            case 'Account':
              return (
                <Icons
                  name={focused ? 'profile' : 'profile_outline'}
                  size={25}
                  color={tintColor}
                />
              );
          }
        },
        tabBarBackground: () => (
          // Use LinearGradient as the background
          <LinearGradient
            colors={['#651898', '#2C0D8F']}
            style={styles.tabBarStyle} // Your styles for the LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
          />
        ),
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => ({
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={() => ({
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Earning"
        component={Earning}
        options={() => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Earnings'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={() => ({
          headerShown: false,
          // header: () => (
          //   <HeaderLeft navigation={navigation} title={'Profile'} />
          // ),
        })}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
