import React from 'react';
import {View, Text} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import {ScrollView} from 'react-native';

const SideBar = () => {
  return (
    <ScrollView>
      <View
        style={styles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <DrawerNavigatorItems {...props} />
      </View>
    </ScrollView>
  );
};

export default SideBar;
