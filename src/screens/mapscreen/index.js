// import {
//   ImageBackground,
//   Text,
//   View,
//   SafeAreaView,
//   TouchableOpacity,
//   Image,
//   StatusBar,
//   Linking,
//   ScrollView,
// } from 'react-native';
// import React, {useRef, useState} from 'react';
// import Icons from '../../component/Icons';
// import styles from './styles';
// import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// // import {connect} from 'react-redux';
// import {COLORS, SIZES, images} from '../../constants';
// import globalStyles from '../../styles/globalStyles';
// import Button1 from '../../component/button/Button1';
// import LinearGradient from 'react-native-linear-gradient';
// import MapViewDirections from 'react-native-maps-directions';

// const MapScreen = ({navigation, route}) => {
//   const mapRef = useRef(null);
//   // const {userCoords} = route.params;
//   const [coordinates, setCoordinates] = useState({
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

//   //-------------------------------------------  animateToRegion  --------------------------
//   const recenterToUserLocation = () => {
//     mapRef.current.animateToRegion({
//       latitude: coordinates.latitude,
//       longitude: coordinates.longitude,
//       latitudeDelta: 0.0006,
//       longitudeDelta: 0.0023,
//     });
//   };
//   //-------------------------------------------  xx  ---------------------------------------

//   const origin = {latitude: 37.78825, longitude: -122.4324};
//   const destination = {latitude: 37.7749, longitude: -122.4194};

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar
//         backgroundColor="transparent"
//         barStyle="light-content"
//         translucent={true}
//       />
//       <View style={{flex: 1}}>
//         <ScrollView style={{flex: 1}}>
//           <MapView
//             ref={mapRef}
//             provider={PROVIDER_GOOGLE}
//             style={{width: SIZES.width, height: SIZES.height * 0.6}}
//             onRegionChangeComplete={data => {
//               console.log('Data', data);
//             }}
//             zoomTapEnabled={true}
//             zoomEnabled={true}
//             showsUserLocation={true}
//             region={{
//               latitude: coordinates.latitude,
//               longitude: coordinates.longitude,
//               latitudeDelta: 0.0006,
//               longitudeDelta: 0.0023,
//             }}>
//             {/* <Marker
//               coordinate={coordinates}
//               title={'User is Here'}
//               description={'This is user location.'}
//             /> */}
//             <Marker coordinate={origin} title="Your Location" />
//             <Marker coordinate={destination} title="Destination" />
//             <MapViewDirections
//               origin={origin}
//               destination={destination}
//               apikey="AIzaSyCyEktzf7E30JTYeKWqQWbmqYA0d2du9vY"
//               strokeWidth={3}
//               strokeColor="blue"
//             />
//           </MapView>

//           {/* <TouchableOpacity
//           onPress={recenterToUserLocation}
//           activeOpacity={0.7}
//           style={styles.locateBtn}>
//           <Image source={icons.locateme} style={styles.locateme} />
//           <Text style={styles.locateTxt}>LOCATE USER</Text>
//         </TouchableOpacity> */}
//           <View style={[styles.order_box]}>
//             {/* content of box */}

//             <View style={styles.textBox}>
//               <Text style={styles.text}>Pickup Date</Text>
//               <Text style={styles.subText5}>
//                 {/* {formatDate(item.pickup_date)} */}
//                 04/04/2023
//               </Text>
//             </View>
//             <View style={styles.horizontalLine} />
//             <View style={styles.textBox}>
//               <Text style={styles.text}>Pickup Time</Text>
//               <Text style={styles.subText5}>
//                 {/* {item.pickup_time} */}
//                 15:00 PM
//               </Text>
//             </View>
//             <View style={styles.horizontalLine} />
//             <View style={styles.textBox}>
//               <Text style={styles.text}>Pickup Address</Text>
//               <Text style={styles.subText5}>
//                 {/* {address} */}
//                 Shop no. 155 shehnai tent house, indore
//               </Text>
//             </View>
//             <View style={styles.horizontalLine} />

//             <View style={styles.user_row4}>
//               <View style={{flexDirection: 'row'}}>
//                 <Image
//                   // source={
//                   //   item.Customer_Image
//                   //     ? {uri: item.Customer_Image}
//                   //     : images.profile
//                   // }
//                   source={images.profile}
//                   style={styles.user_pic}
//                   resizeMode="contain"
//                 />
//                 <View>
//                   <Text style={styles.cus_name}>
//                     {/* {item.Customer_Details?.customer_name} */}
//                     Anmol Brass
//                   </Text>
//                   <Text style={styles.subtitle}>Order #Dty0010C5</Text>
//                 </View>
//               </View>
//               <Image
//                 // source={
//                 //   item.Customer_Image
//                 //     ? {uri: item.Customer_Image}
//                 //     : images.profile
//                 // }
//                 source={require('../../assets/icons/chat.png')}
//                 style={styles.user_pic1}
//                 resizeMode="contain"
//               />
//             </View>

//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignSelf: 'center',
//                 gap: SIZES.width * 0.3,
//                 alignItems: 'center',
//               }}>
//               <Button1
//                 // onPress={() => navigation.navigate('Invoice')}
//                 style={{
//                   borderRadius: 50,
//                   width: SIZES.width * 0.35,
//                   marginVertical: 20,
//                 }}
//                 style1={{
//                   borderRadius: 50,
//                   width: SIZES.width * 0.35,
//                   marginVertical: 20,
//                 }}>
//                 Order Pickup
//               </Button1>
//               <View>
//                 <Text
//                   style={[
//                     styles.subtitle,
//                     {fontWeight: 'bold', alignSelf: 'flex-end'},
//                   ]}>
//                   $ 140
//                 </Text>
//                 <Text style={styles.subtitle}>Order Amount</Text>
//               </View>
//             </View>
//           </View>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default MapScreen;

import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Platform,
} from 'react-native';
import MapView, {Marker, AnimatedRegion} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAP_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

const MapScreen = ({navigation}) => {
  const mapRef = useRef();
  const markerRef = useRef();

  const [state, setState] = useState({
    curLoc: {
      latitude: 22.747547,
      longitude: 75.896081,
    },
    destinationCords: {
      latitude: 22.729793,
      longitude: 75.868971,
    },
    isLoading: false,
    coordinate: new AnimatedRegion({
      latitude: 22.747547,
      longitude: 75.896081,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
    time: 0,
    distance: 0,
    heading: 0,
  });

  const {curLoc, time, distance, destinationCords, coordinate, heading} = state;
  const updateState = data => setState(state => ({...state, ...data}));

  useEffect(() => {
    getLiveLocation();
  }, []);

  const getLiveLocation = async () => {
    const locPermissionDenied = await locationPermission();
    if (locPermissionDenied) {
      const {latitude, longitude, heading} = await getCurrentLocation();
      animate(latitude, longitude);
      updateState({
        heading: heading,
        curLoc: {latitude, longitude},
        coordinate: new AnimatedRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }),
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getLiveLocation();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const animate = (latitude, longitude) => {
    const newCoordinate = {latitude, longitude};
    if (Platform.OS == 'android') {
      if (markerRef.current) {
        markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000);
      }
    } else {
      coordinate.timing(newCoordinate).start();
    }
  };

  const onCenter = () => {
    mapRef.current.animateToRegion({
      latitude: curLoc.latitude,
      longitude: curLoc.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  };

  const fetchTime = (d, t) => {
    updateState({
      distance: d,
      time: t,
    });
  };

  const getCurrentLocation = () =>
    new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          const cords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            heading: position?.coords?.heading,
          };
          resolve(cords);
        },
        error => {
          reject(error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    });

  const locationPermission = () =>
    new Promise(async (resolve, reject) => {
      if (Platform.OS === 'ios') {
        try {
          const permissionStatus = await Geolocation.requestAuthorization(
            'whenInUse',
          );
          if (permissionStatus === 'granted') {
            return resolve('granted');
          }
          reject('Permission not granted');
        } catch (error) {
          return reject(error);
        }
      }
      return PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      )
        .then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            resolve('granted');
          }
          return reject('Location Permission denied');
        })
        .catch(error => {
          console.log('Ask Location permission error: ', error);
          return reject(error);
        });
    });

  return (
    <View style={styles.container}>
      {distance !== 0 && time !== 0 && (
        <View style={{alignItems: 'center', marginVertical: 16}}>
          <Text>Time left: {time.toFixed(0)} </Text>
          <Text>Distance left: {distance.toFixed(0)}</Text>
        </View>
      )}
      <View style={{flex: 1}}>
        <MapView
          ref={mapRef}
          style={StyleSheet.absoluteFill}
          initialRegion={{
            ...curLoc,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>
          <Marker.Animated ref={markerRef} coordinate={coordinate}>
            <Image
              source={require('../../assets/images/bike.png')}
              style={{
                width: 40,
                height: 40,
                transform: [{rotate: `${heading}deg`}],
              }}
              resizeMode="contain"
            />
          </Marker.Animated>

          {Object.keys(destinationCords).length > 0 && (
            <Marker coordinate={destinationCords} />
          )}

          {Object.keys(destinationCords).length > 0 && (
            <MapViewDirections
              origin={curLoc}
              destination={destinationCords}
              apikey={GOOGLE_MAP_KEY}
              strokeWidth={6}
              strokeColor="red"
              optimizeWaypoints={true}
              onStart={params => {
                console.log(
                  `Started routing between "${params.origin}" and "${params.destination}"`,
                );
              }}
              onReady={result => {
                console.log(`Distance: ${result.distance} km`);
                console.log(`Duration: ${result.duration} min.`);
                fetchTime(result.distance, result.duration);
                // mapRef.current.fitToCoordinates(result.coordinates, {
                //   edgePadding: {},
                // });
                mapRef.current.fitToCoordinates(result.coordinates, {
                  edgePadding: { top: 20, right: 20, bottom: 20, left: 20 },
                });
                
              }}
              onError={errorMessage => {
                console.log('GOT AN ERROR');
              }}
            />
          )}
        </MapView>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
          onPress={onCenter}>
          <Text>image</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomCard}>
        <Text>Where are you going..?</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('chooseLocation', {getCordinates: fetchValue})
          }
          style={styles.inpuStyle}>
          <Text>Choose your location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bottomCard: {
    backgroundColor: 'white',
    width: '100%',
    padding: 30,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
  },
  inpuStyle: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    marginTop: 16,
  },
});

export default MapScreen;
