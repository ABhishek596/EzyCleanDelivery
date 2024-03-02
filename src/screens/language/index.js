import React, {useState} from 'react';
import styles from './styles';
import Button1 from '../../component/button/Button1';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
const {height, width} = Dimensions.get('window');

const Language = ({
  navigation,
  langModalVisible,
  setLangModalVisible,
  onSelectLang,
}) => {
  const [selectedLang, setSelectedLang] = useState(0);
  const [languages, setLangauges] = useState([
    {name: 'English', selected: true},
    {name: 'Arabic', selected: false},
    {name: 'French', selected: false},
    {name: 'Gujarati', selected: false},
    {name: 'Hindi', selected: false},
    {name: 'Italian', selected: false},
  ]);
  const onSelect = index => {
    const temp = languages;
    temp.map((item, ind) => {
      if (index == ind) {
        if (item.selected == true) {
          item.selected = false;
        } else {
          item.selected = true;
          setSelectedLang(index);
        }
      } else {
        item.selected = false;
      }
    });
    let temp2 = [];
    temp.map(item => {
      temp2.push(item);
    });
    setLangauges(temp2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.starttext}>Select a Language to continue</Text>

      <View style={styles.centeredView}>
        <View style={{width: '100%',}}>
          <FlatList
            data={languages}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.languageItem,
                    {borderColor: item.selected == true ? 'blue' : 'black'},
                  ]}
                  onPress={() => {
                    onSelect(index);
                  }}>
                    <View>
                  <Text
                    style={{
                      // marginLeft: 20,
                      fontWeight:'bold',
                      fontSize: 18,
                      color: item.selected == true ? 'blue' : 'black',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      // marginLeft: 20,
                      fontSize: 18,
                      color: item.selected == true ? 'blue' : 'black',
                    }}>
                    {item.name}
                  </Text>
                  </View>
                  {item.selected == true ? (
                    <Image
                      source={require('../../assets/images/radio.png')}
                      style={[styles.icon, {tintColor: 'blue'}]}
                      resizeMode="contain"
                    />
                  ) : (
                    <Image
                      source={require('../../assets/images/radio-button.png')}
                      style={styles.icon}
                    />
                  )}
                </TouchableOpacity>
              );
            }}
            numColumns={2}
          />
        </View>
        {/* <View style={styles.btns}>
              <TouchableOpacity
                style={styles.btn1}
                onPress={() => {
                  setLangModalVisible(false);
                }}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn2}
                onPress={() => {
                  setLangModalVisible(false);
                  onSelectLang(selectedLang);
                }}>
                <Text style={{color: '#fff'}}>Apply</Text>
              </TouchableOpacity>
            </View> */}
      </View>

      <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
        <Button1 children={'Continue'} />
      </View>
    </View>
  );
};

export default Language;
