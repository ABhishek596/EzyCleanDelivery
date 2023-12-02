import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import {COLORS, SIZES, images, FONTS} from '../../constants';
import Loading from '../../component/loading';
// import ServiceCard from '../../component/card/ServiceCard';
import LinearGradient from 'react-native-linear-gradient';

const Invoice = ({navigation, loading, categoryList}) => {
  // console.log("category data : ", categoryList)
  // const order = [1, 2, 3, 4]

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={globalStyles.container}>
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            barStyle="light-content"
          />
          <View style={globalStyles.center}>
            {/* category container */}
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={[styles.box, {marginTop: SIZES.height * 0.025}]}>
                <LinearGradient
                  colors={['#651898', '#2C0D8F']}
                  style={styles.box_header} // Your styles for the LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}>
                  <Text style={styles.order_id}>Billing Section</Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.cancel_btn}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/images/download.png')}
                    />
                  </TouchableOpacity>
                </LinearGradient>
                <View style={styles.order_row}>
                  <Text style={styles.order_title}>Reference No :-</Text>
                  <Text style={styles.order_text}>RHG12345678</Text>
                </View>
                <View style={styles.order_row}>
                  <Text style={styles.order_title}>Payment Date :-</Text>
                  <Text style={styles.order_text}>12/Jun/2023</Text>
                </View>

                <View style={styles.order_row}>
                  <Text style={styles.order_title}>Payment Time :-</Text>
                  <Text style={styles.order_text}>15:00 PM</Text>
                </View>
                {/* <Text style={styles.order_title3}>LAUNDRY</Text> */}
                <View style={styles.order_row}>
                  <Text style={styles.order_title}>Payment Method :-</Text>
                  <Text style={styles.order_text}>PhonePe</Text>
                </View>
                <View style={styles.order_row}>
                  <Text style={styles.order_title}>Sender Name :-</Text>
                  <Text style={styles.order_text}>Anmol Brass</Text>
                </View>
                <View style={styles.order_row}>
                  <Text style={styles.order_title}>Admin Fees :-</Text>
                  <Text style={styles.order_text}>$ 07</Text>
                </View>
                <View style={styles.order_row}>
                  <Text style={styles.order_title}>Payment Status :-</Text>
                  <Text style={styles.order_text}>Success</Text>
                </View>
                <View style={styles.order_row}>
                  <Text style={[styles.order_title, {fontWeight: 'bold'}]}>
                    Amount :-
                  </Text>
                  <Text style={[styles.order_text, {fontWeight: 'bold'}]}>
                    ₹ 800
                  </Text>
                </View>
                <View
                  style={{
                    height: SIZES.height * 0.007,
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.primary,
                    borderTopColor: COLORS.primary,
                    marginVertical: SIZES.height * 0.02,
                    width: SIZES.width * 1.0,
                  }}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      )}
    </>
  );
};

// const mapStateToProps = (state) => ({
//   loading: state.home.loading,
//   categoryList: state.home.categoryList,
// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)
export default Invoice;
