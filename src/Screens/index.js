import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontIcon from 'react-native-vector-icons/dist/Ionicons';
import {View, Text, Button} from 'react-native';
import SplashScreen from './SplashScreen';
import MainScreen from './MainScreen';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {TouchableNativeFeedback} from 'react-native';
import SideBar from './SideBar';

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: MainScreen,
  },
  {
    drawerPosition: 'right',
    drawerType: 'front',
    drawerWidth: 250,
  },
);
MyDrawerNavigator.navigationOptions = ({navigation}) => ({
  headerLeft: (
    <View
      style={{
        marginLeft: 10,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 25, color: '#fff', marginRight: 10}}>
        <FontIcon name="ios-analytics" size={30} color="#fff" />
      </Text>
      <Text style={{fontSize: 25, color: '#fff'}}>Dax Papers</Text>
    </View>
  ),
  headerRight: (
    <TouchableNativeFeedback>
      <Icon
        name="dehaze"
        size={30}
        color="#fff"
        style={{marginRight: 10}}
        onPress={() => navigation.openDrawer()}
      />
    </TouchableNativeFeedback>
  ),
  headerStyle: {
    backgroundColor: '#73c0b0',
    elevation: 0,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});
const MainStackNavigator = createStackNavigator(
  {
    Home: SplashScreen,
    Main: MyDrawerNavigator,
  },
  {
    initialRouteName: 'Home',
  },
);
const MainAppContainer = createAppContainer(MainStackNavigator);
const Screens = () => {
  return <MainAppContainer />;
};
export default Screens;
