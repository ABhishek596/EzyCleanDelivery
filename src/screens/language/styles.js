import { StyleSheet, Dimensions } from "react-native";
import {COLORS, SIZES} from '../../constants';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1
    },
    starttext:{
        fontSize: SIZES.width * 0.046,
        color:COLORS.primary,
        marginLeft: SIZES.width * 0.046,
        fontWeight:'bold',
        marginVertical:SIZES.height * 0.03,   
    },
      centeredView: {
      flex: 1,
     
      alignItems: 'center',
      marginTop: 4,
      backgroundColor: COLORS.white,
    },
    modalView: {
      margin: 20,
      width: width - 20,
      // height: height / 2,
  
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
    },
    languageItem: {
      width: '45%',
      height: 100,
      borderRadius: 10,
      borderWidth: 0.5,
      marginTop: 10,
      paddingLeft: 10,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft:12
    },
    icon: {
      width: 24,
      height: 24,
      position:'absolute',
      right:10
    },
    btns: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
    btn1: {
      width: '40%',
      height: 50,
      borderWidth: 0.5,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn2: {
      width: '40%',
      height: 50,
      borderWidth: 0.5,
      borderRadius: 10,
      backgroundColor: '#4B68E9',
      justifyContent: 'center',
      alignItems: 'center',
    },
})