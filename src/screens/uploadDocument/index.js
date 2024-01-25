import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import {COLORS, SIZES, icons} from '../../constants';
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';
// import { BottomSheet } from 'react-native-btr';
import Button1 from '../../component/button/Button1';
import {UploadDocumentApi} from '../../redux/actions/authActions';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';

const {width, height} = Dimensions.get('window');

const UploadDocument = ({navigation, UploadDocumentApi}) => {
  const [loading, setLoading] = useState(false);
  const [conditionState, setConditionState] = useState('ID');

  const [postData, setPostData] = useState({
    aadhar_front: null,
    aadhar_back: null,
    pan_card: null,
    driving_license: null,
    id:1,
    account_no: null,
    bank_name: null,
    ifsc_code: null,
  });

  const FeatureRow = ({title, onValueChange, value, colorCode, price}) => {
    return (
      <View style={styles.row1}>
        {/* {colorCode && (
          <View
            style={[styles.color_box, colorCode && {backgroundColor: colorCode}]}
          />
        )} */}
        <CheckBox
          value={value}
          onValueChange={onValueChange}
          tintColors={{true: COLORS.primary, false: COLORS.primary}}
          style={styles.checkBox}
        />
        <View style={styles.charge_row}>
          <Text style={styles.label}>{title}</Text>
          {/* {price && <Text style={styles.charges}>(₹{price})</Text>} */}
        </View>
      </View>
    );
  };

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const ImagePick = name => {
    ImagePicker.openPicker({
      width: width * 0.4,
      height: height * 0.13,
      cropping: true,
    }).then(image => {
      // setImg(image.path)
      // setFirstImg(image.path)
      handleChange(name, {
        uri: image.path,
        name: image.filename || Date.now() + '-' + image.path.slice(-10),
        type: image.mime,
      });
    });
  };

  const ImagePick2 = name => {
    ImagePicker.openPicker({
      width: width * 0.65,
      height: height * 0.2,
      cropping: true,
    }).then(image => {
      handleChange(name, {
        uri: image.path,
        name: image.filename || Date.now() + '-' + image.path.slice(-10),
        type: image.mime,
      });
    });
  };

  const handleSubmit = () => {
    navigation.navigate('BankDetails');
    // if (postData.aadhar_back && postData.aadhar_front && postData.driving_license && postData.pan_card) {
    //     UploadDocumentApi(postData, navigation, (data) => setLoading(data))
    //     // setConditionState("DL")
    // }
  };
  return (
    <View style={styles.UploadDriverDocumentCont}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      {/* <View style={styles.idTextMain} >
                <Text style={[styles.idDlText,]}>ID</Text>
                <Text style={[styles.idDlText, { marginLeft: width * .03 }]}>DL</Text>
                <Text style={[styles.idDlText, { marginLeft: width * .04 }]}>PAN</Text>
            </View> */}
      {/* <View style={styles.indicatorMain}>
                <View style={[styles.horizontalLine, { backgroundColor: COLORS.primary }]} />
                <View style={[styles.dot, { backgroundColor: COLORS.primary }]} />
                <View style={[styles.horizontalLine, (conditionState == 'DL' || conditionState == 'PAN') && { backgroundColor: COLORS.primary }]} />
                <View style={[styles.dot, (conditionState == 'DL' || conditionState == 'PAN') && { backgroundColor: COLORS.primary }]} />
                <View style={[styles.horizontalLine, conditionState == 'PAN' && { backgroundColor: COLORS.primary }]} />
                <View style={[styles.dot, conditionState == 'PAN' && { backgroundColor: COLORS.primary }]} />
                <View style={styles.horizontalLine} />
            </View> */}

      <View style={{alignItems: 'center', marginTop: height * 0.05}}>
        <View style={{width: width * 0.93}}>
          {conditionState == 'ID' ? (
            <>
              <View style={{marginVertical: 10}}>
                <LinearGradient
                  colors={['#935DB7', '#6B56B1']}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 0.5}}
                  style={styles.user_row2}>
                  <Text
                    style={[
                      styles.cus_name1,
                      {marginLeft: SIZES.width * 0.03},
                    ]}>
                    {/* {item.Customer_Details?.customer_name} */}
                    Join Laundry and {'\n'}Start Earning Now
                  </Text>
                  {/* <Text style={[styles.subtitle, {fontSize: SIZES.width * 0.05}]}>
                  View
                </Text> */}
                </LinearGradient>

                <View style={[styles.order_box2]}>
                  {/* content of box */}
                  <View>
                    <View>
                      <Text style={styles.text22}>
                        Keep the following documents ready
                      </Text>
                    </View>
                    <View style={styles.horizontalLine} />
                    {/* <View style={styles.textBox1}>
                <Text style={styles.text22}>Cash on Delivery</Text>
                <Text style={styles.subText1}>
                 {item.pickup_time} $ 140
                </Text>
                </View> */}
                    {/* <View style={styles.horizontalLine} /> */}
                    <View style={{marginTop: SIZES.height * 0.02}}>
                      {damageList && (
                        <FlatList
                          data={damageList}
                          renderItem={({item, index}) => (
                            <FeatureRow
                              title={item.damage}
                              value={postData.damage_id == item ? true : false}
                              onValueChange={() => handleChange('damage_id', item)}
                            />
                          )}
                          key={item => item.id}
                          showsVerticalScrollIndicator={false}
                        />
                      )}
                    </View>
                    <View style={{height: 50}} />
                    {/* <Button1
                     onPress={()=>navigation.navigate('OrderDetails')}
                     style={{
                       borderRadius: 50,
                       width: 170,
                       marginVertical: 20,
                     }}>
                     Invoice
                   </Button1> */}
                  </View>
                </View>
              </View>
              {/* <Text style={styles.ownerText}>Owner Aadhar card</Text>
                  <View style={styles.adharCardTouchMain}>
                      <TouchableOpacity style={styles.adharCardPicTouch}
                          activeOpacity={0.3}
                          onPress={() => ImagePick("aadhar_front")}
                      >
                          {postData.aadhar_front ?
                              <Image source={{ uri: postData.aadhar_front?.uri }} resizeMode='contain' style={styles.adharImg} />
                              :
                              <View style={{ alignItems: 'center' }}>
                                  <Image source={icons.camera} resizeMode='contain' style={styles.cameraIcon} />
                                  <Text style={styles.sideText}>Front side</Text>
                              </View>
                          }
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.adharCardPicTouch}
                          activeOpacity={0.3}
                          onPress={() => ImagePick("aadhar_back")}
                      >
                          {postData.aadhar_back ?
                              <Image source={{ uri: postData.aadhar_back.uri }} resizeMode='contain' style={styles.adharImg} />
                              :
                              <View style={{ alignItems: 'center' }}>
                                  <Image source={icons.camera} resizeMode='contain' style={styles.cameraIcon} />
                                  <Text style={styles.sideText}>Back side</Text>
                              </View>
                          }
                      </TouchableOpacity>
                  </View> */}
            </>
          ) : conditionState == 'DL' ? (
            <>
              <View style={{marginVertical: 10}}>
                <LinearGradient
                  colors={['#935DB7', '#6B56B1']}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 0.5}}
                  style={[styles.user_row2, {height: SIZES.height * 0.075}]}>
                  <Text
                    style={[
                      styles.cus_name1,
                      {marginLeft: SIZES.width * 0.03},
                    ]}>
                    {/* {item.Customer_Details?.customer_name} */}
                    Enter PAN card details
                  </Text>
                  {/* <Text style={[styles.subtitle, {fontSize: SIZES.width * 0.05}]}>
                  View
                </Text> */}
                </LinearGradient>

                <View style={[styles.order_box2]}>
                  {/* content of box */}
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 13,
                      }}>
                      <Image
                        // source={
                        //   postData.driving_license
                        //     ? {uri: postData.driving_license?.uri}
                        //     : icons.dl
                        // }
                        source={require('../../assets/icons/pan-card.png')}
                        resizeMode="contain"
                        style={styles.panImg}
                      />

                      <Text style={[styles.text22, {marginLeft: 15}]}>
                        Front side of PAN card
                      </Text>
                    </View>
                    <View style={styles.horizontalLine} />
                    {/* <View style={styles.textBox1}>
                    <Text style={styles.text22}>Cash on Delivery</Text>
                    <Text style={styles.subText1}>
                      {item.pickup_time} $ 140
                    </Text>
                    </View> */}
                    {/* <View style={styles.horizontalLine} /> */}
                    <View style={{marginTop: SIZES.height * 0.02}}>
                      <View style={styles.row1}>
                        {/* {colorCode && (
                            <View
                            style={[styles.color_box, colorCode && {backgroundColor: colorCode}]}
                            />
                             )} */}
                        <CheckBox
                          value={value}
                          onValueChange={onValueChange}
                          tintColors={{
                            true: COLORS.primary,
                            false: COLORS.primary,
                          }}
                          style={styles.checkBox}
                        />
                        <View style={styles.charge_row}>
                          <Text style={styles.label}>
                            I don’t have PAN card
                          </Text>
                          {/* {price && <Text style={styles.charges}>(₹{price})</Text>} */}
                        </View>
                      </View>
                    </View>
                    <View style={{height: 20}} />
                    {/* <Button1
                     onPress={()=>navigation.navigate('OrderDetails')}
                     style={{
                       borderRadius: 50,
                       width: 170,
                       marginVertical: 20,
                     }}>
                     Invoice
                   </Button1> */}
                  </View>
                </View>
              </View>
              {/* <Text style={styles.ownerText}>Upload Driving licence</Text>
              <View style={{alignItems: 'center', marginTop: height * 0.023}}>
                <View style={styles.adharCardTouchMain}>
                  <TouchableOpacity
                    style={styles.adharCardPicTouch}
                    activeOpacity={0.3}
                    onPress={() => ImagePick2('driving_license')}>
                    <Image
                      source={
                        postData.driving_license
                          ? {uri: postData.driving_license?.uri}
                          : icons.dl
                      }
                      resizeMode="contain"
                      style={styles.dlImg}
                    />
                  </TouchableOpacity>
                </View>
              </View> */}
            </>
          ) : conditionState == 'AC' ? (
            <>
              {/* {update soon for AAdhar} */}
              <View style={{marginVertical: 10}}>
                <LinearGradient
                  colors={['#651898' + 70, '#2C0D8F' + 90]}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 0.5}}
                  style={[styles.user_row2, {height: SIZES.height * 0.075}]}>
                  <Text
                    style={[
                      styles.cus_name1,
                      {marginLeft: SIZES.width * 0.03},
                    ]}>
                    Enter Aadhar card details
                  </Text>
                </LinearGradient>

                <View style={[styles.order_box2]}>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 13,
                      }}>
                      <Image
                        // source={
                        //   postData.driving_license
                        //     ? {uri: postData.driving_license?.uri}
                        //     : icons.dl
                        // }
                        source={require('../../assets/icons/aadharcard.png')}
                        resizeMode="contain"
                        style={styles.panImg}
                      />

                      <Text style={[styles.text22, {marginLeft: 15}]}>
                        Enter Aadhar card details
                      </Text>
                    </View>
                    <View style={styles.horizontalLine} />

                    <View style={{marginTop: SIZES.height * 0.02}}>
                      <View style={styles.row1}>
                        <CheckBox
                          // value={value}
                          // onValueChange={onValueChange}
                          tintColors={{
                            true: COLORS.primary,
                            false: COLORS.primary,
                          }}
                          style={styles.checkBox}
                        />
                        <View style={styles.charge_row}>
                          <Text style={styles.label}>
                            I don’t have Aadhar card
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={{height: 20}} />
                  </View>
                </View>
              </View>
            </>
          ) : (
            <>
              <View style={{marginVertical: 10}}>
                <LinearGradient
                  colors={['#935DB7', '#6B56B1']}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 0.5}}
                  style={[styles.user_row2, {height: SIZES.height * 0.075}]}>
                  <Text
                    style={[
                      styles.cus_name1,
                      {marginLeft: SIZES.width * 0.03},
                    ]}>
                    {/* {item.Customer_Details?.customer_name} */}
                    Enter Driving license deatails
                  </Text>
                  {/* <Text style={[styles.subtitle, {fontSize: SIZES.width * 0.05}]}>
                  View
                </Text> */}
                </LinearGradient>

                <View style={[styles.order_box2]}>
                  {/* content of box */}
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 13,
                      }}>
                      <Image
                        // source={
                        //   postData.driving_license
                        //     ? {uri: postData.driving_license?.uri}
                        //     : icons.dl
                        // }
                        source={require('../../assets/icons/aadharcard.png')}
                        resizeMode="contain"
                        style={styles.panImg}
                      />

                      <Text style={[styles.text22, {marginLeft: 15}]}>
                        Front side of Driving license
                      </Text>
                    </View>
                    <View style={styles.horizontalLine} />
                    {/* <View style={styles.textBox1}>
                        <Text style={styles.text22}>Cash on Delivery</Text>
                        <Text style={styles.subText1}>
                          {item.pickup_time} $ 140
                        </Text>
                        </View> */}
                    {/* <View style={styles.horizontalLine} /> */}
                    <View style={{marginTop: SIZES.height * 0.02}}>
                      <View style={styles.row1}>
                        {/* {colorCode && (
                              <View
                              style={[styles.color_box, colorCode && {backgroundColor: colorCode}]}
                               />
                              )} */}
                        <CheckBox
                          // value={value}
                          // onValueChange={onValueChange}
                          tintColors={{
                            true: COLORS.primary,
                            false: COLORS.primary,
                          }}
                          style={styles.checkBox}
                        />
                        <View style={styles.charge_row}>
                          <Text style={styles.label}>
                            I don’t have Driving card
                          </Text>
                          {/* {price && <Text style={styles.charges}>(₹{price})</Text>} */}
                        </View>
                      </View>
                    </View>
                    <View style={{height: 20}} />
                    {/* <Button1
                        onPress={()=>navigation.navigate('OrderDetails')}
                        style={{
                          borderRadius: 50,
                          width: 170,
                          marginVertical: 20,
                        }}>
                        Invoice
                      </Button1> */}
                  </View>
                </View>
              </View>

              {/* {last code} */}
              {/* <Text style={styles.ownerText}>Upload Pan Card</Text>
              <View style={{alignItems: 'center', marginTop: height * 0.023}}>
                <View style={styles.adharCardTouchMain}>
                  <TouchableOpacity
                    style={styles.adharCardPicTouch}
                    activeOpacity={0.3}
                    onPress={() => ImagePick2('pan_card')}>
                    <Image
                      source={
                        postData.pan_card
                          ? {uri: postData.pan_card?.uri}
                          : icons.dl
                      }
                      resizeMode="contain"
                      style={styles.dlImg}
                    />
                  </TouchableOpacity>
                </View>
              </View> */}
            </>
          )}

          {/* <Text style={styles.tipText}>Tip</Text>
              <Text style={styles.makeText}>
                Make sure things like Names, Numbers, Address are cleary visible
                while taking photo
              </Text> */}
        </View>
      </View>
      {/* <View style={{height: SIZES.height * 0.09}} /> */}

      {conditionState == 'ID' ? (
        <Button1
          // backgroundColor={
          //   postData.aadhar_front && postData.aadhar_back
          //     ? COLORS.buttonColor
          //     : COLORS.gray20
          // }
          // disabled={
          //   postData.aadhar_front && postData.aadhar_back ? false : true
          // }
          style1={{
            width: width * 0.94,
            position: 'absolute',
            // bottom: height * 0.04,
          }}
          style={styles.btnTouch}
          onPress={() => setConditionState('DL')}>
          Next
        </Button1>
      ) : conditionState == 'DL' ? (
        <Button1
          // backgroundColor={
          //   postData.driving_license ? COLORS.buttonColor : COLORS.gray20
          // }
          // disabled={postData.driving_license ? false : true}
          style={styles.btnTouch}
          style1={{
            width: width * 0.94,
            position: 'absolute',
          }}
          onPress={() => setConditionState('PAN')}>
          Next
        </Button1>
      ) : conditionState == 'PAN' ? (
        <Button1
          // backgroundColor={
          //   postData.driving_license ? COLORS.buttonColor : COLORS.gray20
          // }
          // disabled={postData.driving_license ? false : true}
          style={styles.btnTouch}
          style1={{
            width: width * 0.94,
            position: 'absolute',
          }}
          onPress={() => setConditionState('AC')}>
          Next
        </Button1>
      ) : (
        <>
          <Button1
            // backgroundColor={
            //   postData.pan_card ? COLORS.buttonColor : COLORS.gray20
            // }
            // disabled={postData.pan_card && !loading ? false : true}
            loading={loading}
            style1={{
              width: width * 0.94,
              position: 'absolute',
            }}
            style={styles.btnTouch}
            // onPress={() => handleSubmit()}
          >
            Next
          </Button1>
        </>
      )}
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  UploadDocumentApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadDocument);

const damageList = [
  {id: 1, damage: 'Aadhar card or voter id'},
  {id: 2, damage: 'Pan card'},
  {id: 3, damage: 'Driving license'},
  {id: 4, damage: 'Bank account'},
];
