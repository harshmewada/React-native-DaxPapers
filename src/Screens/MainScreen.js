import React from 'react';
import { View, Text, Button } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Octicons';
import Trending from './Trending';

const Screen2 = props => {
  return (
    <View>
      <Text>This is Screen2</Text>
      <Button title="Open" onPress={() => props.navigation.openDrawer()} />
    </View>
  );
};

const Tabbar = createMaterialTopTabNavigator(
  {
    Trending: {
      screen: Trending,
      navigationOptions: {
        tabBarIcon: ({ focused, tintcolor }) => (
          <Icon name="flame" size={22} color={focused ? '#fff' : '#dce1e4'} />
        ),

      },
    },
    Explore: {
      screen: Screen2,
      navigationOptions: {
        tabBarIcon: ({ focused, tintcolor }) => (
          <Icon name="globe" size={22} color={focused ? '#fff' : '#dce1e4'} />
        ),
      },
    },
  },
  {
    lazy: true,
    tabBarOptions: {

      activeTintColor: '#fff',
      inactiveTintColor: '#dce1e4',
      pressColor: '',
      labelStyle: {
        fontSize: 17,


      },
      indicatorStyle: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#fff',
      },
      tabStyle: {
        elevation: 0,
        flexDirection: 'row-reverse'


      },
      style: {
        backgroundColor: '#73c0b0',

      },

      showIcon: true,
      upperCaseLabel: false,
    },
  },
);

export default Tabbar;
