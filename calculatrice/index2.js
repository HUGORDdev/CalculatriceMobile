import React from 'react';
import {Text,View,ScrollView,StyleSheet,Alert,TouchableOpacity} from 'react-native';
import {useNavigation,} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

const calco =()=>{
    const navigation = useNavigation();
  return(  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>DETAILS home</Text>
    <Button onPress={() => navigation.navigate('Home')}>
        Go to Details
      </Button>

  </View>
  );
}
export default calco;
  