import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { MAINCARD_WIDTH, WINDOW_WIDTH } from '../utils/AppStyle'
import PrimaryTextComp from '../components/PrimaryTextComp'
import Header from '../components/Header'
import databaseInstance from '../database/FirebaseUtils'
import AppContext from '../utils/AppContext'

const dummyData = [
    {
        name:'Event',
        image:'',
        status:true,
    },
    {
        name:'Event',
        image:'',
        status:false,
    },
]

export default function AllEvents(props) {
    const {Theme,userID,Language}=useContext(AppContext)
    const handleDeleteEvent=()=>{
        databaseInstance.deleteEvent(userID).then(res=>{
            console.log('res delete event', res)
        })
    }
  return (
    <View style={{flex:1,alignItems:'center',backgroundColor:'white'}}>
        <Header
        backIcon={true}
        title={'Events List'}
        onBackPress={()=>{props.navigation.goBack()}}
        />
        <FlatList
        data={dummyData}
        contentContainerStyle={{width:MAINCARD_WIDTH}}
        ItemSeparatorComponent={()=>{
            return(
                <View style={{alignItems: 'center'}}>
            <View
              style={{
                
                borderColor: 'grey',
                borderBottomWidth: 0.5,
                width: MAINCARD_WIDTH,
              }}
            /></View>
            )
        }}
        renderItem={({item})=>{
            return(
                <View style={{flexDirection:'row',justifyContent:'space-between',width:MAINCARD_WIDTH}}>
                    <PrimaryTextComp
                    text={item.name}
                    
                    />
                    {item.status?
                    <TouchableOpacity onPress={()=>handleDeleteEvent()}>
                    <PrimaryTextComp
                    text={'delete'}
                    customTextStyle={{color:'red'}}
                    />
                    </TouchableOpacity>
                    :null}
                </View>
            )
        }}
        />
    </View>
  )
}

const styles = StyleSheet.create({})