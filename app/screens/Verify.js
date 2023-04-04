import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import OtpComp from '../components/OtpComp';
import PrimaryTextComp from '../components/PrimaryTextComp';
import AppContext from '../utils/AppContext';
import {
  AppColors,
  AppFontFamily,
  AppFontSize,
  MAINCARD_WIDTH,
  WINDOW_WIDTH,
  WINDOW_HEIGHT
} from '../utils/AppStyle';
import PrimaryButton from '../components/PrimaryButton';
import {AppStrings} from '../utils/AppStrings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Verify(props) {
  const {Theme, Language} = useContext(AppContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors[Theme].white,
      }}>
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
          <View style={{paddingRight:15}}>
            <MaterialCommunityIcons
              name="security-network"
              size={100}
              color={AppColors[Theme].primary}
            />
          </View>
      <PrimaryTextComp
        text={'Enter Your OTP to Proceed'}
        customTextStyle={{
          color: AppColors[Theme].primary,
          fontFamily: AppFontFamily.bold,
          fontSize: AppFontSize.large,
        }}
      />
      <OtpComp />
      <View style={{width: MAINCARD_WIDTH}}>
        <PrimaryTextComp
          text={AppStrings[Language].verifyMessage}
          customTextStyle={{color: AppColors[Theme].black}}
        />
      </View>
      <PrimaryButton text={AppStrings[Language].verify} onPress={()=>props.navigation.navigate('HomeNavHandler')}/>
      <PrimaryTextComp text={'Resend'} customTextStyle={{fontFamily:AppFontFamily.bold,color:AppColors[Theme].primary}}/>
    </View>
  );
}

const styles = StyleSheet.create({});
