import React from 'react';
import {View, Text, Button} from 'react-native';

const SplashScreen = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'red'}}>This is SplashScreen</Text>
      <Button
        title="Let's Start"
        onPress={() => props.navigation.navigate('Main')}
      />
    </View>
  );
};
SplashScreen.navigationOptions = {
  header: null,
};
export default SplashScreen;
