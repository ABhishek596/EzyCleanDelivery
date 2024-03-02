import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';
import React, { useState, useEffect } from 'react';
import globalStyles from '../../styles/globalStyles';
import { COLORS, images } from '../../constants';
import styles from './styles';
import Icons from '../../component/Icons';
import { connect } from 'react-redux';
import { GetUserDataApi, LogoutApi } from '../../redux/actions/authActions';
import Loading from '../../component/loading';
import { http2 } from '../../services/api';
import LinearGradient from 'react-native-linear-gradient';

const ScreenNavigation = ({ iconName, onPress, children }) => {
  return (
    <TouchableOpacity
      style={[
        styles.screen_btn,
        children == 'Logout' && { borderBottomWidth: 0 },
      ]}
      onPress={onPress}>
      <Icons
        name={iconName}
        size={25}
        color={COLORS.primary}
        style={styles.icon_style}
      />
      <Text style={styles.screen_title}>{children}</Text>
    </TouchableOpacity>
  );
};

const Account = ({
  navigation,
  LogoutApi,
  loading,
  userData,
  GetUserDataApi,
}) => {
  useEffect(() => {
    GetUserDataApi()
  }, [])

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={globalStyles.container}>
          <StatusBar
            backgroundColor='transparent'
            barStyle="light-content"
            translucent={true}
          />
          <ImageBackground
            source={images.bg}
            style={styles.header_bg}
            resizeMode="contain">
            <View style={styles.header_row}>
              <View style={globalStyles.row}>
                <TouchableOpacity
                  style={styles.back_btn}
                  onPress={() => navigation.goBack()}>
                  <Icons name={'back'} size={22} color={COLORS.white} />
                </TouchableOpacity>
                <Text style={styles.page_title}>Profile</Text>
              </View>
              <TouchableOpacity
                style={styles.notification_btn}
                onPress={() => navigation.navigate('Notification')}>
                <Icons name={'notification_outline'} size={22} color={COLORS.primary} />
              </TouchableOpacity>
            </View>

            <View style={styles.profile_box}>
              {/* <Image source={!userData?.profile_picture.slice(-10, -4)  == "avatar" ? {uri: userData.profile_picture} : images.profile1} style={styles.profile}
                  resizeMode='stretch'
              />  */}
              <View style={styles.image_box}>
                <Image
                  source={
                    userData?.profile_picture
                      ? { uri: userData.profile_picture }
                      : images.profile1
                  }
                  style={styles.profile}
                  resizeMode="cover"
                />
              </View>
              <Text
                style={
                  styles.user_name
                }>{`${userData?.delivery_boy_name}`}</Text>
              <Text style={styles.text}>Welcome Back</Text>
            </View>
          </ImageBackground>
          {/* <View style={styles.profile_box}>
            <View style={styles.image_box}>
              <Image
                source={
                  userData?.profile_picture
                    ? {uri: userData.profile_picture}
                    : images.profile1
                }
                style={styles.profile}
                resizeMode="stretch"
              />
            </View>
            <Text
              style={
                styles.user_name
              }>{`${userData?.driver_details?.delivery_boy_name}`}</Text> */}
          {/* <Text style={styles.text}>Welcome Back</Text> */}
          {/* </View> */}

          {/* button container */}
          <View style={styles.btn_container}>
            <ScreenNavigation
              iconName={'profile_outline'}
              onPress={() => navigation.navigate('EditProfile')}>
              Edit Profile
            </ScreenNavigation>

            <ScreenNavigation
              iconName={'docs'}
              onPress={() => navigation.navigate('UploadDocument')}>
              Upload Proofs
            </ScreenNavigation>
            <ScreenNavigation
              iconName={'appstore'}
              onPress={() => navigation.navigate('AppSettings')}>
              App Settings
            </ScreenNavigation>
            <ScreenNavigation
              iconName={'logout'}
              // onPress={LogoutApi}
              onPress={toggleModal}
            >
              Logout
            </ScreenNavigation>
          </View>
          <Modal
            transparent={true}
            visible={isModalVisible}
            animationType="fade"
          >
            <View style={styles.modalContainer}>
              <LinearGradient
                colors={['#EDD2FF', '#D9CCFF']}
                style={[styles.modalContent]} // Your styles for the LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>
                <Image
                  source={require('../../assets/icons/logout2.png')}
                  style={styles.image}
                />
                <Text style={styles.texta}>
                  Are you sure you want to log out?
                </Text>
                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={toggleModal}
                  >
                    <Text style={styles.cancle}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button1}
                    // onPress={() => {
                    //   // Handle 'Yes' button click here
                    //   // toggleModal();
                    //   // navigation.navigate('OnBoardingScreen');

                    // }}
                    onPress={LogoutApi}
                  >
                    <Text style={styles.yes}>Yes</Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
          </Modal>
        </View>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userData: state.auth.userData,
  loading: state.auth.loading,
})

const mapDispatchToProps = {
  LogoutApi,
  GetUserDataApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
// export default Account;
