import {StyleSheet, View, Text, TextComponent, TextInput} from 'react-native';
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
import PrimaryTextComp from './PrimaryTextComp';

export default function TextInputComp({title,onChangeText,customStyle,placeholder,value}) {
  const {Theme} = useContext(AppContext);
  return (
    <View
      style={[{
        width: MAINCARD_WIDTH,
        backgroundColor: AppColors[Theme].lightGrey,
        marginTop: 20,
        borderRadius: 10,
        height: WINDOW_HEIGHT * 0.09,
        borderWidth: 0.5,
      },customStyle]}>
        <Text style={{marginLeft:10,marginTop:5,fontFamily:AppFontFamily.regular,fontSize:AppFontSize.small,color:AppColors[Theme].primary}}>{title}</Text>
      <TextInput
        style={{width: WINDOW_WIDTH * 0.5, marginLeft: 10, marginTop: 0,color:'black'}}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
