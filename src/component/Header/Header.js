import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, icons, images, SIZES} from '../../constants';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <ImageBackground
          source={require('../../assets/images/header_bg.png')}
          resizeMode="contain"
          style={styles.container}>
          <View style={styles.container}>
            <View style={styles.imageBox}>
              <Image
                source={icons.dryfinewlogo}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            {/* <Text style={styles.title}>Dryfi</Text> */}
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  //   container: {
  //     width: SIZES.width,
  //     // height: SIZES.height * .1,
  //     backgroundColor: COLORS.white,
  //     // borderBottomLeftRadius: 25,
  //     // borderBottomRightRadius: 25,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },

  //   imageBox: {
  //     width: SIZES.width,
  //     height: SIZES.height * 0.12,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     // borderWidth: 1,
  //   },

  //   image: {
  //     width: SIZES.width * 1.25,
  //     height: SIZES.height * 0.15,
  //   },

  //   title: {
  //     fontFamily: FONTS.bold,
  //     // fontSize: 22,
  //     fontSize: SIZES.width * 0.056,
  //     color: COLORS.white,
  //     marginTop: -3,
  //   },
  box: {
    backgroundColor: COLORS.white,
    marginTop: SIZES.height * -0.005,
  },
  container: {
    width: SIZES.width,
    height: SIZES.height * 0.24,
    // backgroundColor: COLORS.primary,
    // borderBottomLeftRadius: 25,
    // borderBottomRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:SIZES.height * -0.016,
  },

  imageBox: {
    // width: SIZES.width * .2,
    // height: SIZES.height * .1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    marginTop: SIZES.height * 0.03,
  },

  image: {
    width: SIZES.width * 0.18,
    height: SIZES.width * 0.18,
    tintColor: COLORS.white,
    // marginTop: SIZES.height * 0.05,
  },

  title: {
    fontFamily: FONTS.bold,
    // fontSize: 22,
    fontSize: SIZES.width * 0.056,
    color: COLORS.white,
    marginTop: -3,
  },
});
