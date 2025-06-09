import React from 'react';
import { colors } from './util/color'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
const button = ({
  title
  , type
  , onPress }:
  {
    title: string;
    type: 'top' | 'right' | 'number';
    onPress: Function
  }) => {
  return (
    <TouchableOpacity style={[
      styles.button,
      {
        backgroundColor:
          type == "top"
            ? colors.btnDark
            : type == "right"
              ? colors.btnRight
              : colors.btnLight,
      },
    ]}
      onPress={onPress}>
      <Text style={{
        fontSize: 25,
        color: type == "number" ? colors.black : colors.white,
      }} >
        {title}
      </Text>
    </TouchableOpacity>

  );
};
const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.dark

  }

});
export default button 