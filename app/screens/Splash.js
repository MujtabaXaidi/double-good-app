import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useContext} from 'react'
import { AppColors,AppFontFamily } from '../utils/AppStyle'
import AppContext from '../utils/AppContext'

export default function Splash(props) {
  const {Theme}= useContext(AppContext)
    useEffect(() => {
      setTimeout(()=>{
        props.navigation.navigate('AuthStack')
      },3000)
    }, [])
    
  return (
    <View style={[styles.container,{backgroundColor: AppColors[Theme].primary}]}>
      <View style={[styles.circleOne,{backgroundColor:AppColors[Theme].whiteRGBA}]}>
        <View style={[styles.circleTwo,{backgroundColor:AppColors[Theme].whiteRGBA}]}>
          <Text style={[styles.welcome,{fontFamily:AppFontFamily.bold,color:AppColors[Theme].black}]}>Welcome</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },
      circleOne:{
        width:200,
        height:200,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
      },
      circleTwo:{
        width:150,
        height:150,
        borderRadius:75,
        alignItems:'center',
        justifyContent:'center'
      },
      welcome:{
        fontSize:24,
      }
})