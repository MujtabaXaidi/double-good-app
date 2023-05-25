import {StyleSheet, Text, View} from 'react-native';
import React,{useContext} from 'react';
import PrimaryTextComp from '../components/PrimaryTextComp';
import {AppColors, AppFontFamily, AppFontSize, MAINCARD_WIDTH} from '../utils/AppStyle';
import AppContext from '../utils/AppContext';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import PrimaryButton from '../components/PrimaryButton';
import Header from '../components/Header';

export default function EventStore(props) {
const {Theme,Language} = useContext(AppContext)

  return (
    <View style={{flex: 1, alignItems: 'center',backgroundColor:'white'}}>
      <Header
      backIcon={true}
      onBackPress={()=>{props.navigation.navigate('Home')}}
      />
      <PrimaryTextComp
        text={'Create Your Store'}
        customTextStyle={{
          marginTop:100,
          fontSize: AppFontSize.extraLarge,
          fontFamily: AppFontFamily.bold,
          textAlign: 'center',
          color:AppColors[Theme].primary
        }}
        customStyle={{marginLeft: 15}}
      />
      <View style={{width:MAINCARD_WIDTH}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <MaterialCommunityIcons
          name='star-outline'
          size={24}
          color={AppColors[Theme].black}
          />
          <PrimaryTextComp
          text={'Sell with your Team'}
          customStyle={{marginLeft:10}}
          customTextStyle={{color:AppColors[Theme].black}}
          />
        </View>
        <PrimaryTextComp
        text={"98% of Organizers that participate in their fundraiser help raise 2x more!"}
        />
      </View>
      <View style={{width:MAINCARD_WIDTH}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <MaterialCommunityIcons
          name='shopping-outline'
          size={24}
          color={AppColors[Theme].black}
          />
          <PrimaryTextComp
          text={'Your Virtual Pop-Up Store'}
          customStyle={{marginLeft:10}}
          customTextStyle={{color:AppColors[Theme].black}}
          />
        </View>
        <PrimaryTextComp
        text={"You will have a unique link to share with your family and friends!"}
        />
      </View>
      <PrimaryButton
      text={"Create a Pop-Up Store"}
      onPress={()=>{props.navigation.navigate('CreateStore')}}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
