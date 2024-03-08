import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, SIZES } from '../../constants'

export default StyleSheet.create({
    signup_btn: {
        // borderWidth: 1,
        alignItems: "flex-end",
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.black1,
    },

    signup_text: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        marginBottom: 0,
        color: COLORS.primary,
    },
    selectedGenderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SIZES.width * 0.035,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 7,
        width:150,
        justifyContent:'space-evenly'
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:5
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      genderOption: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
        alignItems: 'center',
      },

})
