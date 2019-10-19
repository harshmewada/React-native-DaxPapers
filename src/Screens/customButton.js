import React from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';

const Button = props => {
  const dload = () => props.press();
  const set = () => props.set();
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: props.backgroundColor,
        elevation: 1,
        borderColor: 'white',
        borderWidth: 2,
      }}>
      <TouchableNativeFeedback onPress={set}>
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: props.textColor}}>{props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
export default Button;
