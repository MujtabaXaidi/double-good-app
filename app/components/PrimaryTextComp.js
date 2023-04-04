import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppFontFamily } from '../utils/AppStyle'

export default function ({text,customStyle,customTextStyle}) {
  return (
    <View style={[{marginVertical:10},customStyle]}>
      <Text style={[{fontFamily:AppFontFamily.regular},customTextStyle]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})