import React, {useState} from 'react';
import {View, Text, Image, Switch, TouchableOpacity} from 'react-native';
import styles from './styles';

const AppSettings = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.startitem}>
          <Image
            // source={
            //   postData.driving_license
            //     ? {uri: postData.driving_license?.uri}
            //     : icons.dl
            // }
            source={require('../../assets/images/themeic.png')}
            resizeMode="contain"
            style={styles.mainImg}
          />
          <Text style={styles.starttext}>Dark Mode</Text>
        </View>
        <View style={styles.enditem}>
          <Text style={styles.endtext}>Off</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#000000' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('ResetPassword')}>
      <View style={styles.row}>
        <View style={styles.startitem}>
          <Image
            // source={
            //   postData.driving_license
            //     ? {uri: postData.driving_license?.uri}
            //     : icons.dl
            // }
            source={require('../../assets/images/cpass.png')}
            resizeMode="contain"
            style={styles.mainImg}
          />
          <Text style={styles.starttext}>Change Password</Text>
        </View>
        <View style={styles.enditem}>
          {/* <Text style={styles.endtext}>Off</Text> */}
          <Image
            // source={
            //   postData.driving_license
            //     ? {uri: postData.driving_license?.uri}
            //     : icons.dl
            // }
            source={require('../../assets/icons/left.png')}
            resizeMode="contain"
            style={styles.lastImg}
          />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Language')}>
      <View style={styles.row} >
        <View style={styles.startitem}>
          <Image
            // source={
            //   postData.driving_license
            //     ? {uri: postData.driving_license?.uri}
            //     : icons.dl
            // }
            source={require('../../assets/images/lang.png')}
            resizeMode="contain"
            style={styles.mainImg}
          />
          <Text style={styles.starttext}>Language</Text>
        </View>
        <View style={styles.enditem}>
          <Text style={styles.endtext}>English</Text>
          <Image
            // source={
            //   postData.driving_license
            //     ? {uri: postData.driving_license?.uri}
            //     : icons.dl
            // }
            source={require('../../assets/icons/left.png')}
            resizeMode="contain"
            style={styles.lastImg}
          />
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default AppSettings;
