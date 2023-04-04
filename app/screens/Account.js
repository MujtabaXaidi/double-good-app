import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import Header from '../components/Header'
import TextInputComp from '../components/TextInputComp'
import { AppColors } from '../utils/AppStyle'
import AppContext from '../utils/AppContext'
import PrimaryButton from '../components/PrimaryButton'

export default function Account(props) {
    const {Theme}=useContext(AppContext)
  return (
    <View style={{flex:1,backgroundColor:AppColors[Theme].white,alignItems:'center'}}>
        <Header
        backIcon={true}
        title={'Account'}
        onBackPress={()=>props.navigation.goBack()}
        />
        <TextInputComp
        title={'First Name'}
        />
        <TextInputComp
        title={'Last Name'}
        />
        <TextInputComp
        title={'Phone Number'}
        />
        <TextInputComp
        title={'Email Address'}
        />
        <PrimaryButton
        customStyle={{marginTop:25}}
        text={'Save'}
        />
    </View>
  )
}

const styles = StyleSheet.create({})