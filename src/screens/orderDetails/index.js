import {
  View,
  Text,
  Image,
  ImageBackground,
  Linking,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import styles from './styles';
import {COLORS, SIZES, images} from '../../constants';
import globalStyles from '../../styles/globalStyles';
import Icons from '../../component/Icons';
import Button1 from '../../component/button/Button1';
import LinearGradient from 'react-native-linear-gradient';

const OrderDetails = ({userData, navigation, route}) => {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false);
  //   let item = route.params?.data;
  //   let address = `${item?.Address_Details?.[0].address} ${item?.Address_Details?.[0].locality} ${item?.Address_Details?.[0].city} ${item?.Address_Details?.[0].state} ${item?.Address_Details?.[0].country} ${item?.Address_Details?.[0].pincode}`;
  //   // console.log("route data order details : ", item)
  //   let quantity = 0;
  //   item.Item_Details?.forEach(element => {
  //     quantity += element.qty;
  //   });
  const handleTabChange = newActive => {
    setActive(newActive);
  };
  return (
    <View style={globalStyles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      {/* header */}
      <View style={styles.header_bg}>
        <ImageBackground source={images.header_bg} style={styles.header_row}>
          <TouchableOpacity
            style={styles.back_btn}
            onPress={() => navigation?.goBack()}>
            <Icons name={'back'} size={22} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={styles.title}>
            Order #Dty0010C5
            {/* {item?.order_id} */}
          </Text>
        </ImageBackground>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* user box */}
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#935DB7', '#6B56B1']}
          style={styles.user_box}>
          <View style={styles.user_row}>
            <Image
              //   source={
              //     item?.Customer_Image
              //       ? {uri: item.Customer_Image}
              //       : images.profile
              //   }
              source={images.profile}
              style={styles.profile}
              resizeMode="contain"
            />

            <View>
              <Text style={styles.user_name}>
                {/* {item?.Customer_Details?.customer_name} */}
                {userData?.delivery_boy_name}
              </Text>
              <Text style={styles.subtitle}>Ordered by</Text>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.call_btn}
            // onPress={() =>
            //   Linking.openURL(`tel:${item?.Customer_Details?.phone_number}`)
            // }
          >
            <Icons name={'call'} size={20} color={COLORS.white} />
          </TouchableOpacity>
        </LinearGradient>

        {/* deliver box */}
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#935DB7', '#6B56B1']}
          style={styles.box}>
          <View>
            <Text style={styles.deliver}>
              {/* {item.Status_Details?.label_name} */}
              Ready to Deliver
            </Text>
            <Text style={styles.subtitle}>Order status</Text>
          </View>
          <TouchableOpacity activeOpacity={0.5} style={styles.order_btn}>
            <Icons name={'order'} size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#651098', '#2C0D8F']}
          style={styles.topBtnsContainer}>
          <TouchableOpacity
            onPress={() => handleTabChange(0)}
            style={active === 0 ? styles.activeBtn : styles.topBtns}>
            <Text style={active === 0 ? styles.activeBtnText : styles.btnText}>
              Order Info
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTabChange(1)}
            style={active === 1 ? styles.activeBtn : styles.topBtns}>
            <Text style={active === 1 ? styles.activeBtnText : styles.btnText}>
              Cloth List
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        {active === 1 && (
          <View
            onPress={() =>
              navigation.navigate('PendingOrder', {
                // item,
                // address,
                // quantity,
                // orderStatusList,
              })
            }>
            <View style={{marginVertical: 10}}>
              <LinearGradient
                colors={['#935DB7', '#6B56B1']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.user_row2}>
                <Text
                  style={[styles.cus_name1, {marginLeft: SIZES.width * 0.03}]}>
                  {/* {item.Customer_Details?.customer_name} */}
                  Items{'\n'}Summery
                </Text>
                <Text style={[styles.subtitle, {fontSize: SIZES.width * 0.05}]}>
                  Order
                </Text>
                <Text
                  style={[
                    styles.subtitle,
                    {
                      fontSize: SIZES.width * 0.05,
                      marginRight: SIZES.width * 0.06,
                    },
                  ]}>
                  Qty
                </Text>
              </LinearGradient>

              <View style={[styles.order_box2]}>
                {/* content of box */}
                <View>
                  <View style={styles.textBox1}>
                    <Text style={styles.text22}>Shirt Dry Clean</Text>
                    <Text style={[styles.subText1, {marginLeft: 32}]}>
                      {/* {formatDate(item.pickup_date)} */}
                      Wash/Iron
                    </Text>
                    <Text style={styles.subText1}>
                      {/* {formatDate(item.pickup_date)} */}
                      03
                    </Text>
                  </View>
                  <View style={styles.horizontalLine} />
                  <View style={styles.textBox1}>
                    <Text style={styles.text22}>Cash on Delivery</Text>
                    <Text style={styles.subText1}>
                      {/* {item.pickup_time} */}
                    </Text>
                    <Text style={styles.subText1}>
                      {/* {item.pickup_time} */}$ 140
                    </Text>
                  </View>
                  <View style={styles.horizontalLine} />
                  <View style={{height: 50}} />
                  {/* <Button1
                     onPress={()=>navigation.navigate('OrderDetails')}
                     style={{
                       borderRadius: 50,
                       width: 170,
                       marginVertical: 20,
                     }}>
                     Invoice
                   </Button1> */}
                </View>
              </View>
            </View>
          </View>
        )}
        {active === 0 && (
          <View
            onPress={() =>
              navigation.navigate('PendingOrder', {
                // item,
                // address,
                // quantity,
                // orderStatusList,
              })
            }>
            <View style={{marginVertical: 10}}>
              <LinearGradient
                colors={['#935DB7', '#6B56B1']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.user_row2}>
                <Text
                  style={[styles.cus_name1, {marginLeft: SIZES.width * 0.03}]}>
                  {/* {item.Customer_Details?.customer_name} */}
                  Order No: #Dty0010C5
                </Text>
                {/* <Text style={[styles.subtitle, {fontSize: SIZES.width * 0.05}]}>
                  View
                </Text> */}
              </LinearGradient>

              <View style={[styles.order_box2]}>
                {/* content of box */}
                <View>
                  <View style={styles.textBox1}>
                    <Text style={styles.text22}>Payment</Text>
                    <Text style={styles.subText1}>
                      {/* {formatDate(item.pickup_date)} */}
                      View Bill
                    </Text>
                  </View>
                  <View style={styles.horizontalLine} />
                  <View style={styles.textBox1}>
                    <Text style={styles.text22}>Cash on Delivery</Text>
                    <Text style={styles.subText1}>
                      {/* {item.pickup_time} */}$ 140
                    </Text>
                  </View>
                  <View style={styles.horizontalLine} />
                  <View style={{height: SIZES.height * 0.05}} />
                  {/* <Button1
                     onPress={()=>navigation.navigate('OrderDetails')}
                     style={{
                       borderRadius: 50,
                       width: 170,
                       marginVertical: 20,
                     }}>
                     Invoice
                   </Button1> */}
                </View>
              </View>
            </View>
          </View>
        )}
        {active === 0 && (
          <Button1
            onPress={() => navigation.navigate('PaymentSuccess')}
            style={{
              borderRadius: 50,
              //    width: 170,
              marginVertical: 20,
            }}>
            Send
          </Button1>
        )}
        {active === 1 && (
          <Button1
            onPress={() => navigation.navigate('NewOrderRequest')}
            style={{
              borderRadius: 50,
              //    width: 170,
              marginVertical: 20,
            }}>
            Mark Picked Up
          </Button1>
        )}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
    loading: state.home.loading,

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)
// export default OrderDetails;
