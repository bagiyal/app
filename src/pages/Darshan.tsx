import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNav from './TopNav'
import { scale } from 'react-native-size-matters'
import YoutubeIframe from 'react-native-youtube-iframe'

const Darshan = () => {
  return (
    <View style={styles.container}>

      <View style={styles.mainContainer}>
      <Text>Darshan</Text>
      <YoutubeIframe 
      height={400}
      width={400}
      videoId='IWe1QUPxbFo'
      />
      </View>
    </View>
  )
}

export default Darshan

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  mainContainer: {
    position:'absolute',
    marginTop:190,
  },
})