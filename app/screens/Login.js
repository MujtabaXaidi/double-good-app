import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {
  AppColors,
  AppFontFamily,
  AppFontSize,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../utils/AppStyle';
import AppContext from '../utils/AppContext';
import EmailInput from '../components/EmailInput';
import PrimaryButton from '../components/PrimaryButton';
import PrimaryTextComp from '../components/PrimaryTextComp';
import {AppStrings} from '../utils/AppStrings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import databaseInstance from '../database/FirebaseUtils';
import auth from '@react-native-firebase/auth';
export default function Login(props) {
  const {Theme, Language, setUserID} = useContext(AppContext);
  const [phoneNumber, setphoneNumber] = useState('');
  const [errorText, seterrorText] = useState('');
  const [loading, setloading] = useState(false);

  function onAuthStateChangeListener(user) {
    if (user) {
      console.log('auto login');
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChangeListener);
    return () => {
      subscriber;
    };
  }, []);

  async function formatPhoneNumber(phoneNumber) {
    setloading(true);
    seterrorText('');
    // Remove all non-digits from the phone number
    let number = phoneNumber;
    number = number.replace('0', '+92');
    console.log('number', number);
    // number = number.replace(/\D/g, '');
    // const phoneRegex = /^(\d{3})(\d{3})(\d{4})$/;
    const phoneRegex = /^(\+92|0)3\d{9}$/;
    const match = number.match(phoneRegex);
    if (match) {
      // const formattedPhoneNumber = `(${match[1]}) ${match[2]}-${match[3]}`;
      // console.log('number is valid', number)
      console.log('im hi');
      const confirmation = await auth().signInWithPhoneNumber(number);
      setUserID(number);
      console.log('confirmation', confirmation);
      try {
        await AsyncStorage.setItem('@userID', number);
      } catch (e) {
        seterrorText('Something Went Wrong!');
      }
      props.navigation.navigate('Verify', {
        confirmation: confirmation,
        userId: number,
      });
      return number;
    } else {
      setloading(false);
      seterrorText('Invalid Phone Number!');
      console.log('Invalid phone number.');
    }
  }

  return (
    <View style={[styles.container, {backgroundColor: AppColors[Theme].white}]}>
      <View
        style={{
          width: WINDOW_WIDTH * 1.7,
          height: WINDOW_WIDTH * 1.7,
          borderRadius: (WINDOW_WIDTH * 1.7) / 2,
          backgroundColor: AppColors[Theme].secondary,
          position: 'absolute',
          transform: [
            {translateY: -WINDOW_HEIGHT * 0.5},
            {translateX: -WINDOW_WIDTH * 0.5},
          ],
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: WINDOW_WIDTH * 1.2,
            height: WINDOW_WIDTH * 1.2,
            borderRadius: (WINDOW_WIDTH * 1.2) / 2,
            backgroundColor: AppColors[Theme].primary,
          }}></View>
      </View>
      <View
        style={{
          width: WINDOW_WIDTH,
          height: WINDOW_WIDTH,
          borderRadius: WINDOW_WIDTH / 2,
          backgroundColor: AppColors[Theme].secondary,
          position: 'absolute',
          transform: [
            {translateY: WINDOW_HEIGHT * 0.5},
            {translateX: WINDOW_WIDTH * 0.5},
          ],
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: WINDOW_WIDTH * 1.2,
            height: WINDOW_WIDTH * 1.2,
            borderRadius: (WINDOW_WIDTH * 1.2) / 2,
            backgroundColor: AppColors[Theme].secondary,
          }}></View>
      </View>
      <View
        style={{
          height: WINDOW_HEIGHT * 0.25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={[
            styles.iconContainer,
            {backgroundColor: AppColors[Theme].primary},
          ]}>
          <View style={{paddingRight: 15}}>
            <MaterialCommunityIcons
              name="account-key"
              size={50}
              color={AppColors[Theme].white}
            />
          </View>
        </View>
      </View>
      <EmailInput
        onChangeText={val => {
          setphoneNumber(val);
        }}
      />
      <PrimaryButton
        onPress={() => formatPhoneNumber(phoneNumber)}
        text={AppStrings[Language].login}
        loading={loading}
      />
      {errorText ? (
        <PrimaryTextComp text={errorText} customTextStyle={{color: 'red'}} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    height: 120,
    width: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
