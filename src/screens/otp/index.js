import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Button1 from '../../component/button/Button1';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import globalStyles from '../../styles/globalStyles';
import styles from './styles';
import {connect} from 'react-redux';
import {RNToasty} from 'react-native-toasty';
import {ForgetPasswordApi, VerifyOtpApi} from '../../redux/actions/authActions';
// import CountDown from '../../component/countDown/CountDown';

const Otp = ({
  ResendOtpApi,
  navigation,
  route,
  VerifyOtpApi,
  ForgetPasswordApi,
}) => {
  const [otp, setOtp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  const [countdownTime, setCountdownTime] = useState(`02:00`);

  // console.log("otp data: ", route.params.data, route.params.otp )
  // const userdata = route.params && route.params.data
  // console.log('otp data: ', route?.params?.email, route?.params?.email);
  // const useremaildata = route?.params && route?.params?.email;
  const useremaildata = route?.params?.email;
  console.log('useremaildata data: ', useremaildata);
  const [postData, setPostData] = useState({
    otp: null,
    email: useremaildata,
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (postData.otp) {
      VerifyOtpApi(postData, navigation, data => setLoading(data)); //VerifyOtpApi(postData, navigation, userdata.id, data => setLoading(data));
      setPostData({
        otp: null,
      });
    } else {
      RNToasty.Error({
        title: 'Please enter otp',
        duration: 2,
      });
    }
    // navigation.navigate('ResetPassword');
  };

  // const countdownTimer = async (duration) => {

  //     var timer = 60 * duration, minutes, seconds;
  //     // var timer = duration, minutes, seconds;
  //     const countdown = setInterval(() => {
  //         minutes = parseInt(timer / 60, 10);
  //         seconds = parseInt(timer % 60, 10);

  //         minutes = minutes < 10 ? "0" + minutes : minutes;
  //         seconds = seconds < 10 ? "0" + seconds : seconds;

  //         setCountdownTime(`${minutes}:${seconds}`)

  //         if (timer-- <= 0) {
  //             clearInterval(countdown)
  //         }

  //     }, 1000);
  // }

  // useEffect(() => {
  //     countdownTimer(2);
  //     return () => {
  //         setCountdownTime(null);
  //     }
  // }, [])

  // const resendOtp = () => {
  //     if (countdownTime == `00:00`) {
  //         ForgetPasswordApi(route.params.data)
  //         setCountdownTime(`02:00`)
  //         countdownTimer(2)
  //     } else {
  //         RNToasty.Normal({
  //             title: 'Please wait',
  //             duration: 2
  //         })
  //     }
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
      <View style={globalStyles.justify_between}>
        <View style={globalStyles.center}>
          <View style={globalStyles.title_box}>
            <Text style={globalStyles.title}>OTP Verification</Text>
            <Text
              style={[
                globalStyles.text,
                {color: COLORS.primary, marginTop: SIZES.height * 0.02},
              ]}>
              Enter the 4 digits code that you received on your email.{' '}
            </Text>

            {/* <Text style={globalStyles.title}>otp - {userdata?.otp}</Text> */}
            {/* <Text style={globalStyles.title}>otp -</Text> */}
          </View>

          <View style={styles.OtpRow}>
            <OTPInputView
              // onPress={() => console.log("press me")}
              style={styles.OtpinputBox}
              pinCount={4}
              // code={postData.otp ? postData.otp : null}
              codeInputFieldStyle={styles.boxstyle}
              codeInputHighlightStyle={{borderColor: COLORS.primary}}
              // onCodeFilled={(code => setOtp(code))}
              onCodeFilled={text => handleChange('otp', text)}
            />
          </View>
          <View style={{height: SIZES.height * 0.03}} />
          <Button1
            disabled={loading}
            loading={loading}
            onPress={handleSubmit}
            // style={{marginTop: SIZES.height * 0.02}}
            // onPress={() => navigation.navigate("ResetPassword")}
          >
            Verify
          </Button1>

          {/* <View style={{ ...globalStyles.row1, ...styles.mv2 }}>
                        <TouchableOpacity
                            onPress={resendOtp}
                        >
                            <Text style={styles.btn_text}>Resend OTP</Text>
                        </TouchableOpacity>
                        <Text style={styles.time}>{countdownTime}</Text>
                    </View> */}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  VerifyOtpApi,
  ForgetPasswordApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Otp);
// export default Otp;
