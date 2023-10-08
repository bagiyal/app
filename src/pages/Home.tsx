import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import BottomNav from './TopNav';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <Text> this is home</Text> */}
      {/* <BottomNav /> */}
      <Image source={require('../../assets/krsna.jpg')} style={styles.banner} />
      <View style={styles.event}>
        <Text style={styles.eventHeader}> Event & Festiable</Text>
        <Text style={styles.eventHeader}> See All</Text>
      </View>
      <View style={styles.updates}>
        <View style={styles.updatedCard}>
        <Image source={require('../../assets/radhe.png')} style={styles.updatedCardImage} />
        <Text style={styles.updatedCardHead}>ekdasi 10 October</Text>
        </View>

      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  banner: {
    width: '100%',
    height: scale(275),
    marginTop: scale(160)
  },
  event: {
    margin: 3,
    flexDirection:'row',
    justifyContent:'space-around',
    marginHorizontal: scale(-75), // Add horizontal margin for spacing
  },
  eventHeader: {
    fontSize: 18,
    color: 'black',
  },
  updates:{
    marginLeft: scale(10),
    marginTop: scale(10),
  },
  updatedCardImage: {
    width: scale(115),
    height: scale(115),
    borderRadius: scale(13),
    marginLeft: scale(10),
    marginTop: scale(5),
  },
  updatedCardHead: {
    fontSize: 17,
    color: 'black',
    textAlign:'center'
  },
  updatedCard:{
    width: scale(135),
    height: scale(135),
    // backgroundColor:'yellow',
  }
});
