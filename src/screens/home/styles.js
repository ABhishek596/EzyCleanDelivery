import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  // ========== header =================
  header_bg: {
    width: SIZES.width,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    // overflow: 'hidden',
    alignItems: 'center',
    // paddingVertical: SIZES.height * 0.03,
    tintColor: COLORS.primary,
    height: SIZES.height * 0.34,
    // marginTop: SIZES.height * -0.028,
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

  notification_btn: {
    width: SIZES.width * 0.1,
    height: SIZES.width * 0.1,
    borderRadius: SIZES.width * 0.05,
    backgroundColor: COLORS.white,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ============= profile ==================
  profile_box: {
    width: SIZES.width * 0.9,
    // marginVertical: SIZES.height * .01,
  },

  image_box: {
    width: SIZES.width * 0.12,
    height: SIZES.height * 0.06,
    borderRadius: SIZES.width * 0.008,
    overflow: 'hidden',
    marginRight: SIZES.width * 0.03,
    backgroundColor: COLORS.light,
  },

  profile: {
    width: SIZES.width * 0.12,
    height: SIZES.height * 0.06,
    borderRadius: SIZES.width * 0.12,
  },

  user_name: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.074,
    // marginBottom: -5,
    color: COLORS.white,
    marginTop: SIZES.height * 0.015,
    fontWeight: 'bold',
  },

  text: {
    fontFamily: FONTS.regular,
    // fontSize: 12,
    fontSize: SIZES.width * 0.041,
    // marginBottom: -5,
    marginTop: SIZES.height * 0.008,
    color: COLORS.white,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.width * 0.05,
    // marginBottom: -5,
    color: COLORS.white,
    marginLeft: SIZES.width * 0.03,
    // marginTop: SIZES.height * .02,
    // marginBottom: SIZES.height * .003,
    marginVertical: SIZES.height * 0.02,
  },

  // ========= banner =============
  banner: {
    width: SIZES.width * 0.94,
    height: SIZES.height * 0.24,
    alignSelf: 'center',
    marginBottom: SIZES.height * 0.02,
  },

  // ============== card =============
  card_row: {
    width: SIZES.width * 0.94,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // flexWrap: 'wrap',
    alignSelf: 'center',
    // marginHorizontal:50
  },
  card: {
    width: SIZES.width * 0.45,
    height: SIZES.height * 0.2,
    backgroundColor: COLORS.white,
    elevation: 5,
    borderRadius: SIZES.width * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: SIZES.height * .025,
    marginTop: SIZES.height * 0.025,
  },

  card_image: {
    width: SIZES.width * 0.15,
    height: SIZES.width * 0.15,
    // borderWidth: 1,
    marginBottom: SIZES.height * 0.01,
  },

  card_total: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.045,
    marginBottom: -5,
    color: COLORS.white,
  },
  card_title: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.05,
    marginBottom: -5,
    color: COLORS.white,
  },
  logo: {
    width: SIZES.width * 0.2,
    height: SIZES.width * 0.2,
    // borderRadius: SIZES.width * 0.02,
    tintColor: COLORS.white,
    // marginLeft: SIZES.width * 0.0,
    // borderRadius: 8,
    // overflow: 'hidden',
    // marginBottom: SIZES.height * .015,
  },
});
