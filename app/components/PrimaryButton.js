import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import React, {useContext} from 'react';
import AppContext from '../utils/AppContext';
import {AppStrings} from '../utils/AppStrings';
import {
  AppColors,
  AppFontFamily,
  AppFontSize,
  MAINCARD_WIDTH,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../utils/AppStyle';

export default function PrimaryButton({customStyle, customTextStyle,onPress,text}) {
  const {Theme, Language} = useContext(AppContext);
  return (
    <View
      style={[
        {width: WINDOW_WIDTH, alignItems: 'center', marginVertical: 10},
        customStyle,
      ]}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: MAINCARD_WIDTH,
          height: WINDOW_HEIGHT * 0.05,
          backgroundColor: AppColors[Theme].primary,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
        }}>
        <Text style={[{fontFamily: AppFontFamily.bold,fontSize:AppFontSize.medium,color:AppColors[Theme].white}, customTextStyle]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
