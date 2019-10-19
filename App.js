// import React from 'react';
// import {View, Text} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// // import {createStackNavigator} from 'react-navigation-stack';

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
// });

// export default createAppContainer(AppNavigator);

import React from 'react';
import Screens from './src/Screens/index';
import {View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SplashScreen from './src/Screens/SplashScreen';
import MainScreen from './src/Screens/MainScreen';

const App = () => {
  return <Screens />;
};
export default App;
