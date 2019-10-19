import React from 'react';
import {View, Text} from 'react-native';
import WallPaperManager from 'react-native-wallpaper-manager';
import {ToastAndroid} from 'react-native';
//index.js build failed after setting a toast for success
const setWallPaper = props => {
  ToastAndroid.showWithGravityAndOffset(
    'Setting Wallpaper, Please wait',
    ToastAndroid.SHORT,
    ToastAndroid.TOP,
    20,
    50,
  );
  WallPaperManager.setWallpaper({uri: `${props}.jpg`}, res => console.log(res));
};

export default setWallPaper;
