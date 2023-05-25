import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from 'react-native';
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

export default function PrimaryButton({
  customStyle,
  customTextStyle,
  customView,
  onPress,
  text,
  loading,
}) {
  const {Theme, Language} = useContext(AppContext);
  return (
    <View
      style={[{width: WINDOW_WIDTH, alignItems: 'center', marginVertical: 10},customView]}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            width: MAINCARD_WIDTH,
            height: WINDOW_HEIGHT * 0.05,
            backgroundColor: !loading
              ? AppColors[Theme].primary
              : AppColors[Theme].grey,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          },
          customStyle,
        ]}>
        {!loading ? (
          <Text
            style={[
              {
                fontFamily: AppFontFamily.bold,
                fontSize: AppFontSize.medium,
                color: AppColors[Theme].white,
              },
              customTextStyle,
            ]}>
            {text}
          </Text>
        ) : (
          <ActivityIndicator color={AppColors[Theme].white} size={'small'} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
