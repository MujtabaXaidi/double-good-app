import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext,useState} from 'react';
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

export default function Login(props) {
  const {Theme, Language} = useContext(AppContext);
  const [phoneNumber, setphoneNumber] = useState('');
  const [errorText, seterrorText] = useState('')

  function formatPhoneNumber(phoneNumber) {
    seterrorText('')
    // Remove all non-digits from the phone number
    let number = phoneNumber
    number = number.replace(/\D/g, '');

    // Apply regex to format phone number into bracket format
    const phoneRegex = /^(\d{3})(\d{3})(\d{4})$/;
    const match = number.match(phoneRegex);

    if (match) {
      const formattedPhoneNumber = `(${match[1]}) ${match[2]}-${match[3]}`;
      console.log('number is valid', number)
      return formattedPhoneNumber;
    } else {
      seterrorText('Invalid Phone Number!')
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
      
      />
      <PrimaryButton
        onPress={() => formatPhoneNumber(phoneNumber)}
        text={AppStrings[Language].login}
      />
      {errorText?
      <PrimaryTextComp
      text={errorText}
      customTextStyle={{color:'red'}}
      />:null}
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
