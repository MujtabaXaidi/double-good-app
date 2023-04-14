import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useContext} from 'react';
import {AppFontFamily, AppFontSize, MAINCARD_WIDTH, WINDOW_WIDTH} from '../utils/AppStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppColors} from '../utils/AppStyle';
import AppContext from '../utils/AppContext';
import {AppStrings} from '../utils/AppStrings';

export default function EmailInput({onChangeText,onFocus}) {
  const {Theme, Language} = useContext(AppContext);
  return (
    <View style={[styles.mainContainer]}>
      <View
        style={[
          styles.container,
          {borderBottomColor: AppColors[Theme].primary},
        ]}>
        <Text
          style={{
            fontFamily: AppFontFamily.bold,
            color: AppColors[Theme].primary,
            fontSize: AppFontSize.large
          }}>
          {AppStrings[Language].phoneNumber}
        </Text>
        <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
          <TextInput
            style={[styles.input]}
            placeholder={AppStrings[Language].phoneNumber}
            keyboardType="numeric"
            onChangeText={onChangeText}
            onFocus={onFocus}
          />
          <MaterialCommunityIcons
            name="phone"
            size={24}
            color={AppColors[Theme].primary}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH * 0.85,
    borderBottomWidth: 1,
    justifyContent:'space-between',
    marginVertical:10,
  },
  input: {
    width: WINDOW_WIDTH * 0.7,
    color:'black'
  },
  mainContainer: {
    width: MAINCARD_WIDTH,
  },
});
