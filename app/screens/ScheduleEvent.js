import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import Header from '../components/Header';
import AppContext from '../utils/AppContext';
import {AppStrings} from '../utils/AppStrings';
import {
  AppColors,
  AppFontSize,
  AppFontFamily,
  WINDOW_WIDTH,
  MAINCARD_WIDTH,
} from '../utils/AppStyle';
import PrimaryTextComp from '../components/PrimaryTextComp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PrimaryButton from '../components/PrimaryButton';
import { Calendar } from 'react-native-calendars';

export default function ScheduleEvent(props) {
  const {Theme, Language} = useContext(AppContext);
  return (
    <View style={{flex: 1}}>
      <Header
        backIcon={true}
        onBackPress={() => {
          props.navigation.goBack();
        }}
        customStyle={{backgroundColor: 'transparent'}}
      />
      <View style={{alignItems: 'center'}}>
        <PrimaryTextComp
          text={AppStrings[Language].organizeEvent}
          customTextStyle={{
            fontFamily: AppFontFamily.bold,
            fontSize: AppFontSize.extraLarge,
            color: AppColors[Theme].primary,
            width: MAINCARD_WIDTH,
          }}
        />
        <View
          style={{
            width: MAINCARD_WIDTH,
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop:30
          }}>
          <MaterialCommunityIcons
            name="calendar-clock"
            size={24}
            color={AppColors[Theme].black}
          />
          <View style={{marginLeft: 20}}>
            <PrimaryTextComp
              text={AppStrings[Language].pickStartDate}
              customStyle={{marginTop: 0}}
              customTextStyle={{fontFamily: AppFontFamily.bold}}
            />
            <PrimaryTextComp
              text={AppStrings[Language].selectStartDate}
              customStyle={{marginTop: 0}}
            />
          </View>
        </View>
        <View
          style={{
            width: MAINCARD_WIDTH,
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop:15
          }}>
          <MaterialCommunityIcons
            name="account-group"
            size={24}
            color={AppColors[Theme].black}
          />
          <View style={{marginLeft: 20}}>
            <PrimaryTextComp
              text={AppStrings[Language].inviteTeam}
              customStyle={{marginTop: 0}}
              customTextStyle={{fontFamily: AppFontFamily.bold}}
            />
            <PrimaryTextComp
              text={AppStrings[Language].eventCodeToTeam}
              customStyle={{marginTop: 0}}
            />
          </View>
        </View>
        <View
          style={{
            width: MAINCARD_WIDTH,
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop:15
          }}>
          <MaterialCommunityIcons
            name="cash-fast"
            size={24}
            color={AppColors[Theme].black}
          />
          <View style={{marginLeft: 20}}>
            <PrimaryTextComp
              text={AppStrings[Language].raiseDays}
              customStyle={{marginTop: 0}}
              customTextStyle={{fontFamily: AppFontFamily.bold}}
            />
            <PrimaryTextComp
              text={AppStrings[Language].raiseDaysQoute}
              customStyle={{marginTop: 0}}
            />
          </View>
        </View>
        <PrimaryButton
        onPress={()=>{props.navigation.navigate('AddEventDetails')}}
        text={AppStrings[Language].scheduleEvent}
        />
        <TouchableOpacity onPress={()=>{props.navigation.navigate('EventInfo')}}>
          <PrimaryTextComp
          text={'Event Details Screen'}
          />
          
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
