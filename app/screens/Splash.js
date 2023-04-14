import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {AppColors, AppFontFamily} from '../utils/AppStyle';
import AppContext from '../utils/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splash(props) {
  const {Theme, userID, setUserID} = useContext(AppContext);

  const getUserID = async () => {
    try {
      const value = await AsyncStorage.getItem('@userID');
      if (value !== null) {
        setUserID(value);
        console.log('number', value);
      }
    } catch (e) {
      console.log('userID is null');
    }
  };

  useEffect(() => {
    getUserID();
    setTimeout(() => {
      if (userID == null || userID == undefined) {
        props.navigation.navigate('AuthStack');
      } else {
        props.navigation.navigate('HomeNavHandler');
      }
    }, 3000);
  }, []);

  return (
    <View
      style={[styles.container, {backgroundColor: AppColors[Theme].primary}]}>
      <View
        style={[
          styles.circleOne,
          {backgroundColor: AppColors[Theme].whiteRGBA},
        ]}>
        <View
          style={[
            styles.circleTwo,
            {backgroundColor: AppColors[Theme].whiteRGBA},
          ]}>
          <Text
            style={[
              styles.welcome,
              {fontFamily: AppFontFamily.bold, color: AppColors[Theme].black},
            ]}>
            Welcome
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleOne: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleTwo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 24,
  },
});
