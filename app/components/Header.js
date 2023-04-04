import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import PrimaryTextComp from './PrimaryTextComp';
import {AppColors, AppFontSize, WINDOW_HEIGHT, WINDOW_WIDTH} from '../utils/AppStyle';
import AppContext from '../utils/AppContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header({title, backIcon, onBackPress,customStyle}) {
  const {Theme} = useContext(AppContext);
  return (
    <View
      style={[{
        flexDirection: 'row',
        backgroundColor: AppColors[Theme].white,
        alignItems: 'center',
        height: WINDOW_HEIGHT * 0.075,
      },customStyle]}>
      {backIcon ? (
        <TouchableOpacity onPress={onBackPress}>
          <MaterialCommunityIcons name="keyboard-backspace" size={24} color={'black'} style={{marginLeft:10}}/>
        </TouchableOpacity>
      ) : null}
      <View style={{width:WINDOW_WIDTH*0.8,alignItems:'center'}}>
        <PrimaryTextComp
          text={title}
          customTextStyle={{fontSize: AppFontSize.medium,color:AppColors[Theme].black}}
        />
      </View>
            

    </View>
  );
}

const styles = StyleSheet.create({});
