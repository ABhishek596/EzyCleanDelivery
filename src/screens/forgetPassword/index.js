import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Linking, StatusBar} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import Button1 from '../../component/button/Button1';
import InputWithIcon from '../../component/input/InputWithIcon';
import styles from './styles';
import {RNToasty} from 'react-native-toasty';
import globalStyles from '../../styles/globalStyles';
import {ForgetPasswordApi} from '../../redux/actions/authActions';
import {COLORS, SIZES} from '../../constants';

const ForgetPassword = ({navigation, ForgetPasswordApi}) => {
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);

  const [postData, setPostData] = useState({
    email: null,
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (postData.email) {
      ForgetPasswordApi(postData, navigation, data => setLoading(data));
      setPostData({
        email: null,
      });
    } else {
      RNToasty.Error({
        title: 'Please enter your email',
        duration: 2,
      });
    }
    // navigation.navigate('Otp');
  };
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
            <Text style={globalStyles.title}>Forgot Password</Text>
            <Text
              style={[
                globalStyles.text,
                {color: COLORS.primary, marginTop: SIZES.height * 0.02},
              ]}>
              Enter your email for the verification process we will send 4
              digits code to your email
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
              Enter Email
            </Text>
          </View>
          <InputWithIcon
            placeholder={'Email Address'}
            leftIcon={'email'}
            value={postData.email}
            onChangeText={text => handleChange('email', text)}
          />
          <View style={{height: SIZES.height * 0.03}} />

          <Button1
            disabled={loading}
            loading={loading}
            onPress={handleSubmit}
            // style={{marginTop: SIZES.height * 0.02}}
            // onPress={() => navigation.navigate("Otp")}
          >
            Send Code
          </Button1>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  ForgetPasswordApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
// export default ForgetPassword;
