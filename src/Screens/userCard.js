import React from 'react';
import {View, Text, StyleSheet, Image, Linking} from 'react-native';

const UserCard = props => {
  // console.log(props.user, 'user');
  const image = props.user.profile_image.medium;
  const username = props.user.first_name + ' ' + props.user.last_name;
  const userUrl = props.user.links.html;
  return (
    <View style={styles.UserCard}>
      <View style={styles.cardAvatar}>
        <Image
          resizeMode="cover"
          source={{uri: `${image}`}}
          style={styles.avatar}
        />
      </View>
      <View style={styles.userDetails}>
        <Text style={styles.imageby}>Image By</Text>
        <Text style={styles.userName}>
          <Text onPress={() => Linking.openURL(userUrl)}>{username}</Text>
          <Text style={{color: '#808080'}}> on </Text>
          <Text
            style={{color: '#658fc0'}}
            onPress={() => Linking.openURL('http://unsplash.com')}>
            Unsplash
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default UserCard;
const styles = StyleSheet.create({
  UserCard: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f5f5f5',

    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 7,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
    elevation: 1,
  },
  cardAvatar: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardAvatar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: '80%',
    width: '80%',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 3,
  },
  userDetails: {
    flex: 3,
    margin: 10,
  },
  imageby: {
    color: '#808080',
    fontSize: 12,
  },
  userName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
