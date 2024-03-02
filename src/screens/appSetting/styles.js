import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    width: SIZES.width * 0.94,
    gap:SIZES.width * 0.1,
    // maxHeight: SIZES.height * 0.3,
    // height: SIZES.height * 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: SIZES.height * 0.003,
    borderBottomColor: COLORS.gray10,
    justifyContent:'space-between'
  },
  startitem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  enditem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainImg: {
    width: SIZES.width * 0.056,
    height:SIZES.height * 0.055,
    // borderRadius: 10,
  },
  lastImg: {
    width: SIZES.width * 0.056,
    height:SIZES.height * 0.03,
    // borderRadius: 10,
  },
  starttext:{
   fontSize: SIZES.width * 0.046,
   color:COLORS.primary,
   marginLeft: SIZES.width * 0.046,
   fontWeight:'bold',
   marginVertical:SIZES.height * 0.03,
  },
  endtext:{
    fontSize: SIZES.width * 0.046,
    color:COLORS.primary,
    marginRight: SIZES.width * 0.046,
  }
});

export default styles;
