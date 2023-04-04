import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import Header from '../components/Header';
import AppContext from '../utils/AppContext';
import {
  AppColors,
  AppFontSize,
  MAINCARD_WIDTH,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../utils/AppStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PrimaryTextComp from '../components/PrimaryTextComp';

export default function About(props) {
  const {Theme} = useContext(AppContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors[Theme].white,
        alignItems: 'center',
      }}>
      <Header
        title={'About'}
        backIcon={true}
        onBackPress={() => {
          props.navigation.goBack();
        }}
      />
      <View style={{width: WINDOW_WIDTH, alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            alert('Feature Unavailble');
          }}
          style={[styles.item, {backgroundColor: AppColors[Theme].primary}]}>
          <MaterialCommunityIcons
            name="account"
            size={24}
            style={{marginLeft: 10, marginBottom: 5}}
            color={AppColors[Theme].white}
          />
          <PrimaryTextComp
            text={'Privacy Policy'}
            customStyle={{marginLeft: 30, marginBottom: 0, marginTop: 0}}
            customTextStyle={{
              fontSize: AppFontSize.medium,
              color: AppColors[Theme].white,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{alert('Feature Unavailble')}}
          style={[styles.item, {backgroundColor: AppColors[Theme].secondary}]}>
          <MaterialCommunityIcons
            name="format-list-bulleted-square"
            size={24}
            style={{marginLeft: 10, marginBottom: 5}}
            color={AppColors[Theme].white}
          />
          <PrimaryTextComp
            text={'Terms & Conditions'}
            customStyle={{marginLeft: 30, marginBottom: 0, marginTop: 0}}
            customTextStyle={{
              fontSize: AppFontSize.medium,
              color: AppColors[Theme].white,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: MAINCARD_WIDTH,
    height: WINDOW_HEIGHT * 0.07,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
});
