import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StatusBar,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import Button1 from '../../component/button/Button1';
import InputWithIcon from '../../component/input/InputWithIcon';
import InputWithIcon1 from '../../component/input/InputWithIcon1';
import styles from './styles';
// import { RNToasty } from 'react-native-toasty';
import globalStyles from '../../styles/globalStyles';
// import { SignUpApi } from '../../redux/actions/authActions';
import {COLORS, SIZES} from '../../constants';
// import messaging from "@react-native-firebase/messaging"

const SignUp = ({navigation, SignUpApi}) => {
  const [loading, setLoading] = useState(false);

  const [secure, setSecure] = useState(true);
  const [secure1, setSecure1] = useState(true);
  const [disable, setDisable] = useState(true);
  // const [fcm, setFcm] = useState();

  const [postData, setPostData] = useState({
    name: null,
    phone_number: null,
    email: null,
    password: null,
    confirm_password: null,
    fcm_token: '',
  });
  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  // useEffect(() => {
  //     getDeviceToken()
  // }, [])

  // const getDeviceToken = async () => {
  //     let fcmToken = await messaging().getToken();
  //     console.log("signup fcm : ", fcmToken);
  //     setFcm(fcmToken)
  // }

  // console.log('signup data ; ', postData)

  // const handleSubmit = () => {
  //     // console.log('signup postdata ; ', postData)
  //     // handleToken()
  //     if (postData.name && postData.email && postData.password && postData.confirm_password && postData.phone_number) {
  //         if (postData.password == postData.confirm_password) {
  //             SignUpApi({ ...postData, fcm_token: fcm }, navigation, (data) => setLoading(data))
  //             setPostData({
  //                 "name": null,
  //                 "phone_number": null,
  //                 "email": null,
  //                 "password": null,
  //                 "confirm_password": null,
  //             })
  //         } else {
  //             RNToasty.Error({
  //                 title: "Password and confirm password does not match",
  //                 duration: 2
  //             })
  //         }

  //     } else {
  //         RNToasty.Error({
  //             title: "Please fill all fields",
  //             duration: 2
  //         })
  //     }
  //     // if (postData.fcm_token) {
  //     //     if (postData.name && postData.email && postData.password && postData.confirm_password && postData.phone_number) {
  //     //         if (postData.password == postData.confirm_password) {
  //     //             SignUpApi(postData, navigation, (data) => setLoading(data))
  //     //             setPostData({
  //     //                 "name": null,
  //     //                 "phone_number": null,
  //     //                 "email": null,
  //     //                 "password": null,
  //     //                 "confirm_password": null,
  //     //             })
  //     //         } else {
  //     //             RNToasty.Error({
  //     //                 title: "Password and confirm password does not match",
  //     //                 duration: 2
  //     //             })
  //     //         }

  //     //     } else {
  //     //         RNToasty.Error({
  //     //             title: "Please fill all fields",
  //     //             duration: 2
  //     //         })
  //     //     }
  //     // } else {
  //     //     RNToasty.Error({
  //     //         title: "fcm token is null",
  //     //         duration: 2
  //     //     })
  //     // }

  // }

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'handled'}
      showsVerticalScrollIndicator={false}
      style={globalStyles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: SIZES.height * 0.03,
        }}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={globalStyles.center}>
            <View style={globalStyles.title_box}>
              <Text style={globalStyles.title}>Create Account</Text>
              <Text style={[globalStyles.text, {color: COLORS.primary}]}>
                Please fill the details and create account
              </Text>
            </View>
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
                  fontSize: SIZES.width * 0.045,
                  // fontWeight: 'bold',
                }}>
                Full Name
              </Text>
            </View>
            <InputWithIcon
              placeholder={'Name'}
              leftIcon={'user'}
              value={postData.name}
              onChangeText={text => handleChange('name', text)}
            />
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
                  fontSize: SIZES.width * 0.045,
                  // fontWeight: 'bold',
                }}>
                Phone Number
              </Text>
            </View>
            <InputWithIcon
              placeholder={'Phone number'}
              leftIcon={'call'}
              value={postData.phone_number}
              keyboardType={'numeric'}
              maxLength={10}
              onChangeText={text => handleChange('phone_number', text)}
            />
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
                  fontSize: SIZES.width * 0.045,
                  // fontWeight: 'bold',
                }}>
                Enter Email
              </Text>
            </View>
            <InputWithIcon
              placeholder={'Email Address'}
              leftIcon={'email'}
              value={postData.email}
              onChangeText={text => handleChange('email', text)}
            />
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
                  fontSize: SIZES.width * 0.045,
                  // fontWeight: 'bold',
                }}>
                Enter Password
              </Text>
            </View>
            <InputWithIcon1
              placeholder={'Password'}
              leftIcon={'lock'}
              rightIcon={secure ? 'eye-off' : 'eye'}
              onPress={() => setSecure(!secure)}
              secureTextEntry={secure}
              value={postData.password}
              onChangeText={text => handleChange('password', text)}
            />
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
                  fontSize: SIZES.width * 0.045,
                  // fontWeight: 'bold',
                }}>
                Confirm password
              </Text>
            </View>
            <InputWithIcon1
              placeholder={'Confirm password'}
              leftIcon={'lock'}
              rightIcon={secure1 ? 'eye-off' : 'eye'}
              onPress={() => setSecure1(!secure1)}
              secureTextEntry={secure1}
              value={postData.confirm_password}
              onChangeText={text => handleChange('confirm_password', text)}
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
                      // fontSize: SIZES.body3,
                      fontSize: SIZES.width * 0.045,
                    }}>
                    Date of Birth
                  </Text>
                </View>
                <InputWithIcon1
                  placeholder={'D.O.B.'}
                  // leftIcon={'lock'}
                  rightIcon={secure ? 'down-outline' : 'up-outline'}
                  onPress={() => setSecure(!secure)}
                  secureTextEntry={secure}
                  value={postData.password}
                  onChangeText={text => handleChange('password', text)}
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
                      // fontSize: SIZES.body3,
                      fontSize: SIZES.width * 0.045,
                    }}>
                    Gender
                  </Text>
                </View>
                <InputWithIcon1
                  placeholder={'Gender'}
                  leftIcon={'lock'}
                  rightIcon={secure ? 'down-outline' : 'up-outline'}
                  onPress={() => setSecure(!secure)}
                  secureTextEntry={secure}
                  value={postData.password}
                  onChangeText={text => handleChange('password', text)}
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
                // marginLeft: SIZES.width * .05,
              }}>
              <Text
                style={{
                  textAlign: 'left',
                  color: COLORS.primary,
                  // fontSize: SIZES.body3,
                  fontSize: SIZES.width * 0.045,
                }}>
                Select Branch
              </Text>
            </View>
            <InputWithIcon1
              placeholder={'Select Branch'}
              // leftIcon={'lock'}
              rightIcon={secure ? 'down-outline' : 'up-outline'}
              onPress={() => setSecure(!secure)}
              secureTextEntry={secure}
              value={postData.password}
              onChangeText={text => handleChange('password', text)}
            />

            <Button1
              disabled={loading}
              loading={loading}
              // onPress={handleSubmit}
            >
              Sign Up
            </Button1>
          </View>

          <View
            style={[
              globalStyles.row,
              {alignSelf: 'center', top: SIZES.height * 0.015},
            ]}>
            <Text style={[globalStyles.text, {color: COLORS.primary}]}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity
              style={styles.signup_btn}
              onPress={() => navigation.navigate({name: 'Login'})} //back to login page
            >
              <Text style={styles.signup_text}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 20}} />
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {
//     SignUpApi
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
export default SignUp;
