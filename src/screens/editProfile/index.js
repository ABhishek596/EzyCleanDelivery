import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
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
// import { http2 } from '../../services/api';
import ImageCropPicker from 'react-native-image-crop-picker';
import {RNToasty} from 'react-native-toasty';
import InputWithIcon1 from '../../component/input/InputWithIcon1';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  const [id, setId] = useState();
  // const customerData = userData?.customer_details
  console.log("userDataeedddiiiiittttttttttttt", userData);
  // console.log("profile image : ", userData && userData.image)
  console.log("profile id : ", id);
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
 
  useEffect(async() => {
    const userId = await AsyncStorage.getItem("@USER_ID");
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

  console.log("uodate customer profile : ", postData);
  // console.log("laldsfjao g; ", loadingIndicator)

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
                  <InputWithIcon1
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
                  />
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
                  <InputWithIcon1
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
                  />
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
