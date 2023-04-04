import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useContext, useRef} from 'react';
import {AppColors} from '../utils/AppStyle';
import AppContext from '../utils/AppContext';

export default function OtpComp() {
  const {Language, Theme} = useContext(AppContext);
  const inputOne = useRef();
  const inputTwo = useRef();
  const inputThree = useRef();
  const inputFour = useRef();

  return (
    <View style={styles.otpContainer}>
      <TextInput
        ref={inputOne}
        textAlign="center"
        style={[
          styles.textInputHidden,
          {borderBottomColor: AppColors[Theme].primary},
        ]}
        maxLength={1}
        keyboardType={'number-pad'}
        onChangeText={(val)=>{val===""||val===null ? inputOne.current.focus() :inputTwo.current.focus()}}
      />
      <TextInput
      ref={inputTwo}
        textAlign="center"
        style={[
          styles.textInputHidden,
          {borderBottomColor: AppColors[Theme].primary},
        ]}
        maxLength={1}
        keyboardType={'number-pad'}
        onChangeText={(val)=>{
            console.log('Helo',val)
            val===""||val===null ? inputOne.current.focus() :inputThree.current.focus()
        }}
      />
      <TextInput
      ref={inputThree}
        textAlign="center"
        style={[
          styles.textInputHidden,
          {borderBottomColor: AppColors[Theme].primary},
        ]}
        maxLength={1}
        keyboardType={'number-pad'}
        onChangeText={(val)=>{val==="" ||val===null? inputTwo.current.focus() : inputFour.current.focus()}}
      />
      <TextInput
      ref={inputFour}
        textAlign="center"
        style={[
          styles.textInputHidden,
          {borderBottomColor: AppColors[Theme].primary},
        ]}
        maxLength={1}
        keyboardType={'number-pad'}
        onChangeText={(val)=>{val==="" ||val===null? inputThree.current.focus() : null}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  otpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical:10
  },
  textInputHidden: {
    width: 50,
    borderBottomWidth: 2,
    padding: 15,
    marginHorizontal: 10,
  },
});