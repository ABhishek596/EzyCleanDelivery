import {
  ImageBackground,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  Linking,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icons from '../../component/Icons';
import styles from './styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import {connect} from 'react-redux';
import {COLORS, SIZES, images} from '../../constants';
import globalStyles from '../../styles/globalStyles';
import Button1 from '../../component/button/Button1';
import LinearGradient from 'react-native-linear-gradient';

const MapScreen = ({navigation, route}) => {
  const mapRef = useRef(null);
  // const {userCoords} = route.params;
  const [coordinates, setCoordinates] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const recenterToUserLocation = () => {
    mapRef.current.animateToRegion({
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      latitudeDelta: 0.0006,
      longitudeDelta: 0.0023,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            style={{width: SIZES.width, height: SIZES.height * 0.5}}
            onRegionChangeComplete={data => {
              console.log('Data', data);
            }}
            zoomTapEnabled={true}
            zoomEnabled={true}
            showsUserLocation={true}
            region={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
              latitudeDelta: 0.0006,
              longitudeDelta: 0.0023,
            }}>
            <Marker
              coordinate={coordinates}
              title={'User is Here'}
              description={'This is user location.'}
            />
          </MapView>

          {/* <TouchableOpacity
          onPress={recenterToUserLocation}
          activeOpacity={0.7}
          style={styles.locateBtn}>
          <Image source={icons.locateme} style={styles.locateme} />
          <Text style={styles.locateTxt}>LOCATE USER</Text>
        </TouchableOpacity> */}
          <View style={[styles.order_box]}>
            {/* content of box */}

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
                15:00 PM
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

            <View style={styles.user_row4}>
              <View style={{flexDirection: 'row'}}>
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
              </View>
              <Image
                // source={
                //   item.Customer_Image
                //     ? {uri: item.Customer_Image}
                //     : images.profile
                // }
                source={require('../../assets/icons/chat.png')}
                style={styles.user_pic1}
                resizeMode="contain"
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                gap: SIZES.width * 0.3,
                alignItems: 'center',
              }}>
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
                Order Pickup
              </Button1>
              <View>
                <Text
                  style={[
                    styles.subtitle,
                    {fontWeight: 'bold', alignSelf: 'flex-end'},
                  ]}>
                  $ 140
                </Text>
                <Text style={styles.subtitle}>Order Amount</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
