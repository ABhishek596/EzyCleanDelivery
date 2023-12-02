import {
  View,
  Text,
  Image,
  ImageBackground,
  Linking,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
// import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import styles from './styles';
import {COLORS, SIZES, images} from '../../constants';
import globalStyles from '../../styles/globalStyles';
import Icons from '../../component/Icons';
import Button1 from '../../component/button/Button1';
import LinearGradient from 'react-native-linear-gradient';

const NewOrderRequest = () => {
  return (
    <View style={globalStyles.container}>
      <ScrollView style={{flex: 1}}>
        <LinearGradient
          colors={['#935DB7', '#6B56B1']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.user_row4}>
          <Image
            // source={
            //   item.Customer_Image
            //     ? {uri: item.Customer_Image}
            //     : images.profile
            // }
            source={images.profile}
            style={styles.user_pic}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.cus_name}>
              {/* {item.Customer_Details?.customer_name} */}
              Anmol Brass
            </Text>
            <Text style={styles.subtitle}>Order #Dty0010C5</Text>
          </View>
        </LinearGradient>
        <View style={[styles.order_box]}>
          {/* content of box */}
          <View>
            <View style={styles.textBox}>
              <Text style={styles.text}>Pickup Date</Text>
              <Text style={styles.subText5}>
                {/* {formatDate(item.pickup_date)} */}
                04/04/2023
              </Text>
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.textBox}>
              <Text style={styles.text}>Pickup Time</Text>
              <Text style={styles.subText5}>
                {/* {item.pickup_time} */}
                04/04/2023
              </Text>
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.textBox}>
              <Text style={styles.text}>Pickup Address</Text>
              <Text style={styles.subText5}>
                {/* {address} */}
                Shop no. 155 shehnai tent house, indore
              </Text>
            </View>
            <View style={styles.horizontalLine} />

           <View style={{flexDirection:'row',alignSelf:'center',gap:SIZES.width * 0.065}}>
            <Button1
              // onPress={() => navigation.navigate('Invoice')}
              backgroundColor='#FBCFFF80'
              style={{
                borderRadius: 50,
                width: SIZES.width * 0.35,
                marginVertical: 20,
                borderColor:COLORS.primary,
                borderWidth:1.5
              }}
              style1={{
                borderRadius: 50,
                width: SIZES.width * 0.35,
                marginVertical: 20,
                // borderColor:COLORS.primary,
                // borderWidth:1.5
              }}
              textColor={COLORS.white}
              >
              Reject Order
            </Button1>
            <Button1
              // onPress={() => navigation.navigate('Invoice')}
              style={{
                borderRadius: 50,
                width: SIZES.width * 0.35,
                marginVertical: 20,
                
              }}
              style1={{
                borderRadius: 50,
                width: SIZES.width * 0.35,
                marginVertical: 20,
                
              }}
              >
              Accept Order
            </Button1>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#FBCFFF80',
            margin: SIZES.width * 0.035,
            // alignItems: 'center',
            // justifyContent: 'center',
            padding: SIZES.width * 0.035,
            borderRadius: SIZES.width * 0.075,
          }}>
          <Image
            source={require('../../assets/icons/cross.png')}
            // source={
            //   Customer_Image ? {uri: Customer_Image} : images.profile
            // }
            style={[styles.user_pic2]}
            resizeMode="contain"
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: SIZES.height * 0.06,
            }}>
            <Icons name={'check'} size={44} />
          </View>
          <Text style={styles.orderCompleted}>Ordrer Delivered</Text>
          <View style={styles.orderId}>
            <Text
              style={{fontSize: SIZES.width * 0.045, color: COLORS.primary}}>
              {/* Order #{order_id} */}Order #Dry0010B100
            </Text>
            <View>
              <Text
                style={{fontSize: SIZES.width * 0.045, color: COLORS.primary}}>
                {/* {formatDate(delivery_date)} */}23/04/22
              </Text>
              <Text
                style={{fontSize: SIZES.width * 0.035, color: COLORS.primary}}>
                {/* {formatDate(delivery_date)} */}15:00 PM
              </Text>
            </View>
          </View>
          <View style={styles.horizontalLine} />

          <View style={[styles.user_row]}>
            <Image
              source={images.profile}
              // source={
              //   Customer_Image ? {uri: Customer_Image} : images.profile
              // }
              style={[styles.user_pic]}
              resizeMode="contain"
            />
            <View>
              <Text style={[styles.success_cus_name]}>
                {/* {Customer_Details?.customer_name} */}anmol
              </Text>
              <Text style={([styles.subtitle], {color: COLORS.primary})}>
                Customer
              </Text>
            </View>
          </View>

          {/* content of box */}

          <View>
            <View style={styles.textBox}>
              <Text style={styles.text}>Pickup Date</Text>
              {/* <Text style={styles.subText}> {formatDate(pickup_date)}</Text> */}
              <Text style={styles.subText}>11/3/22</Text>
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.textBox}>
              <Text style={styles.text}>Pickup Time</Text>
              <Text style={styles.subText}>15:00 PM</Text>
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.bottomgap} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewOrderRequest;
