import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from '../screens/Chat';
import EventTeam from '../screens/EventTeam';
import EventStore from '../screens/EventStore';

const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Event" component={EventTeam} />
      <Tab.Screen name="My Store" component={EventStore} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})