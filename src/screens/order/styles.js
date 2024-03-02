import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  // ========== header =================
  header_bg: {
    width: SIZES.width,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    paddingVertical: SIZES.height * 0.03,
    tintColor: COLORS.primary,
    height: SIZES.height * 0.37,
    marginTop: SIZES.height * -0.03,
    // alignSelf:'center'
  },

  header_row: {
    width: SIZES.width,
    height: SIZES.height * 0.14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.height * 0.02,
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

  // ============= profile ==================
  profile_box: {
    width: SIZES.width * 0.9,
    marginVertical: SIZES.height * 0.01,
  },

  image_box: {
    width: SIZES.width * 0.12,
    height: SIZES.width * 0.12,
    borderRadius: 180/2,
    overflow: 'hidden',
    marginRight: SIZES.width * 0.03,
    backgroundColor: COLORS.light,
  },

  profile: {
    width: SIZES.width * 0.12,
    height: SIZES.width * 0.12,
    borderRadius: 180/2,
  },

  user_name: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.056,
    marginBottom: -5,
    color: COLORS.white,
  },

  text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * 0.031,
    marginBottom: -5,
    color: COLORS.white,
  },

  // ============== button ================
  btn_row: {
    width: SIZES.width * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: COLORS.light,
    borderRadius: SIZES.height * 0.06,
    padding: SIZES.width * 0.01,
    marginTop: SIZES.height * 0.01,
    marginBottom: SIZES.height * 0.03,
  },

  btn: {
    width: SIZES.width * 0.43,
    height: SIZES.height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.height * 0.06,
  },

  btn_text: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    fontSize: SIZES.width * 0.041,
    marginBottom: -5,
  },

  //   ================= order container ===========
  order_box: {
    width: SIZES.width * 0.94,
    backgroundColor: '#FBCFFF80',
    // marginTop: SIZES.height * 0.02,
    // borderRadius: SIZES.width * 0.04,
    alignSelf: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  user_row: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: SIZES.height * 0.02,
    // backgroundColor: '#B70689',
    // paddingHorizontal: 20,
    marginHorizontal:  SIZES.width * 0.03,
    paddingVertical: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent:'space-between',
    height: SIZES.height * 0.1,

  },
  user_row1: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: SIZES.height * 0.02,
    // backgroundColor: '#B70689',
    // paddingHorizontal: 20,
    marginHorizontal: SIZES.width * 0.03,
    paddingVertical: 10,
    borderRadius: SIZES.width * 0.02,
    // borderTopRightRadius: 30,
    // borderTopLeftRadius: 30,
  },
  user_pic: {
    width: SIZES.width * 0.12,
    height: SIZES.width * 0.12,
    borderRadius: SIZES.width * 0.1,
    marginHorizontal: SIZES.width * 0.03,
  },
  cus_name: {
    fontFamily: FONTS.extraBold,
    color: COLORS.white,
    fontSize: SIZES.width * 0.05,
    // marginBottom: -5,
    fontWeight: '600',
   
  },
  success_cus_name: {
    fontFamily: FONTS.medium,
    color: COLORS.primary,
    fontSize: SIZES.width * 0.05,
    marginBottom: -5,
    fontWeight: '600',
  },

  subtitle: {
    fontFamily: FONTS.regular,
    color: COLORS.white,
    fontSize: SIZES.width * 0.034,
    marginTop: -2,
    marginRight: SIZES.width * 0.05,
  },
  order_row: {
    width: SIZES.width * 0.84,
    flexDirection: 'row',
    // alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZES.height * 0.01,
  },
  order_id: {
    fontFamily: FONTS.medium,
    color: COLORS.black,
    fontSize: SIZES.width * 0.042,
    marginTop: SIZES.height * 0.02,
    marginBottom: SIZES.height * 0.01,
    marginLeft: SIZES.width * 0.03,
  },
  key: {
    fontFamily: FONTS.medium,
    color: COLORS.black,
    fontSize: SIZES.width * 0.038,
    marginBottom: -5,
  },
  price: {
    fontFamily: FONTS.semiBold,
    color: COLORS.black,
    fontSize: SIZES.width * 0.036,
    marginBottom: -5,
  },
  value: {
    width: SIZES.width * 0.4,
    fontFamily: FONTS.regular,
    color: COLORS.black,
    fontSize: SIZES.width * 0.034,
    marginBottom: -4,
  },
  pick_btn: {
    height: SIZES.height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },

  pick_btn_text: {
    fontFamily: FONTS.semiBold,
    color: COLORS.secondary,
    fontSize: SIZES.width * 0.042,
    marginBottom: -5,
  },
  btn1: {
    width: SIZES.width * 0.7,
    alignSelf: 'center',
    marginBottom: SIZES.height * 0.02,
  },
  btn1_text: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    fontSize: SIZES.width * 0.038,
    marginBottom: -4,
  },
  view_btn: {
    width: SIZES.width * 0.7,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1.2,
    borderColor: COLORS.secondary,
    marginVertical: SIZES.height * 0.02,
  },
  view_text: {
    fontFamily: FONTS.medium,
    color: COLORS.secondary,
    fontSize: SIZES.width * 0.038,
    marginBottom: -4,
  },

  // modal
  modalbox: {
    // borderWidth: 2,
    // borderColor: COLORS.primary,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  space_row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: SIZES.height * 0.02,
  },
  modal_btn: {
    width: SIZES.width * 0.9,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: SIZES.height * 0.02,
  },
  cancel_btn: {
    position: 'absolute',
    top: SIZES.height * -0.018,
    right: SIZES.width * -0.025,
    width: SIZES.width * 0.1,
    height: SIZES.width * 0.1,
    borderRadius: SIZES.width * 0.06,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
  },
  text: {
    fontSize: SIZES.width * 0.047,
    fontWeight: '600',
    color: COLORS.primary,
  },
  text1: {
    fontFamily: FONTS.regular,
    // fontSize: 12,
    fontSize: SIZES.width * 0.041,
    // marginBottom: -5,
    marginTop: SIZES.height * 0.008,
    color: COLORS.white,
  },
  subText: {
    fontSize: SIZES.width * 0.047,
    fontWeight: '400',
    color: COLORS.primary,
    width: 150,
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  horizontalLine: {
    borderBottomColor: '#3B319E',
    borderBottomWidth: 0.5,
  },
  horizontalLineEnd: {
    borderBottomColor: '#3B319E',
    borderBottomWidth: 0.5,
    marginBottom: 20,
  },
  orderCompleted: {
    fontSize: 22,
    color: '#24A271',
    fontWeight: '600',
    marginVertical: 15,
    textAlign: 'center',
  },
  orderId: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  topBtnsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
    backgroundColor: COLORS.primary,
    width: '95%',
    alignSelf:'center',
    borderRadius: SIZES.width * 0.03,
    // paddingHorizontal: 20,
  },
  topBtns: {
    // backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    border: 2,
    // borderWidth: 2,
    // borderColor: COLORS.primary,
    marginTop: 10,
    marginBottom: 10,
  },
  activeBtn: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    border: 2,
    // borderWidth: 2,
    // borderColor: COLORS.primary,
    marginTop: 10,
    marginBottom: 10,
  },
  activeBtnText: {
    fontSize: 18,
    color: COLORS.primary,
    fontWeight: '600',
  },

  btnText: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: '600',
  },
  totalText: {
    fontWeight: '700',
    fontSize: 18,
    color: COLORS.primary,
  },
  logo:{
  width: SIZES.width * 0.2,
  height: SIZES.width * 0.2,
  // borderRadius: SIZES.width * 0.02,
  tintColor: COLORS.white,
  },
  notification_btn: {
    width: SIZES.width * 0.1,
    height: SIZES.width * 0.1,
    borderRadius: SIZES.width * 0.05,
    backgroundColor: COLORS.white,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainheading:{
    fontSize: SIZES.width * 0.05,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginLeft: SIZES.width * 0.03,
    marginTop:SIZES.height * 0.02,
  }
});
