import { Dimensions, StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'
const { width, height } = Dimensions.get("window")

export default StyleSheet.create({
    UploadDriverDocumentCont: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    indicatorMain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * .01,
        justifyContent: 'center'
    },
    horizontalLine: {
        width: width * .94,
        height: 1,
        backgroundColor: COLORS.gray20
    },
    dot: {
        width: width * .03,
        height: width * .03,
        backgroundColor: COLORS.gray20,
        borderRadius: 100
    },
    idTextMain: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around',
        // paddingHorizontal: width * .15,
        marginTop: height * .015
    },
    idDlText: {
        width: width * .25,
        color: COLORS.gray40,
        fontFamily: FONTS.medium,
        marginBottom: -3,
        textAlign: 'right',
    },



    // ==============adhar card===========
    adharCardPicTouch: {
        borderWidth: 1.7,
        borderColor: COLORS.primary,
        width: width * .44,
        height: height * .145,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    adharCardTouchMain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: height * .02
    },
    ownerText: {
        color: COLORS.gray80,
        fontFamily: FONTS.medium,
        fontSize: 17
    },
    cameraIcon: {
        width: width * .08,
        height: width * .08
    },
    sideText: {
        color: COLORS.primary,
        fontFamily: FONTS.medium,
    },
    adharImg: {
        width: width * .4,
        height: height * .13
    },




    // ============make========
    tipText: {
        color: COLORS.gray80,
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        marginTop: height * .06
    },
    makeText: {
        color: COLORS.gray40,
        fontFamily: FONTS.regular,
        fontSize: 13
    },


    // ==============dl===========
    panImg: {
        width: width * .15,
        height: height * .055,
        borderRadius: 10
    },

    // =========btn==========
    btnTouch: {
        width: width * .94,
        position: 'absolute',
        bottom: height * .02,
    },

    user_row2: {
        marginTop: 10,
        // flexDirection: 'row',
        alignItems: 'center',
        // marginVertical: SIZES.height * 0.02,
        // backgroundColor: '#B70689',
        // paddingHorizontal: 20,
        marginHorizontal:  SIZES.width * 0.03,
        paddingVertical: 10,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        // justifyContent:'space-between',
        height: SIZES.height * 0.075,
        width: SIZES.width * 0.94,
        alignSelf: 'center',
      },
      cus_name1: {
        fontFamily: FONTS.extraBold,
        color: COLORS.white,
        fontSize: SIZES.width * 0.05,
        // marginBottom: -5,
        fontWeight: '600',
        // alignSelf: 'center',
      },
      order_box2: {
        width: SIZES.width * 0.94,
        backgroundColor: '#FBCFFF80',
        // marginTop: SIZES.height * 0.02,
        // borderRadius: SIZES.width * 0.04,
        alignSelf: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      },
      subText1: {
        fontSize: SIZES.width * 0.045,
        fontWeight: '400',
        color: COLORS.primary,
        width: 150,
      },
      textBox1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
      },
      text22: {
        fontSize:  SIZES.width * 0.045,
        fontWeight: '600',
        color: COLORS.primary,
        alignSelf: 'center',
        paddingVertical: 15,
      },
      row1: {
        // maxWidth: SIZES.width * .54,
        // width: SIZES.width * 0.52,
        // maxHeight: SIZES.height * .3,
        // height: SIZES.height * .6,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:SIZES.width * -0.3,        // flexWrap: 'wrap',
        // marginTop: SIZES.height * .01,
        // borderWidth: 1,
        // backgroundColor: COLORS.black,
        marginHorizontal: 7
      },
      charge_row:{
        marginLeft:SIZES.width * 0.025,
      },
      label:{
        color: COLORS.primary,
        marginVertical:SIZES.height * .016,
        marginLeft:SIZES.width * 0.025,
      },
    

})