import {Image, ScrollView, StyleSheet, FlatList, View,TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import {
  AppColors,
  AppFontFamily,
  AppFontSize,
  MAINCARD_WIDTH,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../utils/AppStyle';
import PrimaryTextComp from '../components/PrimaryTextComp';
import {AppStrings} from '../utils/AppStrings';
import AppContext from '../utils/AppContext';
import {user} from '../utils/LocalData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const dummyData=[
    {
        id:1,
        name:'Video 1',
    },
    {
        id:2,
        name:'Video 2',
    },
    {
        id:3,
        name:'Video 3',
    },
    {
        id:4,
        name:'Video 4',
    },
]

export default function Home(props) {
  const [userDATA, setUserDATA] = useState(user);
  const {Theme, Language} = useContext(AppContext);
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        backgroundColor: AppColors[Theme].white,
      }}>
      <View style={{width: MAINCARD_WIDTH, alignItems: 'center'}}>
        <View style={styles.profileArea}>
          <PrimaryTextComp
            customTextStyle={{
              fontFamily: AppFontFamily.bold,
              fontSize: AppFontSize.large,
              color: AppColors[Theme].black,
            }}
            text={AppStrings[Language].hello + '\n' + userDATA.name}
          />
          <View style={styles.imageContainer}>
            <View
              style={[
                styles.notification,
                {backgroundColor: AppColors[Theme].secondary},
              ]}>
              <MaterialCommunityIcons
                name="bell-ring-outline"
                size={24}
                color={AppColors[Theme].primary}
              />
            </View>
            <TouchableOpacity onPress={()=>{
              props.navigation.navigate('ProfileHandler')
            }}>
            <Image
              style={styles.profileImage}
              source={{uri: userDATA.profileImage}}
            />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width: MAINCARD_WIDTH}}>
          <PrimaryTextComp
            text={'My Events'}
            customTextStyle={{
              color: AppColors[Theme].black,
              fontFamily: AppFontFamily.regular,
              fontSize: AppFontSize.medium,
            }}
          />
        </View>
        <TouchableOpacity
        onPress={()=>{props.navigation.navigate('EventCode')}}
          style={[
            styles.event,
            {
              backgroundColor: AppColors[Theme].primary,
              justifyContent: 'flex-end',
            },
          ]}>
          <View style={{margin: 20, justifyContent: 'flex-end'}}>
            <PrimaryTextComp
              text={'Enter an Event Code'}
              customTextStyle={{
                color: AppColors[Theme].white,
                fontFamily: AppFontFamily.bold,
                fontSize: AppFontSize.large,
              }}
            />
            <PrimaryTextComp
              text={"Enter You team's event code"}
              customTextStyle={{
                color: AppColors[Theme].secondary,
                fontFamily: AppFontFamily.regular,
                fontSize: AppFontSize.large,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{props.navigation.navigate('ScheduleEvent')}}
          style={[
            styles.organize,
            {backgroundColor: AppColors[Theme].secondary},
          ]}>
          <View style={{margin: 20, justifyContent: 'flex-end'}}>
            <PrimaryTextComp
              text={'Organize an Event'}
              customTextStyle={{
                color: AppColors[Theme].primary,
                fontFamily: AppFontFamily.bold,
                fontSize: AppFontSize.large,
              }}
            />
            <PrimaryTextComp
              text={"Schedule an event for your fundraiser"}
              customTextStyle={{
                color: AppColors[Theme].black,
                fontFamily: AppFontFamily.regular,
                fontSize: AppFontSize.medium,
              }}
            />
          </View>
        </TouchableOpacity>
        <View style={{width:MAINCARD_WIDTH}}>
        <PrimaryTextComp
        text={'Videos'}
        />
        </View>
        <View
          style={[
            styles.videoContainer,
            {backgroundColor: AppColors[Theme].tertiary},
          ]}>
          <View style={{margin: 20, justifyContent: 'flex-end'}}>
            <FlatList
            horizontal
            data={dummyData}
            renderItem={({item})=>{
                return(
                    <View style={styles.video}>
                        <PrimaryTextComp
                        text={item.name}
                        />
                    </View>
                )
            }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileArea: {
    width: MAINCARD_WIDTH,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    resizeMode: 'contain',
  },
  notification: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    marginHorizontal: 10,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  event: {
    width: MAINCARD_WIDTH,
    height: WINDOW_HEIGHT * 0.5,
    marginVertical: 10,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  organize: {
    width: MAINCARD_WIDTH,
    height: WINDOW_HEIGHT * 0.2,
    marginVertical: 10,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  videoContainer:{
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT * 0.3,
    marginTop: 10,
    justifyContent:'center'
  },
  video:{
    width:WINDOW_WIDTH*0.6,
    height:WINDOW_HEIGHT*0.25,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:10
  }
});
