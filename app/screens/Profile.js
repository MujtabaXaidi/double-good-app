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

export default function Profile(props) {
  const {Theme} = useContext(AppContext);
  return (
    <View style={{flex: 1, backgroundColor: AppColors[Theme].white,alignItems:'center'}}>
      <Header
        title={'Settings'}
        backIcon={true}
        onBackPress={() => {
          props.navigation.goBack();
        }}
      />
      <View style={{width: WINDOW_WIDTH, alignItems: 'center'}}>
        <TouchableOpacity
            onPress={()=>{props.navigation.navigate('Account')}}
          style={[styles.item, {backgroundColor: AppColors[Theme].primary}]}>
          <MaterialCommunityIcons
            name="account"
            size={24}
            style={{marginLeft: 10, marginBottom: 5}}
            color={AppColors[Theme].white}
          />
          <PrimaryTextComp
            text={'Account'}
            customStyle={{marginLeft: 30, marginBottom: 0, marginTop: 0}}
            customTextStyle={{
              fontSize: AppFontSize.medium,
              color: AppColors[Theme].white,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.item, {backgroundColor: AppColors[Theme].secondary}]}>
          <MaterialCommunityIcons
            name="format-list-bulleted-square"
            size={24}
            style={{marginLeft: 10, marginBottom: 5}}
            color={AppColors[Theme].white}
          />
          <PrimaryTextComp
            text={'Fundraising Events'}
            customStyle={{marginLeft: 30, marginBottom: 0, marginTop: 0}}
            customTextStyle={{
              fontSize: AppFontSize.medium,
              color: AppColors[Theme].white,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{props.navigation.navigate('About')}}
          style={[styles.item, {backgroundColor: AppColors[Theme].tertiary}]}>
          <MaterialCommunityIcons
            name="information-outline"
            size={24}
            style={{marginLeft: 10, marginBottom: 3}}
            color={AppColors[Theme].white}
          />
          <PrimaryTextComp
            text={'About'}
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
