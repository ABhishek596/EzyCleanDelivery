import React, {useEffect, useState} from 'react';
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
  TextInput,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';
// import Button1 from '../../component/button/Button1';
import {COLORS, SIZES, data, icons, images} from '../../constants';
// import Loading from '../../component/loading';
// import { connect } from 'react-redux';
import styles from './styles';
// import NoDataBox from '../../component/noDataBox';
// import {GetEarning} from '../../redux/actions/homeAction';

const Earning = ({navigation, loading, GetEarning}) => {
  const [refresh, setRefresh] = useState(false);
  // useEffect(() => {
  //   GetEarning();
  // }, []);

  return (
    <>
      <View style={globalStyles.container}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}
        />
        <View style={globalStyles.center}>
          {/* <Text style={styles.title}>Today</Text> */}
          <View style={styles.searchbar}>
            <Image
              // source={
              //   postData.driving_license
              //     ? {uri: postData.driving_license?.uri}
              //     : icons.dl
              // }
              source={require('../../assets/icons/search.png')}
              resizeMode="contain"
              style={[styles.panImg1, {marginLeft: 12}]}
            />
            <TextInput
              // style={styles.input}
              style={{marginLeft: SIZES.width * 0.03, width: SIZES.width * 0.7}}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Search Transactions"
              // keyboardType="numeric"
            />
          </View>
          {/* notification container */}

          <View>
            <FlatList
              data={earning && earning}
              renderItem={({item, index}) => (
                <View style={styles.box}>
                  <View style={styles.box_row}>
                    {/* <Image source={images.user1} style={styles.image} resizeMode='contain' /> */}
                    <View style={styles.text_box}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          // source={
                          //   postData.driving_license
                          //     ? {uri: postData.driving_license?.uri}
                          //     : icons.dl
                          // }
                          source={require('../../assets/images/user5.png')}
                          resizeMode="contain"
                          style={styles.panImg}
                        />
                        {/* <View></View> */}
                        <View style={{marginLeft: 7}}>
                          <Text style={styles.order_id}>
                            Order No {item.Order_No}
                          </Text>
                          <View style={styles.time_row}>
                            <Text style={styles.text}>
                              {item.Delivery_Date}
                            </Text>
                            <Text style={styles.text}>
                              {item.Delivery_Time}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <Text
                        style={[
                          styles.earning,
                          {marginLeft: SIZES.width * 0.1},
                        ]}>
                        Earned
                      </Text>
                    </View>
                  </View>
                  <View style={{alignItems: 'flex-end'}}>
                    <Text style={styles.amt}>${item.Total_Amount}</Text>
                    <Text style={styles.text}>Cash Collacted</Text>
                    <Text style={styles.earning}>
                      ${item.Earned ? item.Earned : 0}
                    </Text>
                  </View>
                </View>
              )}
              key={item => item.id}
              showsVerticalScrollIndicator={false}
              // refreshing={refresh}
              // onRefresh={() => setRefresh(!refresh)}
            />
          </View>
        </View>
      </View>
      {/* :
                    <NoDataBox title={"No Notification"} source={images.noNotification} />
            } */}
    </>
  );
};

// const mapStateToProps = (state) => ({
//   loading: state.home.loading,
//   earning: state.home.earning,
// })

// const mapDispatchToProps = {
//   GetEarning
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Earning)
export default Earning;

const earning = [
  {
    id: 1,
    Order_No: 'ABC123',
    Delivery_Date: '2023-11-27',
    Delivery_Time: '12:00 PM',
    Total_Amount: 50.0,
    Earned: 10.0,
  },
  {
    id: 2,
    Order_No: 'XYZ456',
    Delivery_Date: '2023-11-28',
    Delivery_Time: '3:00 PM',
    Total_Amount: 30.0,
    Earned: 7.5,
  },
  // Add more items as needed
];
