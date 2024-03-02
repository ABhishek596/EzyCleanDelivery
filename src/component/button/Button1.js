import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

const Button1 = ({
  backgroundColor,
  textStyle,
  loading,
  disabled,
  style,
  children,
  textColor,
  onPress,
  style1
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{...styles.btn, ...style, backgroundColor: backgroundColor}}
      onPress={onPress}
      disabled={disabled}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#651898', '#2C0D8F']}
        style={{...styles.btn, ...style1}}>
        {loading && (
          <ActivityIndicator
            color={COLORS.white}
            size={25}
            style={{marginRight: SIZES.width * 0.03}}
          />
        )}
        <Text style={{...styles.btn_text, ...textStyle, color: textColor}}>
          {children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

Button1.defaultProps = {
  backgroundColor: COLORS.buttonColor,
  style: null,
  textColor: COLORS.white,
  textStyle: null,
  children: null,
  onPress: null,
  disabled: false,
  loading: false,
};

export default Button1;

const styles = StyleSheet.create({
  btn: {
    width: SIZES.width * 0.94,
    height: SIZES.height * 0.065,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    // backgroundColor: COLORS.primary,
    borderRadius: SIZES.width * 0.06,
  },

  btn_text: {
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    fontSize: SIZES.width * 0.045,
    // marginBottom: -5,
  },
});
