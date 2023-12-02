import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },

  imageBox: {
    width: SIZES.width * 0.7,
    height: SIZES.height * 0.28,
    alignItems: 'center',
    // borderWidth: 1,
    marginTop: SIZES.height * 0.06,
  },

  image: {
    width: SIZES.width * 0.7,
    height: SIZES.height * 0.3,
  },

  box: {
    width: SIZES.width * 0.9,
    alignItems: 'center',
    marginTop: SIZES.height * 0.02,
  },

  success_text: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.09,
    color: COLORS.success,
    marginBottom: SIZES.width * -0.025,
  },

  title: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.045,
    color: COLORS.primary,
    marginTop: SIZES.height * 0.01,
    // marginBottom: SIZES.height * .02,
  },

  text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * 0.038,
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: SIZES.height * 0.01,
    marginVertical: SIZES.height * 0.02,
  },

  blueText: {
    fontFamily: FONTS.semiBold,
    fontSize: 14,
    color: '#0F56CC',
    marginBottom: SIZES.height * 0.02,
  },

  price: {
    fontFamily: FONTS.semiBold,
    fontSize: 14,
    color: '#222222',
  },

  row: {
    // width: SIZES.width * .86,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderBottomWidth: 1,
    // borderBottomColor: '#E1E1E1',
  },

  line: {
    width: SIZES.width * 0.9,
    height: 1.5,
    backgroundColor: '#E1E1E1',
    marginVertical: SIZES.height * 0.02,
  },
  order_title: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.038,
    marginBottom: -4,
    // color: "#0A0909",
    color: COLORS.secondary,
  },

  order_text: {
    width: SIZES.width * 0.34,
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * 0.036,
    marginBottom: -4,
    color: COLORS.secondary,
  },

  btn: {
    width: SIZES.width * 0.34,
    height: SIZES.height * 0.056,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.width * 0.074,
    marginVertical: SIZES.height * 0.02,
    // borderWidth:2,
    // borderColor:COLORS.secondary
  },

  btn_text: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    fontSize: SIZES.width * 0.04,
    marginBottom: -4,
  },
});
