import { View, Text,StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'
import Calculator from './calculatrice/realy/Calculator'
const App = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
    <Calculator/>
    </SafeAreaView>
  )
}
const styles= StyleSheet.create({
  
});
export default App