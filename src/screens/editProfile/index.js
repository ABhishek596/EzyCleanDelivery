import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyles from '../../styles/globalStyles';
import {COLORS, SIZES, images} from '../../constants';
import styles from './styles';
import Icons from '../../component/Icons';
import {connect} from 'react-redux';
import {GetUserDataApi, UpdateUserApi} from '../../redux/actions/authActions';
import InputWithIcon from '../../component/input/InputWithIcon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button1 from '../../component/button/Button1';
import Loading from '../../component/loading';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
// import { http2 } from '../../services/api';
import ImageCropPicker from 'react-native-image-crop-picker';
import {RNToasty} from 'react-native-toasty';
import InputWithIcon1 from '../../component/input/InputWithIcon1';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
const EditProfile = ({
  navigation,
  UpdateUserApi,
  userData,
  loading,
  GetUserDataApi,
}) => {
  const [secure, setSecure] = useState(true);
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  // const userData = route.params && route.params.userData
  const [profileImage, setProfileImage] = useState(images.profile1);
  // const [show, setshow] = useState(false);
  // const [date, setDate] = useState(null);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [id, setId] = useState();
  // const customerData = userData?.customer_details
  console.log('userDataeedddiiiiittttttttttttt', userData);
  // console.log("profile image : ", userData && userData.image)
  console.log('profile id : ', id);
  const [postData, setPostData] = useState({
    delivery_boy_name: null,
    phone_number: null,
    profile_picture: null,
    gender: null,
    dob: null,
    // id: id,
    branch: 2,
    address: null,
    email: null,
    password: null,
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const ImagePick = () => {
    ImageCropPicker.openPicker({
      width: SIZES.width * 0.3,
      height: SIZES.height * 0.15,
      cropping: true,
    }).then(image => {
      setProfileImage({uri: image.path});
      handleChange('profile_picture', {
        uri: image.path,
        name: image.filename || Date.now() + '-' + image.path.slice(-10),
        type: image.mime,
      });
    });
  };

  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  // };
  const showDatePicker = () => {
    setShow(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const formatDate = dateString => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();

    // Add leading zeros if needed
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}-${formattedMonth}-${year}`;
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || ' select';
    setShow(Platform.OS === 'ios'); // On iOS, show the picker again after selecting a date
    setDate(currentDate);
    console.log("currentDatecurrentDate,,,,,", currentDate);
    const formatDate = dateString => {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1; // Months are zero-based
      const year = date.getFullYear();
  
      // Add leading zeros if needed
      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = month < 10 ? `0${month}` : month;
  
      return `${formattedDay}-${formattedMonth}-${year}`;
    };

    formatDate(currentDate);
    // console.log("formatDatecurrentDate,,,,,", formatDate(currentDate));
    handleChange('dob', formatDate(currentDate));
  };

  const handleConfirm = date => {
    // setSelectedDate(date.toDateString());
    hideDatePicker();
    setDate(date.toDateString());
    setshow(true);
    // handleChange('dob', date.toDateString());
    console.log("date.toDateString()", date.toDateString())
    // setDateOfBirth(date.toDateString());
    const formatDate = dateString => {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1; // Months are zero-based
      const year = date.getFullYear();
  
      // Add leading zeros if needed
      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = month < 10 ? `0${month}` : month;
  
      return `${formattedDay}-${formattedMonth}-${year}`;
    };

    formatDate(date);
    console.log("formatDatecurrentDate,,,,,", formatDate(currentDate));
  };

  const handleSubmit = () => {
    if (
      postData.delivery_boy_name &&
      postData.profile_picture?.uri &&
      postData.phone_number
    ) {
      // SignUpApi(postData, navigation)
      UpdateUserApi(postData, navigation, data => setLoadingIndicator(data));
    } else {
      RNToasty.Error({
        title: 'Please fill all fields',
        duration: 2,
      });
    }
  };

  useEffect(async () => {
    const userId = await AsyncStorage.getItem('@USER_ID');
    setId(userId);
  }, []);

  useEffect(() => {
    GetUserDataApi();
  }, []);

  useEffect(() => {
    if (userData) {
      if (userData.profile_picture) {
        setProfileImage({uri: userData.profile_picture});
      }
      // setPostData({
      //   delivery_boy_name: userData.delivery_boy_name,
      //   phone_number: userData?.phone_number,
      //   profile_picture: {
      //     uri: userData.profile_picture,
      //     name: 'profile_picture.jpg',
      //     type: 'image/jpg',
      //   },
      // });
    }
  }, [userData]);

  console.log('uodate customer profile : ', postData);
  // console.log("laldsfjao g; ", loadingIndicator)

  
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);

  const genders = ['Male', 'Female', 'Other'];

  const handleSelectGender = gender => {
    setSelectedGender(gender);
    setModalVisible(false);
    handleChange('gender', gender);
  };


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

          {/* header */}
          <ImageBackground
            source={images.bg}
            style={styles.header_bg}
            resizeMode="contain">
            <View style={styles.header_row}>
              <TouchableOpacity
                style={styles.back_btn}
                onPress={() => navigation.goBack()}>
                <Icons name={'back'} size={22} color={COLORS.white} />
              </TouchableOpacity>
              <Text style={styles.page_title}>Edit Profile</Text>
            </View>

            <TouchableOpacity style={styles.profile_box} onPress={ImagePick}>
              <View style={styles.image_box}>
                {/* <Image source={postData?.profile_picture?.uri ?{ uri: postData.profile_picture?.uri} : images.profile1} style={styles.profile}
                                      //  resizeMode='contain'
                                      resizeMode='stretch'
                                  /> */}
                <Image
                  source={profileImage}
                  style={styles.profile}
                  //  resizeMode='contain'
                  resizeMode="stretch"
                />
              </View>
              <TouchableOpacity style={styles.edit_btn} onPress={ImagePick}>
                <Icons name={'cam'} size={15} color={COLORS.black} />
              </TouchableOpacity>
            </TouchableOpacity>
          </ImageBackground>

          {/* button container */}
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={false}>
            <View style={styles.box}>
              <Text style={styles.title}>Basic Details</Text>

              <InputWithIcon
                placeholder={'Enter your Name'}
                leftIcon={'user'}
                label={'First Name'}
                value={postData.delivery_boy_name}
                onChangeText={text => handleChange('delivery_boy_name', text)}
              />
              {/* <InputWithIcon
                placeholder={'Enter your Last Name'}
                leftIcon={'user'}
                label={'Last Name'}
                value={postData.customer_name}
                onChangeText={text => handleChange('customer_name', text)}
              /> */}

              <InputWithIcon
                placeholder={'Email Address'}
                leftIcon={'email'}
                label={'Email Address'}
                value={userData?.email}
                // editable={false}
                onChangeText={text => handleChange('email', text)}
              />
              <View
                style={{
                  alignSelf: 'flex-start',
                  marginBottom: SIZES.width * 0.02,
                  marginLeft: SIZES.width * 0.05,
                }}>
                <Text
                  style={{
                    textAlign: 'left',
                    color: COLORS.primary,
                    fontSize: SIZES.width * 0.04,
                    // fontWeight: 'bold',
                  }}>
                  Email Password
                </Text>
              </View>
              <InputWithIcon1
                placeholder={'Email Password'}
                // leftIcon={'lock'}
                rightIcon={secure ? 'eye-off' : 'eye'}
                onPress={() => setSecure(!secure)}
                secureTextEntry={secure}
                value={postData.password}
                onChangeText={text => handleChange('password', text)}
              />

              <InputWithIcon
                placeholder={'Phone Number'}
                leftIcon={'call'}
                label={'Phone Number'}
                keyboardType={'numeric'}
                maxLength={10}
                value={postData.phone_number}
                onChangeText={text => handleChange('phone_number', text)}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: SIZES.width * 0.9,
                  alignSelf: 'center',
                }}>
                <View>
                  <View
                    style={{
                      alignSelf: 'flex-start',
                      marginBottom: SIZES.width * 0.02,
                      // marginLeft: SIZES.width * .05,
                    }}>
                    <Text
                      style={{
                        textAlign: 'left',
                        color: COLORS.primary,
                        fontSize: SIZES.width * 0.04,
                      }}>
                      Date of Birth
                    </Text>
                  </View>
                  <TouchableWithoutFeedback onPress={showDatePicker}>
                  <View
                    style={{
                      width: SIZES.width * 0.4,
                      alignSelf: 'flex-start',
                      height: SIZES.height * 0.07,
                      // backgroundColor: 'red',
                      borderRadius:8,
                      justifyContent:'center',
                      borderColor:COLORS.gray20,
                      borderWidth:1
                    }}>
                    <Text style={{fontSize: 14,left:10}}>
                      {date ? formatDate(date) : 'Select Date'}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
                  {/* <TouchableWithoutFeedback onPress={showDatePicker}>
                    <View
                      style={{
                        // backgroundColor: 'red',
                        width: SIZES.width * 0.4,
                        borderWidth: 1,
                        borderColor: 'grey',
                        borderRadius: 6,
                        height: SIZES.height * 0.07,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          // padding: 7.5,
                          // backgroundColor: '#fff',
                          // color: 'black',
                          // width: SIZES.width * 0.4,
                          // textAlign: 'center',
                          // height: SIZES.width * 0.09,
                          // borderWidth: 1,
                          left: SIZES.width * 0.02,
                          fontSize: SIZES.width * 0.04,
                        }}>
                        {show
                          ? `${moment(
                              moment(date, 'MM/DD/YYYY').toDate(),
                            ).format('MM/DD/YYYY')}`
                          : 'D.O.B.'}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  /> */}
                  {/* <InputWithIcon1
                    placeholder={'ex. 12-10-1984'}
                    // leftIcon={'lock'}
                    rightIcon={secure ? 'down-outline' : 'up-outline'}
                    onPress={() => setSecure(!secure)}
                    secureTextEntry={secure}
                    value={postData.dob}
                    onChangeText={text => handleChange('dob', text)}
                    inputStyle={{
                      width: SIZES.width * 0.4,
                      alignSelf: 'flex-start',
                    }}
                    inputTextStyle={{width: SIZES.width * 0.29}}
                    style={{marginLeft: SIZES.width * 0.02}}
                  /> */}
                </View>
                <View>
                  <View
                    style={{
                      alignSelf: 'flex-start',
                      marginBottom: SIZES.width * 0.02,
                      // marginLeft: SIZES.width * .05,
                    }}>
                    <Text
                      style={{
                        textAlign: 'left',
                        color: COLORS.primary,
                        fontSize: SIZES.width * 0.04,
                      }}>
                      Gender
                    </Text>
                  </View>
                  {/* <InputWithIcon1
                    placeholder={'Select Gender'}
                    // leftIcon={'lock'}
                    rightIcon={secure ? 'down-outline' : 'up-outline'}
                    onPress={() => setSecure(!secure)}
                    secureTextEntry={secure}
                    value={postData.gender}
                    onChangeText={text => handleChange('gender', text)}
                    inputStyle={{
                      width: SIZES.width * 0.4,
                      alignSelf: 'flex-start',
                    }}
                    inputTextStyle={{width: SIZES.width * 0.29}}
                    style={{marginLeft: SIZES.width * 0.02}}
                  /> */}
                  <View style={{}}>
                    <TouchableWithoutFeedback
                      onPress={() => setModalVisible(true)}>
                      <View style={styles.selectedGenderContainer}>
                        <Text>{selectedGender || 'Select Gender'}</Text>
                        {modalVisible === false ? (
                          <Icon name="chevron-down" size={20} />
                        ) : (
                          <Icon name="chevron-up" size={20} />
                        )}
                      </View>
                    </TouchableWithoutFeedback>

                    {modalVisible && (
                      <View style={styles.modalContainer}>
                        {genders.map(gender => (
                          <TouchableWithoutFeedback
                            key={gender}
                            onPress={() => handleSelectGender(gender)}>
                            <View style={styles.genderOption}>
                              <Text>{gender}</Text>
                            </View>
                          </TouchableWithoutFeedback>
                        ))}
                      </View>
                    )}
                  </View>
                </View>
              </View>
              <View
                style={{
                  alignSelf: 'flex-start',
                  marginBottom: SIZES.width * 0.02,
                  marginLeft: SIZES.width * 0.05,
                }}>
                <Text
                  style={{
                    textAlign: 'left',
                    color: COLORS.primary,
                    fontSize: SIZES.width * 0.04,
                  }}>
                  Select City
                </Text>
              </View>
              <InputWithIcon1
                placeholder={'Select City'}
                // leftIcon={'lock'}
                rightIcon={secure ? 'down-outline' : 'up-outline'}
                onPress={() => setSecure(!secure)}
                secureTextEntry={secure}
                value={postData.branch}
                onChangeText={text => handleChange('branch', text)}
              />
              <InputWithIcon
                placeholder={'Type Address...'}
                leftIcon={'location'}
                label={'Address'}
                value={postData.address}
                multiline={true}
                numberOfLines={5}
                onChangeText={text => handleChange('address', text)}
              />
              <View style={{height: SIZES.height * 0.02}} />
              <Button1
                disabled={loadingIndicator}
                loading={loadingIndicator}
                onPress={handleSubmit}
                style={{
                  borderRadius: SIZES.width * 0.06,
                  // marginTop: SIZES.height * 0.03,
                }}>
                Update
              </Button1>
              <View style={{height: SIZES.height * 0.02}} />
            </View>
          </KeyboardAwareScrollView>
        </View>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  userData: state.auth.userData,
  loading: state.auth.loading,
});

const mapDispatchToProps = {
  UpdateUserApi,
  GetUserDataApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
// export default EditProfile;

// import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import globalStyles from '../../styles/globalStyles';
// import { COLORS, SIZES, images } from '../../constants';
// import styles from './styles';
// import Icons from '../../component/Icons';
// import { connect } from 'react-redux';
// import { GetUserDataApi, UpdateUserApi } from '../../redux/actions/authActions';
// import InputWithIcon from '../../component/input/InputWithIcon';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import Button1 from '../../component/button/Button1';
// import Loading from '../../component/loading';
// import ImageCropPicker from 'react-native-image-crop-picker';
// import { RNToasty } from 'react-native-toasty';

// const EditProfile = ({ navigation, UpdateUserApi, userData, loading, GetUserDataApi }) => {

//     const [loadingIndicator, setLoadingIndicator] = useState(false)
//     // const userData = route.params && route.params.userData
//     const [profileImage, setProfileImage] = useState(images.profile1)
//     // const customerData = userData?.customer_details
//     // console.log("userData", userData)
//     // console.log("profile image : ", userData && userData.image)

//     const [postData, setPostData] = useState({
//         name: null,
//         phone_number: null,
//         profile_picture: null,
//         // address: null
//     })

//     const handleChange = (name, value,) => {
//         setPostData({
//             ...postData,
//             [name]: value
//         })
//     }

//     const ImagePick = () => {
//         ImageCropPicker.openPicker({
//             width: SIZES.width * .3,
//             height: SIZES.height * .15,
//             cropping: true
//         }).then(image => {
//             setProfileImage({ uri: image.path })
//             handleChange("profile_picture", {
//                 uri: image.path,
//                 name: image.filename || Date.now() + "-" + image.path.slice(-10),
//                 type: image.mime
//             })
//         });
//     }

//     const handleSubmit = () => {

//         if (postData.name && postData.profile_picture?.uri && postData.phone_number) {
//             // SignUpApi(postData, navigation)
//             UpdateUserApi(postData, navigation, (data) => setLoadingIndicator(data))

//         } else {
//             RNToasty.Error({
//                 title: "Please fill all fields",
//                 duration: 2
//             })
//         }
//     }

//     useEffect(() => {
//         GetUserDataApi()
//     }, [])

//     useEffect(() => {
//         if (userData) {
//             if (userData.profile_picture) {
//                 setProfileImage({ uri: userData.profile_picture })
//             }
//             setPostData({
//                 "name": userData.driver_details?.delivery_boy_name,
//                 "phone_number": userData.driver_details?.phone_number,
//                 "profile_picture": { uri: userData.profile_picture, name: "profile_picture.jpg", type: "image/jpg" },
//             })
//         }
//     }, [userData])

//     console.log("uodate customer profile : ", postData)
//     // console.log("laldsfjao g; ", loadingIndicator)

//     return (
//         <>
//             {loading ?
//                 <Loading />
//                 :
//                 <View style={globalStyles.container}>
//                     <StatusBar backgroundColor={COLORS.primary} barStyle='light-content' />

//                     {/* button container */}
//                     <KeyboardAwareScrollView
//                         keyboardShouldPersistTaps={'handled'}
//                         showsVerticalScrollIndicator={false}
//                     >
//                      {/* header */}
//                     <View
//                         style={styles.profile_container}
//                     >

//                         <TouchableOpacity style={styles.profile_box}
//                             onPress={ImagePick}
//                         >

//                             <View style={styles.image_box}>
//                                 {/* <Image source={postData?.profile_picture?.uri ?{ uri: postData.profile_picture?.uri} : images.profile1} style={styles.profile}
//                                     //  resizeMode='contain'
//                                     resizeMode='stretch'
//                                 /> */}
//                                 <Image source={profileImage} style={styles.profile}
//                                     //  resizeMode='contain'
//                                     resizeMode='stretch'
//                                 />
//                             </View>
//                             <TouchableOpacity style={styles.edit_btn}
//                                 onPress={ImagePick}
//                             >
//                                 <Icons name={"edit"} size={15} color={COLORS.secondary} />
//                             </TouchableOpacity>
//                         </TouchableOpacity>
//                     </View>
//                         <View style={styles.box}>
//                             <Text style={styles.title}>Basic Details</Text>

//                             <InputWithIcon
//                                 placeholder={"Enter your Name"}
//                                 leftIcon={"user"}
//                                 label={"Name"}
//                                 value={postData.name}
//                                 onChangeText={(text) => handleChange("name", text)}
//                             />

//                             <InputWithIcon
//                                 placeholder={"Email Address"}
//                                 leftIcon={"email"}
//                                 label={"Email Address"}
//                                 value={userData?.driver_details?.email}
//                                 editable={false}
//                             />
//                             <InputWithIcon
//                                 placeholder={"Phone Number"}
//                                 leftIcon={"call"}
//                                 label={"Phone Number"}
//                                 keyboardType={"numeric"}
//                                 maxLength={10}
//                                 value={postData.phone_number}
//                                 onChangeText={(text) => handleChange("phone_number", text)}
//                             />

//                             <Button1
//                                 disabled={loadingIndicator}
//                                 loading={loadingIndicator}
//                                 onPress={handleSubmit}
//                             >Update</Button1>
//                         </View>
//                     </KeyboardAwareScrollView>

//                 </View>
//             }
//         </>
//     )
// }

// const mapStateToProps = (state) => ({
//     userData: state.auth.userData,
//     loading: state.auth.loading,
// })

// const mapDispatchToProps = {
//     UpdateUserApi,
//     GetUserDataApi,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
