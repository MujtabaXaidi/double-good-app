import {StyleSheet, Text, View} from 'react-native';
import React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './app/screens/Splash';
import Login from './app/screens/Login';
import AppContext from './app/utils/AppContext';
import Register from './app/screens/Register';
import Verify from './app/screens/Verify';
import Home from './app/screens/Home';
import Profile from './app/screens/Profile';
import Account from './app/screens/Account';
import About from './app/screens/About';
import EventCode from './app/screens/EventCode';
import ScheduleEvent from './app/screens/ScheduleEvent';
import AddEventDetails from './app/screens/AddEventDetails';
import EventInfo from './app/screens/EventInfo';
import EnterUserDetail from './app/screens/EnterUserDetail';

const StackContainer = createNativeStackNavigator();
const SplashStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const ProfileHandler = ()=>{
  return(
    <ProfileStack.Navigator screenOptions={{headerShown:false}}>
      <ProfileStack.Screen component={Profile} name='Profile'/>
      <ProfileStack.Screen component={Account} name='Account'/>
      <ProfileStack.Screen component={About} name='About'/>
    </ProfileStack.Navigator>
  )
}

const HomeNavHandler = ()=>{
  return(
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen component={Home} name='Home'/>
      <HomeStack.Screen component={EventCode} name='EventCode'/>
      <HomeStack.Screen component={ScheduleEvent} name='ScheduleEvent'/>
      <HomeStack.Screen component={AddEventDetails} name='AddEventDetails'/>
      <HomeStack.Screen component={EventInfo} name='EventInfo'/>
    </HomeStack.Navigator>
  )
}

const SplashNavHandler = () => {
  return (
    <SplashStack.Navigator screenOptions={{headerShown: false}}>
      <SplashStack.Screen component={Splash} name="SplashStack" />
    </SplashStack.Navigator>
  );
};

const AuthStackHandler = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen component={Login} name="Login" />
      <AuthStack.Screen component={Register} name='Register'/>
      <AuthStack.Screen component={Verify} name='Verify'/>
      <AuthStack.Screen component={EnterUserDetail}  name='EnterUserDetail'/>
    </AuthStack.Navigator>
  );
};

const NavHandler = () => {
  return (
    <StackContainer.Navigator screenOptions={{headerShown: false}}>
      <StackContainer.Screen component={SplashNavHandler} name="Splash" />
      <StackContainer.Screen component={AuthStackHandler} name="AuthStack" />
      <StackContainer.Screen component={HomeNavHandler} name='HomeNavHandler'/>
      <StackContainer.Screen component={ProfileHandler} name='ProfileHandler'/>
    </StackContainer.Navigator>
  );
};

export default function App() {
  const [Language, setLanguage] = useState('en')
  const [Theme, setTheme] = useState('blue')
  const [userID, setUserID] = useState('')
  return (
    <AppContext.Provider value={{
      Language,
      setLanguage,
      Theme,
      setTheme,
      userID,
      setUserID
    }}>
      <NavigationContainer>
        <NavHandler />
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({});
