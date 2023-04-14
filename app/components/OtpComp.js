import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import {AppColors} from '../utils/AppStyle';
import AppContext from '../utils/AppContext';

export default function OtpComp(props) {
  const {Language, Theme} = useContext(AppContext);
  const inputOne = useRef();
  const inputTwo = useRef();
  const inputThree = useRef();
  const inputFour = useRef();
  const inputFive = useRef();
  const inputSix = useRef();
  const [digitOne, setdigitOne] = useState('');
  const [digitTwo, setdigitTwo] = useState('');
  const [digitThree, setdigitThree] = useState('');
  const [digitFour, setdigitFour] = useState('');
  const [digitFive, setdigitFive] = useState('');
  const [digitSix, setdigitSix] = useState('');

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
        onChangeText={val => {
          setdigitOne(val);
          val === '' || val === null
            ? inputOne.current.focus()
            : inputTwo.current.focus();
        }}
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
        onChangeText={val => {
          setdigitTwo(val);
          val === '' || val === null
            ? inputOne.current.focus()
            : inputThree.current.focus();
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
        onChangeText={val => {
          setdigitThree(val)
          val === '' || val === null
            ? inputTwo.current.focus()
            : inputFour.current.focus();
        }}
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
        onChangeText={val => {
          setdigitFour(val)
          val === '' || val === null
            ? inputThree.current.focus()
            : inputFive.current.focus();
        }}
      />
      <TextInput
        ref={inputFive}
        textAlign="center"
        style={[
          styles.textInputHidden,
          {borderBottomColor: AppColors[Theme].primary},
        ]}
        maxLength={1}
        keyboardType={'number-pad'}
        onChangeText={val => {
          setdigitFive(val)
          val === '' || val === null
            ? inputFour.current.focus()
            : inputSix.current.focus();
        }}
      />
      <TextInput
        ref={inputSix}
        textAlign="center"
        style={[
          styles.textInputHidden,
          {borderBottomColor: AppColors[Theme].primary},
        ]}
        maxLength={1}
        keyboardType={'number-pad'}
        onChangeText={val => {
          setdigitSix(val),
          props.onChange(digitOne+digitTwo+digitThree+digitFour+digitFive+val),
          val === '' || val === null ? inputFive.current.focus() : null;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  otpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  textInputHidden: {
    width: 40,
    borderBottomWidth: 2,
    padding: 15,
    marginHorizontal: 10,
    color:'black'
  },
});
