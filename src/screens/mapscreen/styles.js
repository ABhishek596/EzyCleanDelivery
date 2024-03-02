import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  // ========== header =================
  header_bg: {
    width: SIZES.width,
    // height: SIZES.height * .4,
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
  },
  readyHeading: {
    color: '#B70689',
    fontSize: 22,
    fontWeight: '700',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  header_row: {
    width: SIZES.width,
    height: SIZES.height * 0.14,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.height * 0.01,
    // borderWidth: 1,
  },

  back_btn: {
    width: SIZES.width * 0.1,
    height: SIZES.height * 0.05,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.width * 0.03,
  },

  title: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * 0.05,
    marginBottom: -4,
    color: COLORS.white,
  },
  locateBtn: {
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  locateTxt: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginHorizontal: 5,
  },
  locateme: {
    height: SIZES.height * 0.03,
    width: SIZES.width * 0.05,
    resizeMode: 'contain',
    tintColor: COLORS.primary,
  },
  user_row4: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: SIZES.height * 0.02,
    // backgroundColor: '#B70689',
    // paddingHorizontal: 20,
    marginHorizontal:  SIZES.width * 0.05,
    paddingVertical: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent:'space-between',
    height: SIZES.height * 0.1,
  },
  user_pic: {
    width: SIZES.width * 0.10,
    height: SIZES.width * 0.10,
    borderRadius: SIZES.width * 0.1,
    marginHorizontal: SIZES.width * 0.03,
  },
  user_pic1: {
    width: SIZES.width * 0.08,
    height: SIZES.width * 0.08,
    borderRadius: SIZES.width * 0.1,
    marginHorizontal: SIZES.width * 0.03,
  },
  cus_name: {
    fontFamily: FONTS.medium,
    color: COLORS.primary,
    fontSize: SIZES.width * 0.05,
    marginBottom: -5,
    fontWeight: '600',
  },
  subtitle: {
    fontFamily: FONTS.regular,
    color: COLORS.primary, 
    fontSize: SIZES.width * 0.034,
    // marginTop: -2,
  },
  order_box: {
    width: SIZES.width*1,
    backgroundColor: COLORS.white,
    // marginTop: SIZES.height * -0.045,
    // borderRadius: SIZES.width * 0.04,
    alignSelf: 'center',
    borderTopLeftRadius:  SIZES.width * 0.09,
    borderTopRightRadius:  SIZES.width * 0.09,
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SIZES.height * 0.02,
    width: SIZES.width * 0.85,
    alignSelf: 'center', // paddingHorizontal: 10,
  },
  text: {
    fontSize: SIZES.width * 0.05,
    fontWeight: '600',
    color: COLORS.primary,
  },
  subText5: {
    fontSize: SIZES.width * 0.045,
    fontWeight: '400',
    color: COLORS.primary,
    width: SIZES.width * 0.35,
  },
  horizontalLine: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 0.5,
    // width:SIZES.width * 0.85
  },

});
