import { StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useContext,useState} from 'react'
import Header from '../components/Header'
import { AppColors, AppFontFamily, AppFontSize, WINDOW_HEIGHT,WINDOW_WIDTH } from '../utils/AppStyle'
import AppContext from '../utils/AppContext'
import { AppStrings } from '../utils/AppStrings'
import PrimaryTextComp from '../components/PrimaryTextComp'
import OtpComp from '../components/OtpComp'
import databaseInstance from '../database/FirebaseUtils'
import { EventModel } from '../model/EventModel'

export default function EventCode(props) {
    const {Theme,Language,userID} = useContext(AppContext);
    const [eventCodeText, seteventCodeText] = useState('')

    const getEventWithCode = async ()=>{
      console.log('event code hit')
      databaseInstance.getDocumentWithEventCode(eventCodeText).then(res=>{
        console.log('res', res._data.eventCode)
        console.log(userID)
        let date=new Date()
        if(res.exists){

          let newEvent = new EventModel(
            userID,
            res._data.eventCode,
            res._data.eventName,
            // res._data.startDate,
            // res._data.endDate,
            date,
            date,
            res._data.teamActivity,
            res._data.status,
            res._data.eventCode
          );
          newEvent.setMyEvent(false)
          databaseInstance.addUserEvent(newEvent).then(res=>{
            console.log('res', res)
          })
        }
      })
    }

  return (
    <View style={{flex:1,backgroundColor:AppColors[Theme].white}}>
        <View
        style={{
          width: WINDOW_WIDTH * 1.7,
          height: WINDOW_WIDTH * 1.7,
          borderRadius: (WINDOW_WIDTH * 1.7) / 2,
          backgroundColor: AppColors[Theme].secondary,
          position: 'absolute',
          transform: [
            {translateY: -WINDOW_HEIGHT * 0.5},
            {translateX: -WINDOW_WIDTH*0.1},
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
        <Header
        backIcon={true}
        customStyle={{backgroundColor:'transparent'}}
        onBackPress={()=>{props.navigation.goBack()}}
        />
        <View style={{alignItems:'center',justifyContent:'center',height:WINDOW_HEIGHT*0.7}}>
      <PrimaryTextComp
      text={AppStrings[Language].enterEventCode}
      customTextStyle={{fontFamily:AppFontFamily.bold,fontSize:AppFontSize.large,color:AppColors[Theme].primary}}
      />
      <PrimaryTextComp
      text={AppStrings[Language].eventCodeEnterMessage}
      customStyle={{width:WINDOW_WIDTH*0.7}}
      customTextStyle={{textAlign:'center',fontSize:AppFontSize.medium}}
      />
      {/* <OtpComp
      onChange={getEventWithCode}
      /> */}
      <TextInput
      textAlign='center'
      style={{width:WINDOW_WIDTH*0.5,borderBottomColor:'black',borderBottomWidth:1}}
      value={eventCodeText}
      onChangeText={(val)=>seteventCodeText(val)}
      onSubmitEditing={getEventWithCode}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})