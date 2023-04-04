import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {
  AppColors,
  AppFontFamily,
  AppFontSize,
  MAINCARD_WIDTH,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../utils/AppStyle';
import AppContext from '../utils/AppContext';
import EmailInput from '../components/EmailInput';
import PrimaryButton from '../components/PrimaryButton';
import PrimaryTextComp from '../components/PrimaryTextComp';
import {AppStrings} from '../utils/AppStrings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Register(props) {
  const {Theme, Language} = useContext(AppContext);
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
      <EmailInput />
      <PrimaryButton onPress={() => props.navigation.navigate('Register')} />
      <PrimaryTextComp
        text={AppStrings[Language].register}
        customTextStyle={{
          color: AppColors[Theme].secondary,
          fontSize: AppFontSize.medium,
          fontFamily: AppFontFamily.bold,
        }}
      />
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
