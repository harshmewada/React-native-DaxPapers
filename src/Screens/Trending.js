import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, StyleSheet, ActivityIndicator, TouchableNativeFeedback } from "react-native";
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import Unsplash, { toJson } from 'unsplash-js/native';
import SingleCard from './SingleCard'
import ModalScreen from './ModalScreen'

const Trending = () => {
  let Width = Dimensions.get("window").width
  let Height = Dimensions.get("window").height
  const [visible, setVisible] = useState(false)
  const [modalData, setModalData] = useState()
  const [pages, setPages] = useState(1)
  const [imagenum, setImageNum] = useState(50)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [dataprovider, setDataProvider] = useState(new DataProvider((r1, r2) => {
    return r1 !== r2;
  }))

  const layoutProvider = new LayoutProvider(
    index => {
      return 0;
    },
    (type, dim) => {
      switch (type) {
        case 0:
          dim.width = Width / 2.01,
            dim.height = Height / 2.4
          break;
      }
    },
  );
  const unsplash = new Unsplash({
    applicationId:
      '106a139f9735777ee5e220038c1dfd52ca3f91db8491cf5094660dfc2592e4a7',
    secret: '9d5527e0b234642afa71a0bca96afaa14bf14bd000fabc693e31a29cfcb9d7ea',
  });
  rowRenderer = (type, data) => {
    return (
      <View style={styles.card}>
        <TouchableNativeFeedback onPress={() => { setVisible(true), setModalData(data) }}>
          <View style={styles.card} >
            <SingleCard text={data} /></View>
        </TouchableNativeFeedback>
      </View>


    )
  }
  renderFooter = (props) => {
    return (
      <View style={styles.ActivityIndicator}>
        <View>
          <Text style={style.loadingLabel}>Loading</Text>
          <ActivityIndicator size={30} color='#73c0b0' />
        </View>

      </View >
    )
  }
  justasync = async () => {
    await setDataProvider(dataprovider.cloneWithRows(data))
    console.log('just async completed')
    setLoading(false)

  }
  fetchdata = async () => {
    setLoading(true)

    const a = await unsplash.photos.listPhotos(pages, imagenum, 'popular').then(toJson).then(b => setData(data.concat(b)))

    return a
  }
  useEffect(() => {
    console.log('Effect started ,data changed')
    console.log(dataprovider._data.length, 'lenght')
  }, [dataprovider._data])
  useEffect(() => {

    async function hi() {
      await fetchdata()

      await justasync()
      console.log('Hi function completed')
    }
    hi()






  }, [pages])






  return (
    <View style={styles.mainContainer}>
      {visible && <ModalScreen visible={visible} closereq={() => setVisible(false)} data={modalData} />}{

      }
      {dataprovider._data.length > 0 ? <RecyclerListView
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.RecyclerListView}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          setPages(pages => pages + 1)

        }}
        rowRenderer={rowRenderer}
        dataProvider={dataprovider}
        renderAheadOffset={500}
        layoutProvider={layoutProvider}



      /> : null}
      {loading && <View style={styles.ActivityIndicator}>

        <Text style={styles.loadingLabel}>Loading</Text>
        <ActivityIndicator size={30} color='#fff' />


      </View >}
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',



  },
  RecyclerListView: {
    flex: 1,
    alignContent: 'center'

  }
  ,
  contentContainerStyle: {
    marginTop: 10,


  },
  card: {

    marginTop: 10,



    alignItems: 'center',

  },
  ActivityIndicator: {
    width: '40%'
    , position: 'absolute',
    bottom: 10,
    alignSelf: 'center'
    ,
    height: 45,
    backgroundColor: '#73c0b0',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  loadingLabel: {
    color: '#fff',
    fontSize: 15,
    marginRight: 10
  }
})
export default Trending