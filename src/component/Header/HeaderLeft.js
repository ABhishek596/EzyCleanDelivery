import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, icons, images, SIZES} from '../../constants';
import Icons from '../Icons';

const HeaderLeft = ({showBack, showNotificationButton, title, navigation}) => {
  return (
    <ImageBackground
      source={images.header_bg}
      style={styles.header}
      resizeMode="cover">
      <View style={styles.header_row}>
        <View style={styles.row}>
          {showBack && (
            <TouchableOpacity
              style={styles.back_btn}
              onPress={() => navigation?.goBack()}>
              <Icons name={'back'} size={22} color={COLORS.white} />
            </TouchableOpacity>
          )}
          <Text style={styles.title}>{title}</Text>
        </View>
        {showNotificationButton && (
          <TouchableOpacity
            style={styles.notification_btn}
            onPress={() => navigation.navigate('Notification')}>
            <Icons name={'notification_outline'} size={22} color={COLORS.primary} />
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

HeaderLeft.defaultProps = {
  onPress: null,
  title: null,
  showBack: true,
  showNotificationButton: false,
};

export default HeaderLeft;

const styles = StyleSheet.create({
  // ========== header =================
  header: {
    width: SIZES.width,
    height: SIZES.height * 0.24,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    tintColor: COLORS.primary,
    marginTop: SIZES.width * -0.04,
    // paddingVertical: SIZES.height * .03,
  },

  header_row: {
    width: SIZES.width * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.height * -0.03,
    // marginBottom: SIZES.height * .01,
    // borderWidth: 1,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  back_btn: {
    width: SIZES.width * 0.1,
    height: SIZES.height * 0.05,
    // borderWidth: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.width * 0.01,
  },

  notification_btn: {
    width: SIZES.width * 0.1,
    height: SIZES.width * 0.1,
    borderRadius: SIZES.width * 0.05,
    backgroundColor: COLORS.white,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top:3
  },

  title: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * 0.05,
    // marginBottom: -4,
    color: COLORS.white,
  },
});

// import {
//   Image,
//   ImageBackground,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';
// import {COLORS, FONTS, icons, images, SIZES} from '../../constants';
// import Icons from '../Icons';

// const HeaderLeft = ({title, navigation}) => {
//   return (
//     <View style={styles.header}>
//       <ImageBackground source={images.header_bg} style={styles.header_row}>
//         <TouchableOpacity
//           style={styles.back_btn}
//           onPress={() => navigation?.goBack()}>
//           <Icons name={'back'} size={22} color={COLORS.white} />
//         </TouchableOpacity>
//         <Text style={styles.title}>{title}</Text>
//       </ImageBackground>
//     </View>
//   );
// };

// HeaderLeft.defaultProps = {
//   onPress: null,
//   title: null,
// };

// export default HeaderLeft;

// const styles = StyleSheet.create({
//   // ========== header =================
//   header: {
//     width: SIZES.width,
//     height: SIZES.height * 0.24,
//     backgroundColor: COLORS.white,
//     // borderBottomLeftRadius: 20,
//     // borderBottomRightRadius: 20,
//     alignItems: 'center',
//     marginTop: SIZES.height * -0.025,
//   },

//   header_row: {
//     width: SIZES.width,
//     height: SIZES.height * 0.24,
//     flexDirection: 'row',
//     alignItems: 'center',

//     // justifyContent: 'space-between',
//     paddingHorizontal: SIZES.width * 0.03,
//     marginTop: SIZES.height * -0.01,
//   },

//   back_btn: {
//     width: SIZES.width * 0.1,
//     height: SIZES.height * 0.05,
//     // borderWidth: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: SIZES.width * 0.03,
//   },

//   title: {
//     fontFamily: FONTS.medium,
//     fontSize: SIZES.width * 0.05,
//     marginBottom: -4,
//     color: COLORS.white,
//   },
// });
