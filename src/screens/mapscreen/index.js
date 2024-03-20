import {View, SafeAreaView, StatusBar} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';

const MapScreen = ({navigation, route}) => {
  const mapRef = useRef(null);

  const locations = [
    {
      latitude: 37.78825,
      longitude: -122.4324,
      title: 'Location 1',
      description: 'Description 1',
    },
    {
      latitude: 37.75825,
      longitude: -122.4624,
      title: 'Location 2',
      description: 'Description 2',
    },
  ];

  const focusMap = () => {
    if (locations.length === 0 || locations.length === 1) {
      // No or only one location, do nothing
      return;
    }

    const coordinates = locations.map(location => ({
      latitude: location.latitude,
      longitude: location.longitude,
    }));

    mapRef.current.fitToCoordinates(coordinates, {
      edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
      animated: true,
    });
  };

  const origin = {
    latitude: locations[0].latitude,
    longitude: locations[0].longitude,
  };
  const destination = {
    latitude: locations[1].latitude,
    longitude: locations[1].longitude,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <View style={{flex: 1}}>
        <MapView ref={mapRef} style={{flex: 1}} onLayout={focusMap}>
          {locations.map((location, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={location.title}
              description={location.description}
            />
          ))}

          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey="AIzaSyCyEktzf7E30JTYeKWqQWbmqYA0d2du9vY"
            strokeWidth={3}
            strokeColor="blue"
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;

// import React, {useState, useRef, useEffect} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Dimensions,
//   Image,
//   Platform,
// } from 'react-native';
// import MapView, {Marker, AnimatedRegion} from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
// import Geolocation from '@react-native-community/geolocation';

// const screen = Dimensions.get('window');
// const ASPECT_RATIO = screen.width / screen.height;
// const LATITUDE_DELTA = 0.04;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// const GOOGLE_MAP_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

// const MapScreen = ({navigation}) => {
//   const mapRef = useRef();
//   const markerRef = useRef();

//   const [state, setState] = useState({
//     curLoc: {
//       latitude: 22.747547,
//       longitude: 75.896081,
//     },
//     destinationCords: {
//       latitude: 22.729793,
//       longitude: 75.868971,
//     },
//     isLoading: false,
//     coordinate: new AnimatedRegion({
//       latitude: 22.747547,
//       longitude: 75.896081,
//       latitudeDelta: LATITUDE_DELTA,
//       longitudeDelta: LONGITUDE_DELTA,
//     }),
//     time: 0,
//     distance: 0,
//     heading: 0,
//   });

//   const {curLoc, time, distance, destinationCords, coordinate, heading} = state;
//   const updateState = data => setState(state => ({...state, ...data}));

//   useEffect(() => {
//     getLiveLocation();
//   }, []);

//   const getLiveLocation = async () => {
//     const locPermissionDenied = await locationPermission();
//     if (locPermissionDenied) {
//       const {latitude, longitude, heading} = await getCurrentLocation();
//       animate(latitude, longitude);
//       updateState({
//         heading: heading,
//         curLoc: {latitude, longitude},
//         coordinate: new AnimatedRegion({
//           latitude: latitude,
//           longitude: longitude,
//           latitudeDelta: LATITUDE_DELTA,
//           longitudeDelta: LONGITUDE_DELTA,
//         }),
//       });
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       getLiveLocation();
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   const animate = (latitude, longitude) => {
//     const newCoordinate = {latitude, longitude};
//     if (Platform.OS == 'android') {
//       if (markerRef.current) {
//         markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000);
//       }
//     } else {
//       coordinate.timing(newCoordinate).start();
//     }
//   };

//   const onCenter = () => {
//     mapRef.current.animateToRegion({
//       latitude: curLoc.latitude,
//       longitude: curLoc.longitude,
//       latitudeDelta: LATITUDE_DELTA,
//       longitudeDelta: LONGITUDE_DELTA,
//     });
//   };

//   const fetchTime = (d, t) => {
//     updateState({
//       distance: d,
//       time: t,
//     });
//   };

//   const getCurrentLocation = () =>
//     new Promise((resolve, reject) => {
//       Geolocation.getCurrentPosition(
//         position => {
//           const cords = {
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//             heading: position?.coords?.heading,
//           };
//           resolve(cords);
//         },
//         error => {
//           reject(error.message);
//         },
//         {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
//       );
//     });

//   const locationPermission = () =>
//     new Promise(async (resolve, reject) => {
//       if (Platform.OS === 'ios') {
//         try {
//           const permissionStatus = await Geolocation.requestAuthorization(
//             'whenInUse',
//           );
//           if (permissionStatus === 'granted') {
//             return resolve('granted');
//           }
//           reject('Permission not granted');
//         } catch (error) {
//           return reject(error);
//         }
//       }
//       return PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       )
//         .then(granted => {
//           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             resolve('granted');
//           }
//           return reject('Location Permission denied');
//         })
//         .catch(error => {
//           console.log('Ask Location permission error: ', error);
//           return reject(error);
//         });
//     });

//   return (
//     <View style={styles.container}>
//       {distance !== 0 && time !== 0 && (
//         <View style={{alignItems: 'center', marginVertical: 16}}>
//           <Text>Time left: {time.toFixed(0)} </Text>
//           <Text>Distance left: {distance.toFixed(0)}</Text>
//         </View>
//       )}
//       <View style={{flex: 1}}>
//         <MapView
//           ref={mapRef}
//           style={StyleSheet.absoluteFill}
//           initialRegion={{
//             ...curLoc,
//             latitudeDelta: LATITUDE_DELTA,
//             longitudeDelta: LONGITUDE_DELTA,
//           }}>
//           <Marker.Animated ref={markerRef} coordinate={coordinate}>
//             <Image
//               source={require('../../assets/images/bike.png')}
//               style={{
//                 width: 40,
//                 height: 40,
//                 transform: [{rotate: `${heading}deg`}],
//               }}
//               resizeMode="contain"
//             />
//           </Marker.Animated>

//           {Object.keys(destinationCords).length > 0 && (
//             <Marker coordinate={destinationCords} />
//           )}

//           {Object.keys(destinationCords).length > 0 && (
//             <MapViewDirections
//               origin={curLoc}
//               destination={destinationCords}
//               apikey={GOOGLE_MAP_KEY}
//               strokeWidth={6}
//               strokeColor="red"
//               optimizeWaypoints={true}
//               onStart={params => {
//                 console.log(
//                   `Started routing between "${params.origin}" and "${params.destination}"`,
//                 );
//               }}
//               onReady={result => {
//                 console.log(`Distance: ${result.distance} km`);
//                 console.log(`Duration: ${result.duration} min.`);
//                 fetchTime(result.distance, result.duration);
//                 // mapRef.current.fitToCoordinates(result.coordinates, {
//                 //   edgePadding: {},
//                 // });
//                 mapRef.current.fitToCoordinates(result.coordinates, {
//                   edgePadding: { top: 20, right: 20, bottom: 20, left: 20 },
//                 });

//               }}
//               onError={errorMessage => {
//                 console.log('GOT AN ERROR');
//               }}
//             />
//           )}
//         </MapView>
//         <TouchableOpacity
//           style={{
//             position: 'absolute',
//             bottom: 0,
//             right: 0,
//           }}
//           onPress={onCenter}>
//           <Text>image</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.bottomCard}>
//         <Text>Where are you going..?</Text>
//         <TouchableOpacity
//           onPress={() =>
//             navigation.navigate('chooseLocation', {getCordinates: fetchValue})
//           }
//           style={styles.inpuStyle}>
//           <Text>Choose your location</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   bottomCard: {
//     backgroundColor: 'white',
//     width: '100%',
//     padding: 30,
//     borderTopEndRadius: 24,
//     borderTopStartRadius: 24,
//   },
//   inpuStyle: {
//     backgroundColor: 'white',
//     borderRadius: 4,
//     borderWidth: 1,
//     alignItems: 'center',
//     height: 48,
//     justifyContent: 'center',
//     marginTop: 16,
//   },
// });

// export default MapScreen;
