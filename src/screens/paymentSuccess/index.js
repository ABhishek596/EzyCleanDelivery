import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {COLORS, images} from '../../constants';
import formatAMPM from '../../services/time';
import formatDate from '../../services/date';
import Button1 from '../../component/button/Button1';
import {SIZES} from '../../constants';

const PaymentSuccess = ({navigation, route}) => {
  // result = route.params && route.params.paymentResult
  const date = new Date();
  // console.log("route success : ",route.params && route.params.routeName)
  // useEffect(() => {
  //     const backAction = () => {
  //         return true;
  //     };
  //     const backHandler = BackHandler.addEventListener(
  //         'hardwareBackPress',
  //         backAction,
  //     );
  //     return () => backHandler.remove();
  // }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <View style={styles.imageBox}>
        <Image
          source={images.success}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.box}>
        <Text style={styles.success_text}>Thank you!</Text>
        <Text style={styles.title}>Payment Successful</Text>
        <Text style={styles.text}>
          Now you can track your booking or{'\n'}
          go back to home screen
        </Text>
        {/* <View style={styles.line} /> */}
        {/* <Text style={styles.blueText}>{success ? `Transaction Number : ${route.data.transaction_id}` : "Your Payment wasn’t completed."}</Text> */}
      </View>
      {/* <Button1
                onPress={() => navigation.navigate("Order")}
            >
                Back to Orders
            </Button1> */}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('OrderDetails')}>
          <Text style={styles.btn_text}>Track</Text>
        </TouchableOpacity>
        <View style={{width: SIZES.width * 0.066}} />
        <TouchableOpacity
          style={[
            styles.btn,
            // {
            //   borderWidth: 2,
            //   borderColor: COLORS.secondary,
            //   backgroundColor: COLORS.white,
            //   flexDirection: 'row',
            //   alignItems: 'center',
            // },
          ]}
          // onPress={() => navigation.navigate('Invoice')}
          >
          <Text
            style={[styles.btn_text, {color: COLORS.white, marginBottom: 0}]}>
            Home
          </Text>
          {/* <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/images/Leftout.png')} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentSuccess;
