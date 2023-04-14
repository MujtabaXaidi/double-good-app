import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import TextInputComp from '../components/TextInputComp';
import PrimaryTextComp from '../components/PrimaryTextComp';
import PrimaryButton from '../components/PrimaryButton';
import {AppColors, AppFontFamily, AppFontSize, WINDOW_HEIGHT, WINDOW_WIDTH} from '../utils/AppStyle';
import AppContext from '../utils/AppContext';
import {AppStrings} from '../utils/AppStrings';
import databaseInstance from '../database/FirebaseUtils';
import { UserModel } from '../model/userModel';

export default function EnterUserDetail(props) {
  const {Theme, Language} = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorText, seterrorText] = useState('');
  const [loading, setloading] = useState(false)

  function BackgroundCircle(){
    return(
        <>
        <View
        style={{
          width: WINDOW_WIDTH * 1.7,
          height: WINDOW_WIDTH * 1.7,
          borderRadius: (WINDOW_WIDTH * 1.7) / 2,
          backgroundColor: AppColors[Theme].secondary,
          position: 'absolute',
          transform: [
            {translateY: -WINDOW_HEIGHT * 0.5},
            {translateX: -WINDOW_WIDTH * 0.5},
          ],
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: WINDOW_WIDTH * 1.2,
            height: WINDOW_WIDTH * 1.2,
            borderRadius: (WINDOW_WIDTH * 1.2) / 2,
            backgroundColor: AppColors[Theme].primary,
          }}></View>
      </View>
      <View
        style={{
          width: WINDOW_WIDTH,
          height: WINDOW_WIDTH,
          borderRadius: WINDOW_WIDTH / 2,
          backgroundColor: AppColors[Theme].secondary,
          position: 'absolute',
          transform: [
            {translateY: WINDOW_HEIGHT * 0.5},
            {translateX: WINDOW_WIDTH * 0.5},
          ],
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: WINDOW_WIDTH * 1.2,
            height: WINDOW_WIDTH * 1.2,
            borderRadius: (WINDOW_WIDTH * 1.2) / 2,
            backgroundColor: AppColors[Theme].secondary,
          }}></View>
      </View>
      </>
    )
  }
  async function updateUserInfo(){
    seterrorText('')
    setloading(true)
    if(!isValidEmail(email)){
        seterrorText("Invalid Email Address!")
        setloading(false)
        return
    }
        let user= new UserModel(name,props.route.params.userId,email)
        databaseInstance.updateUserInfo(user).then(res=>{
            console.log('update user', res)
            props.navigation.navigate('HomeNavHandler');
        })
        setloading(false)
  }


  function isValidEmail(email) {
    const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (emailRegex.test(email)) {
        console.log("Valid email address");
        return true;
      } else {
        console.log("Invalid email address");
        return false;
    }
  }
  

  return (
    <View style={styles.container}>
        <BackgroundCircle/>
        <PrimaryTextComp
        text={AppStrings[Language].enterUserDetails}
        customTextStyle={{color:AppColors[Theme].primary,fontFamily:AppFontFamily.bold,fontSize:AppFontSize.large}}
        />
      <TextInputComp
        title={AppStrings[Language].name}
        onChangeText={val => {
          setName(val);
        }}
      />
      <TextInputComp
        title={AppStrings[Language].email}
        onChangeText={val => {
          setEmail(val);
        }}
      />
      <PrimaryButton
      text={AppStrings[Language].confirm}
      onPress={()=>{updateUserInfo()}}
      />
      {errorText ? (
        <PrimaryTextComp text={errorText} customTextStyle={{color: 'red'}} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
});
