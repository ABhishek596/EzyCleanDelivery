import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  slide_main: {
    width: SIZES.width,
    alignItems: 'center',
    marginTop: SIZES.height * 0.10,
  },

  onBoarding_Img: {
    width: SIZES.width,
    height: SIZES.height * 0.4,
  },

  box: {
    width: SIZES.width,
    // height: SIZES.height * .27,
    alignItems: 'center',
    backgroundColor: COLORS.pink,
    borderTopLeftRadius: SIZES.width * 0.09,
    borderTopRightRadius: SIZES.width * 0.09,
    marginTop: SIZES.height * 0.03,
  },

  text_box: {
    width: SIZES.width * 0.9,
    alignItems: 'center',
  },

  title: {
    color: COLORS.primary,
    // fontSize: 24,
    fontSize: SIZES.width * 0.066,
    marginTop: SIZES.height * 0.03,
    textAlign: 'center',
    fontFamily: FONTS.bold,
    marginBottom: -6,
    fontWeight:'bold'
  },

  subtitle: {
    width: SIZES.width * 0.8,
    color: COLORS.primary,
    // fontSize: 16,
    fontSize: SIZES.width * 0.044,
    textAlign: 'center',
    fontFamily: FONTS.regular,
    marginBottom: -4,
    marginTop: SIZES.height * 0.02,
    marginBottom: SIZES.height * 0.03,
  },

  footer_main: {
    height: SIZES.height * 0.2,
    justifyContent: 'space-between',
    // paddingHorizontal: SIZES.width * .02,
    backgroundColor: COLORS.pink,
  },

  indicator_container: {
    marginTop: SIZES.height * 0.03,
    // backgroundColor: COLORS.pink
    // marginBottom: SIZES.height * .03,
  },

  Indicator_main_view: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  indicator: {
    height: SIZES.height * 0.012,
    width: SIZES.width * 0.024,
    borderRadius: SIZES.width * 0.03,
    backgroundColor: COLORS.gray40,
    marginHorizontal: 5,
  },

  btn_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width * 0.9,
    // marginBottom: SIZES.height * .03,
  },

  next_btn: {
    width: SIZES.width * 0.8,
    height: SIZES.height * 0.06,
    borderRadius: SIZES.height * 0.028,
    backgroundColor: COLORS.buttonColor,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },

  btn_text: {
    // fontSize: 15,
    fontSize: SIZES.width * 0.045,
    // marginBottom: -3,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },

  btn: {
    width: SIZES.width * 0.8,
    height: SIZES.height * 0.06,
    borderRadius: SIZES.height * 0.03,
    backgroundColor: COLORS.buttonColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Button_parent_view: {
    marginBottom: SIZES.height * 0.04,
    alignItems: 'center',
  },
});
