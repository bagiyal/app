import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import Profile from './Profile';
import Home from './Home';
import Darshan from './Darshan';
import Learn from './Learn';
import Donate from './Donate';
import Message from './Message';

const data = [
  { id: 0, label: 'Tab 1' },
  { id: 1, label: 'Tab 2' },
  { id: 2, label: 'Tab 3' },
  { id: 3, label: 'Tab 4' },
  { id: 4, label: 'Tab 5' },
  { id: 5, label: 'Tab 6' },
  { id: 6, label: 'Tab 7' },
];

const TopNav = () => {
  const [selected, setSelected] = useState(0);

  const scrollViewRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = (event:any) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const scrollX = contentOffset.x;
    const totalWidth = contentSize.width - layoutMeasurement.width;
    const percentage = (scrollX / totalWidth) * 100;
    setScrollPercentage(percentage);
  };


  return (
    <View style={styles.container}>
      {selected==0 ? <Home/> :selected==1 ? <Darshan /> : selected==2? <Learn/> : selected==3? <Donate/> : <Message />}
      <View style={styles.bottomNav}>
        <Text style={{ justifyContent: 'center', margin: 15, fontSize: 15, alignItems: 'center', }}> Dedicated to ISKON Founder-Acharya His Divine Grace A.C Bhaktivedanta Swami Prabhupada </Text>
        <ScrollView onScroll={handleScroll} scrollEventThrottle={16} style={styles.BottomNav2} horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, padding: 30 }}>
          <TouchableOpacity style={styles.bottomTab} onPress={() => { setSelected(0) }}>
            <View style={[styles.tabIcon, { backgroundColor: selected == 0 ? 'white' : 'transparent' }]}>
              <Image source={require('../../assets/home.png')} style={[styles.bottomImg, { tintColor: selected==0?'orange':'white' }]} />
              <Text style={[styles.imageText,{color:selected == 0 ? 'orange':'white'}]}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} onPress={() => { setSelected(1) }}>
            <View style={[styles.tabIcon, { backgroundColor: selected == 1 ? 'white' : 'transparent' }]}>
              <Image source={require('../../assets/namaste.png')} style={[styles.bottomImg, { tintColor: selected==1?'orange':'white' }]} />
              <Text style={[styles.imageText,{color:selected == 1 ? 'orange':'white'}]}>Darshan</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} onPress={() => { setSelected(2) }}>
            <View style={[styles.tabIcon, { backgroundColor: selected == 2 ? 'white' : 'transparent' }]}>
              <Image source={require('../../assets/knowledge.png')} style={[styles.bottomImg, { tintColor: selected==2?'orange':'white' }]} />
              <Text style={[styles.imageText,{color:selected == 2 ? 'orange':'white'}]}>Learn</Text> 
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} onPress={() => { setSelected(3) }}>
            <View style={[styles.tabIcon, { backgroundColor: selected == 3 ? 'white' : 'transparent' }]}>
              <Image source={require('../../assets/charity.png')} style={[styles.bottomImg, { tintColor: selected==3?'orange':'white' }]} />
              <Text style={[styles.imageText,{color:selected == 3 ? 'orange':'white'}]}>Donate</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} onPress={() => { setSelected(4) }}>
            <View style={[styles.tabIcon, { backgroundColor: selected == 4 ? 'white' : 'transparent' }]}>
              <Image source={require('../../assets/chat.png')} style={[styles.bottomImg, { tintColor: selected==4?'orange':'white' }]} />
              <Text style={[styles.imageText,{color:selected == 4 ? 'orange':'white'}]}>Message</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} onPress={() => { setSelected(5) }}>
            <View style={[styles.tabIcon, { backgroundColor: selected == 5 ? 'white' : 'transparent' }]}>
              <Image source={require('../../assets/home.png')} style={[styles.bottomImg, { tintColor: selected==5?'orange':'white' }]} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} onPress={() => { setSelected(6) }}>
            <View style={[styles.tabIcon, { backgroundColor: selected == 6 ? 'white' : 'transparent' }]}>
              <Image source={require('../../assets/home.png')} style={[styles.bottomImg, { tintColor: selected==6?'orange':'white' }]} />
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.scrollIndicator}>
          <View
            style={{
              width: `${scrollPercentage}%`,
              backgroundColor: 'dotted', // Use a dotted line background here
              height: 2, // Height of the scroll indicator
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default TopNav

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
  },
  bottomNav: {
    width: '100%',
    height: verticalScale(160),
    backgroundColor: '#FFC000',
  },
  BottomNav2: {
    width: '80%',
    height: verticalScale(55),
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    // backgroundColor: 'green',
    // flexDirection: 'row',
    left: 40,
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',

  },
  tabIcon: {
    width: scale(45),
    height: scale(45),
    borderRadius: scale(5),
    justifyContent: 'center',
    alignContent: 'center',
  },
  bottomImg: {
    width: scale(30),
    height: scale(30),
    left: scale(7),
    tintColor: 'blue',
  },
  imageText:{
    fontSize: scale(11),
    fontWeight:'700',
    textAlign:'center'
  },
  scrollIndicator: {
    height: 2,
    backgroundColor: 'transparent', // Background color behind the dotted line
    overflow: 'hidden',
  },
})