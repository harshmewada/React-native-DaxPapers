import React, {useState} from 'react';
import setWallPaper from '../functions/setWallPaper';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableHighlight,
  Image,
  ProgressBarAndroid,
} from 'react-native';
import UserCard from './userCard';
import Button from './customButton';
import reqStorage from '../functions/reqPermission';

const ModalScreen = props => {
  const [loading, setLoading] = useState(true);
  const url = props.data.urls;
  const download = props.data.links.download;
  const name = props.data.alt_description;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={() => {
        props.closereq();
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.internalContainer}>
          <View style={styles.imgContainer}>
            <Image
              onLoad={() => setLoading(false)}
              resizeMode="cover"
              source={{
                uri: `${url.regular}`,
              }}
              style={{height: `${loading ? '0%' : '100%'}`, width: '100%'}}
            />
            {loading ? (
              <View style={styles.ProgressBarAndroid}>
                <ProgressBarAndroid />
              </View>
            ) : null}
          </View>
          <View style={styles.action}>
            <View style={styles.UserCard}>
              <UserCard user={props.data.user} />
            </View>

            <View style={styles.buttons}>
              <View style={styles.dload}>
                <Button
                  backgroundColor="#f5f5f5"
                  textColor="black"
                  title="DOWNLOAD"
                  press={() => reqStorage(download, name)}
                />
              </View>
              <View style={styles.set}>
                <Button
                  backgroundColor="#73c0b0"
                  textColor="white"
                  title="SET AS WALLPAPER"
                  set={() => setWallPaper(download)}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalScreen;
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',

    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  internalContainer: {
    width: '80%',
    borderColor: 'white',
    borderWidth: 5,
    height: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    elevation: 20,
    flexDirection: 'column',
  },
  ProgressBarAndroid: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    flex: 8,
  },
  action: {
    flex: 2,
  },
  UserCard: {
    flex: 3,
  },
  buttons: {
    flex: 2,
    marginTop: 10,
    // borderColor: 'black',
    // borderWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
  dload: {
    flex: 2,
    padding: 1,
    height: '80%',
    marginRight: 8,
  },
  set: {
    padding: 1,
    height: '80%',
    flex: 3,
  },
});
