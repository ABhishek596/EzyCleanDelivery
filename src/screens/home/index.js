import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {connect, useDispatch} from 'react-redux';
import styles from './styles';
import {COLORS, SIZES, images} from '../../constants';
import globalStyles from '../../styles/globalStyles';
// import Button1 from '../../component/button/Button1';
// import Loading from '../../component/loading';
// import { GetDailyReport } from '../../redux/actions/homeAction';
// import messaging from '@react-native-firebase/messaging';
// import { notificationListener } from '../../services/notification';
// import Geolocation from 'react-native-geolocation-service';
// import { CURRENT_LAT_LONG } from '../../redux/types';
// import {useIsFocused} from '@react-navigation/native';
import Icons from '../../component/Icons';
import LinearGradient from 'react-native-linear-gradient';
const Card = ({total, title, source, bgColor, style}) => {
  return (
    <View style={{...styles.card, style, backgroundColor: bgColor}}>
      <Image source={source} style={styles.card_image} resizeMode="contain" />
      <Text style={styles.card_total}>{total}</Text>
      <Text style={styles.card_title}>{title}</Text>
    </View>
  );
};

const Home = ({
  userData,
  navigation,
  notificationListener,
  // loading,
  GetDailyReport,
  dailyReport,
}) => {
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  console.log('userData!!!!!!!!!', userData);
  // messaging().setBackgroundMessageHandler(async remoteMessage => {
  //   GetAssignOrder()
  //   navigation?.navigate("Order")
  //   console.log('Message handled in the background!', remoteMessage);
  // });

  // messaging().getInitialNotification(async remoteMessage => {
  //   GetAssignOrder()
  //   navigation?.navigate("Order")
  //   console.log('Message handled in the background!', remoteMessage);
  // });

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     GetAssignOrder()
  //     // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // }, []);

  // console.log("orl status : ", orderStatusList)
  // console.log("userData order : ", userData?.profile_picture)
  // console.log('dailyReport : ', dailyReport);
  // const isFocus = useIsFocused();

  // useEffect(() => {
  //   if (isFocus) {
  //     GetDailyReport();
  //   }
  // }, [isFocus]);

  // const [locationCondition, setLocationCondition] = useState(false);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   permission();
  // }, []);

  // const permission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       Geolocation.getCurrentPosition(
  //         async position => {
  //           // console.log("current position : ", position)
  //           setLocationCondition(false);
  //           var NY = {
  //             lat: position.coords.latitude,
  //             lng: position.coords.longitude,
  //           };

  //           dispatch({
  //             type: CURRENT_LAT_LONG,
  //             payload: NY,
  //           });
  //         },
  //         error => {
  //           console.log('errol locat', error.code, error.message);
  //           setLocationCondition(true);
  //         },
  //         {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  //       );
  //     } else {
  //       setLocationCondition(true);
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  const navigateToOrder = value => {
    navigation.navigate('Order', {
      valuePassed: value,
    });
  };

  // const setActive = 1;
  // const setActiveb = 0;
  // const setActivec = 2;

  return (
    <View style={globalStyles.container}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />
      {/* <Loading loading={loading} /> */}
      {/* header */}
      {/* <View style={styles.header_bg}>
        <ImageBackground source={images.header_bg} style={styles.header_row}>
          <View style={styles.image_box}>
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
        </ImageBackground>

        <View style={styles.profile_box}>
          <Text style={styles.text}>Welcome Back</Text>
          <Text style={styles.user_name}>
            Hello {userData?.driver_details?.delivery_boy_name}
          </Text>
        </View>
      </View> */}
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
          <Text style={styles.text}>Welcome Back</Text>
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View>
          <Image source={images.home_banner} style={styles.banner} resizeMode='stretch' />
        </View> */}

        {/* today report container */}
        <View
        // style={{marginBottom: SIZES.height * .02,}}
        >
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 4}}
            colors={['#651098', '#2C0D8F' + 40]}
            style={{
              width: SIZES.width * 0.94,
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.width * 0.02,
            }}>
            <Text style={styles.title}>Our All Report</Text>
            <Icons
              name={'down-outline'}
              size={20}
              color={COLORS.white}
              style={{marginRight: SIZES.width * 0.03}}
            />
          </LinearGradient>
          <View style={styles.card_row}>
            <Card
              // total={dailyReport?.Today_All_Orders}
              total={90}
              title={'Total'}
              source={images.active}
              bgColor={'#838EFF'}
            />

            <TouchableOpacity onPress={() => navigateToOrder(0)}>
              <Card
                // total={dailyReport?.Total_Pending_Orders}
                total={25}
                // title={'New Order'}
                title={'Active'}
                source={images.upcoming}
                bgColor={'#FF9B9B'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.card_row}>
            <TouchableOpacity onPress={() => navigateToOrder(1)}>
              <Card
                // total={dailyReport?.Total_Active_Orders}
                total={20}
                title={'Pending'}
                source={images.pending}
                bgColor={'#CF9EFF'}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateToOrder(2)}>
              <Card
                // total={dailyReport?.Total_Complete_Orders}
                total={90}
                title={'Completed'}
                source={images.completed}
                bgColor={'#FFA876'}
              />
            </TouchableOpacity>
          </View>
          <View style={{height:SIZES.height * 0.02}}/>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.home.loading,
  userData: state.auth.userData,
  // dailyReport: state.home.dailyReport,
});

const mapDispatchToProps = {
  // GetDailyReport,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
