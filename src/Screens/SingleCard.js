import React from 'react';
import { Card, View, Text } from 'react-native-ui-lib';
import { StyleSheet, Dimensions, Modal, Button } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const SingleCard = props => {
  const [open, setOpen] = React.useState(false);
  const { height, width } = Dimensions.get('window');
  const Small = props.text.urls.small
  // console.log(props.text.id)
  const styles = StyleSheet.create({

    CardView: {
      elevation: 5,
      width: width / 2.3,

      borderColor: 'white',
      borderWidth: 5,
      borderRadius: 0,

    },
    cardText: {
      color: '#fff',
    },
    cardImage: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: width / 2.4,
      height: height / 2.6
      ,
      alignSelf: 'center'


    },
  });


  return (
    <Card style={styles.CardView}>
      {/* {console.log('hiiiisadiasdasdasdd', )} */}
      {/* <Text>This is SingleCard</Text> */}
      <TouchableNativeFeedback >

        <Card.Image
          imageSource={{
            uri: `${Small}`,
          }}

          style={styles.cardImage}></Card.Image>
      </TouchableNativeFeedback>
    </Card>
  );
};
export default SingleCard;
