import React, {useEffect} from 'react';
import {
  View,
  Button,
  PermissionsAndroid,
  Platform,
  StatusBar,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import Button1 from '../../component/button/Button1';
import {COLORS, SIZES, data, icons, images} from '../../constants';
import Loading from '../../component/loading';
// import { connect } from 'react-redux';
import styles from './styles';
// import { GetAllNotification } from '../../redux/actions/notificationAction';
import NoDataBox from '../../component/noDataBox';

const Notification = ({
  navigation,
  loading,
  route,
  //   notification,
  GetAllNotification,
}) => {
  // useEffect(() => {
  //     GetAllNotification()
  // }, [])
  // console.log("notification page route : ", route.params?.data)

  //     A new FCM message arrived! {"collapseKey": "com.com.ezyclean.delivery", "data": {}, "from": "201510619050", "messageId": "0:1687614429432870%d3ba1b0fd3ba1b0f", "notification": {"android": {}, "body": "Order No. : 00057
  //  Booked By : Sumit
  //  Address: Santi nagar, Karond, Bhopal, Madhya Pradesh(India) , 686885
  //  Pickup Date & Time: 07-06-2023 10:00 AM
  //  Delivery Date & Time: 10-06-2023 05:00 PM
  //  Total Pay Amount : 1200", "title": "Order Assigned Successfully"}, "sentTime": 1687614429415, "ttl": 2419200}
  return (
    <>
      {loading ? (
        <Loading />
      ) : notification && notification[0] ? (
        <View style={globalStyles.container}>
          <StatusBar
            backgroundColor="transparent"
            barStyle="light-content"
            translucent={true}
          />
          <View style={globalStyles.center}>
            {/* <Text style={styles.title}>Today</Text> */}

            {/* notification container */}

            <View>
              <FlatList
                data={notification}
                renderItem={({item, index}) => (
                  <View style={styles.box}>
                    <Image
                      source={images.user1}
                      style={styles.image}
                      resizeMode="contain"
                    />
                    <View style={styles.text_box}>
                      <Text style={styles.service_text}>
                        {item.message?.length > 10
                          ? item.message?.slice(0) + '...'
                          : item.message}
                      </Text>
                      <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.view_btn}>
                        <Text style={styles.view_text}>View Details</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                key={item => item.id}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      ) : (
        <NoDataBox title={'No Notification'} source={images.noNotification} />
      )}
    </>
  );
};

// const mapStateToProps = (state) => ({
//     loading: state.notification.loading,
//     notification: state.notification.notification,
// })

// const mapDispatchToProps = {
//     GetAllNotification,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Notification)
export default Notification;

const notification = [
  {
    id: 1,
    message: `A convenient laundry solution that help protect the environment...`,
    image: require('../../assets/images/user1.png'), // You need to provide the actual image path
  },
  {
    id: 2,
    message:
      't has survived not only five centuries, but also the leap into...',
    image: require('../../assets/images/user2.png'), // You need to provide the actual image path
  },
  {
    id: 3,
    message: 'Many desktop publishing packages and web page editors now use',
    image: require('../../assets/images/user3.png'), // You need to provide the actual image path
  },
  // Add more notifications as needed
];
