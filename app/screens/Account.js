import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState,useEffect} from 'react';
import Header from '../components/Header';
import TextInputComp from '../components/TextInputComp';
import {AppColors} from '../utils/AppStyle';
import AppContext from '../utils/AppContext';
import PrimaryButton from '../components/PrimaryButton';
import databaseInstance from '../database/FirebaseUtils';

export default function Account(props) {
  const {Theme, Language, userID} = useContext(AppContext);
  const [userDATA, setUserDATA] = useState();
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  useEffect(() => {
    getUserData();
  }, []);


  const getUserData = () => {
    databaseInstance.getSinglerUser(userID).then(res => {
      setUserDATA(res);
      setUserName(res._data?.username)
      setEmail(res._data?.email)
      console.log('res of user', res);
    });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors[Theme].white,
        alignItems: 'center',
      }}>
      <Header
        backIcon={true}
        title={'Account'}
        onBackPress={() => props.navigation.goBack()}
      />
      <TextInputComp title={'Name'} value={userName} onChangeText={(val)=>{setUserName(val)}}/>
      <TextInputComp title={'Email Address'} value={email} onChangeText={(val)=>{setEmail(val)}}/>
      <PrimaryButton customStyle={{marginTop: 25}} text={'Save'} />
    </View>
  );
}

const styles = StyleSheet.create({});
