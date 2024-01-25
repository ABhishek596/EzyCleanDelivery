import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Button,
  ScrollView,
} from 'react-native';
import React, {useEffect, useRef, useState, memo} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import styles from './styles';
import {COLORS, SIZES, icons, images} from '../../constants';
import globalStyles from '../../styles/globalStyles';
import Button1 from '../../component/button/Button1';
// import Loading from '../../component/loading';
import LinearGradient from 'react-native-linear-gradient';
import {
  GetAssignOrder,
  GetCompletedOrder,
  UpdateOrderStatus,
} from '../../redux/actions/orderAction';
import Icons from '../../component/Icons';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import Modal from 'react-native-modal';
// import Input1 from '../../component/input/Input1';
import { RNToasty } from 'react-native-toasty';
// import { launchCamera } from 'react-native-image-picker';
import {useIsFocused} from '@react-navigation/native';

const Order = ({
  userData,
  navigation,
  loading,
  assignOrder,
  GetAssignOrder,
  GetCompletedOrder,
  completedOrder,
  orderStatusList,
  UpdateOrderStatus,
  route,
}) => {
  const [active, setActive] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [status, setStatus] = useState();
  const demoAssignOrder = [];
  const [clickedImage, setClickedImage] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [objData, setobjData] = useState(null);
  // console.log('first', objData.order_id);
  // console.log('first', objData.status);

  const isFocus = useIsFocused();
  const isFocused = useIsFocused();

  // const { valuePassed } = route.params;
  // console.log('valuePassed', valuePassed);
  // console.log('This is order list data=================', userData);

  // const setActiveFunctionc = route?.params?.setActiveFunctionc;
  // const setActiveFunction = route?.params?.setActiveFunction;
  // const setActiveFunctionb = route?.params?.setActiveFunctionb;

  const [setActiveFunctionc, setSetActiveFunctionc] = useState(
    route.params?.setActiveFunctionc,
  );
  const [setActiveFunction, setSetActiveFunction] = useState(
    route.params?.setActiveFunction,
  );
  const [setActiveFunctionb, setSetActiveFunctionb] = useState(
    route.params?.setActiveFunctionb,
  );

  const [postData, setPostData] = useState({
    did: '',
    orderid: '',
    bag_no: '',
    weight: '',
    note: '',
    multi_images: clickedImage,
    status: '',
  });

  // const handleChange = (name, value) => {
  //   setPostData({
  //     ...postData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = () => {
  //   if (postData?.bag_no && postData?.weight) {
  //     setModalVisible(false);
  //     UpdateOrderStatus(postData);
  //   } else {
  //     RNToasty.Error({
  //       title: 'Please fill bag no and weight',
  //     });
  //   }
  // };

  // function formatDate(inputDateStr) {
  //   // Create a Date object from the input string
  //   var inputDate = new Date(inputDateStr);

  // Define the month names
  //   var monthNames = [
  //     'Jan',
  //     'Feb',
  //     'Mar',
  //     'Apr',
  //     'May',
  //     'Jun',
  //     'Jul',
  //     'Aug',
  //     'Sep',
  //     'Oct',
  //     'Nov',
  //     'Dec',
  //   ];

  //   // Get the day, month, and year from the Date object
  //   var day = inputDate.getDate();
  //   var month = monthNames[inputDate.getMonth()];
  //   var year = inputDate.getFullYear();

  //   // Create the formatted date string
  //   var formattedDate = day + ' ' + month + ' ' + year;

  //   return formattedDate;
  // }

  // const selectPhotos = async () => {
  //   let options = {
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };
  //   launchCamera(options, res => {
  //     if (res.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (res.errorCode || res.errorMessage) {
  //       console.log(
  //         'ImagePicker Error: ',
  //         res.errorCode + ' ' + res.errorMessage,
  //       );
  //     } else if (res.customButton) {
  //       console.log('User tapped custom button: ', res.customButton);
  //     } else if (res.assets) {
  //       setClickedImage(prev => [...prev, ...res.assets]);
  //       setPostData({
  //         ...postData,
  //         multi_images: clickedImage,
  //       });
  //     }
  //   });
  // };

  // useEffect(() => {
  //   setPostData({
  //     ...postData,
  //     did: userData?.driver_details?.id,
  //     orderid: objData?.order_id,
  //     status: 4,
  //   });
  // }, [userData, clickedImage]);

  // useEffect(() => {
  //   // if (isFocus) {
  //   //   // Perform actions that you want to trigger on each navigation to this screen
  //   //   // For example, you can fetch data or perform other updates
  //   //   GetAssignOrder();
  //   //   GetCompletedOrder();
  //   // }
  //   GetAssignOrder();
  //   GetCompletedOrder();
  // }, [isFocus]);

  // useEffect(() => {
  //   // Listen for changes to route params when the screen is focused
  //   if (isFocused) {
  //     setSetActiveFunctionc(route.params?.setActiveFunctionc);
  //     setSetActiveFunction(route.params?.setActiveFunction);
  //     setSetActiveFunctionb(route.params?.setActiveFunctionb);
  //   }
  // }, [isFocused, route.params]);

  // const getStatusText = stat => {
  //   orderStatusList?.map(i => {
  //     console.log('this is i', i.Order_Status.id);
  //     if (i.Order_Status.id == stat) {
  //       console.log(
  //         'sdfnsdjkfsdfjsdjf gf dfg d gdf g dfg fdg dfg fdg dfg dfg dfg',
  //         i.Order_Status.label_for_delivery_boy,
  //       );
  //       return i.Order_Status.label_for_delivery_boy;
  //     }
  //   });
  // };

  //console.log('stattttttttttt', JSON.stringify(assignOrder[0]));   //temp clos

  const handleTabChange = newActive => {
    setActive(newActive);
  };

  // useEffect(() => {
  //   if (valuePassed === 0 || valuePassed === 1 || valuePassed === 2) {
  //     // Your code to be executed when valuePassed is 0, 1, or 2
  //     handleTabChange(valuePassed);
  //   }
  // }, [valuePassed]);

  // useEffect(() => {
  //   // Access the route parameter that contains the value (assuming it's named 'value')
  //   // const { setActiveFunction } = route.params;
  //   // console.log('setActiveFunction', setActiveFunction);
  //   if (valuePassed === 0) {
  //     // setActive(setActiveFunction); // Call the function when the value is 2    //pnd
  //     handleTabChange(valuePassed);
  //   }
  // }, []);

  // useEffect(() => {
  //   // Access the route parameter that contains the value (assuming it's named 'value')
  //   // const { setActiveFunction } = route.params;
  //   // console.log('setActiveFunction', setActiveFunction);
  //   if (valuePassed === 1) {
  //     // setActive(setActiveFunction); // Call the function when the value is 2    //pnd
  //     handleTabChange(valuePassed);
  //   }
  // }, []);

  // useEffect(() => {
  //   // Access the route parameter that contains the value (assuming it's named 'value')
  //   // const { setActiveFunction } = route.params;
  //   // console.log('setActiveFunction', setActiveFunction);
  //   if (valuePassed === 2) {
  //     // setActive(setActiveFunction); // Call the function when the value is 2    //pnd
  //     handleTabChange(valuePassed);
  //   }
  // }, []);

  // useEffect(() => {
  //   // Access the route parameter that contains the value (assuming it's named 'value')
  //   // const { setActiveFunctionc } = route.params;
  //   console.log('setActiveFunctionc', setActiveFunctionc);
  //   if (setActiveFunctionc) {
  //     // setActive(setActiveFunctionc); // Call the function when the value is 2    //comp
  //     handleTabChange(setActiveFunctionc);
  //   }
  // }, []);

  // useEffect(() => {
  //   // Access the route parameter that contains the value (assuming it's named 'value')
  //   // const { setActiveFunctionb } = route.params;
  //   console.log('setActiveFunctionb', setActiveFunctionb);

  //   if (setActiveFunctionb) {
  //     // setActive(setActiveFunctionb); // Call the function when the value is 2    //odr
  //     handleTabChange(setActiveFunctionb);
  //   }
  // }, []);

  return (
    <View style={globalStyles.container}>
      <StatusBar backgroundColor='transparent' barStyle="light-content"  translucent={true}/>
      {/* <Loading loading={loading} /> */}
      {/* header */}
      <View>
        {/* <ImageBackground source={images.header_bg} style={styles.header_row}> */}
        {/* <View style={styles.image_box}>
                        <Image source={userData?.profile_picture ? { uri: userData.profile_picture } : images.profile1} style={styles.profile}
                            resizeMode='stretch'
                        />
                    </View> */}

        {/* <TouchableOpacity style={styles.notification_btn}
                        onPress={() => navigation.navigate("Notification")}

                    >
                        <Icons name={"notification_outline"} size={22} color={COLORS.secondary} />
                    </TouchableOpacity> */}
        {/* </ImageBackground> */}

        {/* <View style={styles.profile_box}>
                    <Text style={styles.text}>Welcome Back</Text>
                    <Text style={styles.user_name}>Hello {userData?.driver_details?.delivery_boy_name}</Text>
                </View> */}

        {/* <View style={styles.btn_row}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.btn, active == 0 && {backgroundColor: COLORS.white}]}
            onPress={() => setActive(0)}>
            <Text
              style={[styles.btn_text, active == 0 && {color: COLORS.primary}]}>
              Assigned
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.btn, active == 1 && {backgroundColor: COLORS.white}]}
            onPress={() => setActive(1)}>
            <Text
              style={[styles.btn_text, active == 1 && {color: COLORS.primary}]}>
              Completed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.btn, active == 1 && {backgroundColor: COLORS.white}]}
            onPress={() => setActive(1)}>
            <Text
              style={[styles.btn_text, active == 1 && {color: COLORS.primary}]}>
              Completed
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
      <ImageBackground
        source={images.bg}
        style={styles.header_bg}
        resizeMode="contain">
        <View style={styles.header_row}>
          <View style={styles.logo_box}>
            <Image
              source={images.logo}
              style={styles.logo}
              resizeMode="center"
            />
          </View>
          <View style={globalStyles.row}>
            <View style={styles.image_box}>
              {/* <Image source={userData?.profile_picture?.slice(-10, -4) == "avatar" ? images.profile1 : { uri: userData.profile_picture }} style={styles.profile}
                  resizeMode='stretch' 
                /> */}
              <Image
                source={
                  userData?.profile_picture
                    ? {uri: userData.profile_picture}
                    : images.profile1
                }
                style={styles.profile}
                resizeMode="stretch"
              />
            </View>
            <TouchableOpacity
              style={styles.notification_btn}
              onPress={() => navigation.navigate('Notification')}>
              <Icons name={'notification_outline'} size={22} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.profile_box}>
          {/* <Text style={styles.user_name}>Hello {userData && (`${userData.name}`)}</Text> */}
          <Text style={styles.user_name}>
            Hello {userData?.delivery_boy_name}
          </Text>
          <Text style={styles.text1}>Welcome Back</Text>
        </View>

        {/* <TouchableOpacity style={styles.loc_btn}>
              <View style={styles.loc_box}>
                <Icons name={"location"} size={20} color={COLORS.white} />
              </View>
              <View style={styles.loc_row}>
                <View>
                  <Text style={styles.your_loc}>Your Location</Text>
                  <Text style={styles.loc_text}>643292 Weber Fork, Cruzcheater</Text>
                </View>
                <Icons name={"down-outline"} size={20} color={COLORS.black} />
              </View>
            </TouchableOpacity> */}
      </ImageBackground>
      <ScrollView>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#651098', '#2C0D8F']}
          style={styles.topBtnsContainer}>
          <TouchableOpacity
            onPress={() => handleTabChange(0)}
            style={active === 0 ? styles.activeBtn : styles.topBtns}>
            <Text style={active === 0 ? styles.activeBtnText : styles.btnText}>
              Assigned
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTabChange(1)}
            style={active === 1 ? styles.activeBtn : styles.topBtns}>
            <Text style={active === 1 ? styles.activeBtnText : styles.btnText}>
              Completed
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          colors={['#935DB7', '#6B56B1']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={[
            styles.user_row1,
            {
              marginVertical: SIZES.width * 0.02,
              marginTop: SIZES.height * 0.03,
            },
          ]}>
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
              {userData?.delivery_boy_name}
            </Text>
            <Text style={styles.subtitle}>Customer Name</Text>
          </View>
        </LinearGradient>

        <Text style={styles.mainheading}>Ready to Pickup</Text>

        {active === 0 && (
          // <FlatList
          //   data={assignOrder && assignOrder}
          //   renderItem={({item, index}) => {
          //     let address = item
          //       ? `${item?.Address_Details?.[0]?.address} ${item?.Address_Details?.[0]?.locality} ${item?.Address_Details?.[0]?.city} ${item?.Address_Details?.[0]?.state} ${item?.Address_Details?.[0]?.country} ${item?.Address_Details?.[0]?.pincode}`
          //       : null;
          //     //   console.log(item, 'item ');
          //     let quantity = 0;

          //     item.Item_Details?.forEach(element => {
          //       quantity += element.qty;
          //     });
          //     if (item.status == 2) {
          //       return (
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
                style={styles.user_row}>
                <Text
                  style={[styles.cus_name, {marginLeft: SIZES.width * 0.03}]}>
                  {/* {item.Customer_Details?.customer_name} */}
                  Order #Dty0010C5
                </Text>
                <Text style={[styles.subtitle, {fontSize: SIZES.width * 0.05}]}>
                  View
                </Text>
              </LinearGradient>

              <View style={[styles.order_box]}>
                {/* content of box */}
                <View>
                  <View style={styles.textBox}>
                    <Text style={styles.text}>Pickup Date</Text>
                    <Text style={styles.subText}>
                      {/* {formatDate(item.pickup_date)} */}
                      04/04/2023
                    </Text>
                  </View>
                  <View style={styles.horizontalLine} />
                  <View style={styles.textBox}>
                    <Text style={styles.text}>Pickup Time</Text>
                    <Text style={styles.subText}>
                      {/* {item.pickup_time} */}
                      04/04/2023
                    </Text>
                  </View>
                  <View style={styles.horizontalLine} />
                  <View style={styles.textBox}>
                    <Text style={styles.text}>Delivery Address</Text>
                    <Text style={styles.subText}>
                      {/* {address} */}
                      add add adddd 234/90
                    </Text>
                  </View>
                  <View style={styles.horizontalLine} />

                  <View style={styles.textBox}>
                    <Text style={styles.text}>Quantity</Text>
                    <Text style={styles.subText}>
                      {/* {formatDate(item.pickup_date)} */}
                      15 Items
                    </Text>
                  </View>
                  <View style={styles.horizontalLine} />

                  <View style={styles.textBox}>
                    <Text style={styles.text}>Total Amount</Text>
                    <Text style={styles.subText}>
                      {/* {formatDate(item.pickup_date)} */}$ 140
                    </Text>
                  </View>
                  <View style={[styles.horizontalLineEnd]} />
                  <Button1
                    onPress={() => navigation.navigate('OrderDetails')}
                    style={{
                      borderRadius: 50,
                      width: 170,
                      marginVertical: 20,
                    }}
                    style1={{
                      borderRadius: 50,
                      width: 170,
                      marginVertical: 20,
                    }}
                    >
                    Mark Pickup Up
                  </Button1>
                </View>
              </View>
            </View>
          </View>
          //     );
          //   }
          // }}
          //   key={item => item.id}
          //   showsVerticalScrollIndicator={false}
          // />
        )}

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
                style={styles.user_row}>
                <Text
                  style={[styles.cus_name, {marginLeft: SIZES.width * 0.03}]}>
                  {/* {item.Customer_Details?.customer_name} */}
                  Order #Dty0010C5
                </Text>
                <Text style={[styles.subtitle, {fontSize: SIZES.width * 0.05}]}>
                  View
                </Text>
              </LinearGradient>

              <View style={[styles.order_box]}>
                {/* content of box */}
                <View>
                  <View style={styles.textBox}>
                    <Text style={styles.text}>Pickup Date</Text>
                    <Text style={styles.subText}>
                      {/* {formatDate(item.pickup_date)} */}
                      04/04/2023
                    </Text>
                  </View>
                  <View style={styles.horizontalLine} />
                  <View style={styles.textBox}>
                    <Text style={styles.text}>Pickup Time</Text>
                    <Text style={styles.subText}>
                      {/* {item.pickup_time} */}
                      04/04/2023
                    </Text>
                  </View>
                  <View style={styles.horizontalLine} />
                  <View style={styles.textBox}>
                    <Text style={styles.text}>Delivery Address</Text>
                    <Text style={styles.subText}>
                      {/* {address} */}
                      add add adddd 234/90
                    </Text>
                  </View>
                  <View style={styles.horizontalLine} />

                  <View style={styles.textBox}>
                    <Text style={styles.text}>Quantity</Text>
                    <Text style={styles.subText}>
                      {/* {formatDate(item.pickup_date)} */}
                      15 Items
                    </Text>
                  </View>
                  <View style={styles.horizontalLine} />

                  <View style={styles.textBox}>
                    <Text style={styles.text}>Total Amount</Text>
                    <Text style={styles.subText}>
                      {/* {formatDate(item.pickup_date)} */}$ 140
                    </Text>
                  </View>
                  <View style={[styles.horizontalLineEnd]} />
                  <Button1
                    onPress={() => navigation.navigate('Invoice')}
                    style={{
                      borderRadius: 50,
                      width: 170,
                      marginVertical: 20,
                    }}
                    style1={{
                      borderRadius: 50,
                      width: 170,
                      marginVertical: 20,
                    }}
                    >
                    Invoice
                  </Button1>
                </View>
              </View>
            </View>
          </View>
        )}

        {/* order container */}

        {/* <Button1 style={styles.btn1}
                textStyle={styles.btn1_text}
                onPress={() => setModalVisible(true)}
            >
                Mark
            </Button1> */}
        {/* <Modal isVisible={isModalVisible}>
        <View style={styles.modalbox}>
          <Button1
            children="Mark Bag number and Weight"
            style={styles.modal_btn}
          />
          <TouchableOpacity
            style={styles.cancel_btn}
            activeOpacity={0.5}
            onPress={() => setModalVisible(false)}>
            <Icons
              name={'close'}
              size={SIZES.width * 0.05}
              color={COLORS.black}
            />
          </TouchableOpacity>

          <View>
            <Input1
              placeholder={'Bag Number'}
              onChangeText={text => handleChange('bag_no', text)}
              value={postData.bag_no}
              //   onFocus={() => setFieldTouched("name")}
              //   error={touched.name && errors.name}
              inputStyle={{ width: SIZES.width * 0.8 }}
            />
            <Input1
              placeholder={'Weight in Kg'}
              onChangeText={text => handleChange('weight', text)}
              value={postData.weight}
              keyboardType="numeric"
              // maxLength={10}
              //   onFocus={() => setFieldTouched("phone")}
              //   error={touched.phone && errors.phone}
              inputStyle={{ width: SIZES.width * 0.8 }}
            />
            <Input1
              placeholder={'Note'}
              onChangeText={text => handleChange('note', text)}
              value={postData.note}
              keyboardType="text"
              // maxLength={10}
              //   onFocus={() => setFieldTouched("phone")}
              //   error={touched.phone && errors.phone}
              inputStyle={{ width: SIZES.width * 0.8 }}
            />
            <TouchableOpacity
              onPress={selectPhotos}
              style={{ width: SIZES.width * 0.5, alignSelf: 'center' }}>
              <Text
                style={{
                  color: COLORS.primary,
                  fontWeight: '600',
                  textAlign: 'center',
                }}>
                Select Photos
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 10,
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginVertical: 10,
              }}>
              {clickedImage.map(item => {
                return (
                  <Image
                    source={{ uri: item?.uri }}
                    style={{ height: 50, width: 50, margin: 5 }}
                  />
                );
              })}
            </View>
            <Button1
              children="Mark"
              // onPress={() => setModalVisible(false)}
              onPress={() => handleSubmit()}
              // onPress={() => {BulkOrderApi(postData, (data) => setLoading(data)), setModalVisible(false)}}
              style={{
                marginVertical: SIZES.height * 0.02,
                width: SIZES.width * 0.5,
              }}
            />
          </View>
        </View>
      </Modal> */}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  assignOrder: state.order.assignOrder,
  completedOrder: state.order.completedOrder,
  loading: state.order.loading,
  userData: state.auth.userData,
  orderStatusList: state.order.orderStatusList,
});

const mapDispatchToProps = {
  UpdateOrderStatus,
  GetCompletedOrder,
  GetAssignOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Order));
// export default Order;
