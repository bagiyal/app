import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const Learn = () => {
  const data = [
    { key: '1', text: 'Item 1' },
    { key: '2', text: 'Item 2' },
    { key: '3', text: 'Item 3' },
    // Add more items as needed
  ];
  
  const renderItem = ({ item }:{item:{key:string,text:string}}) => (
    <Pressable style={{ padding: 16,backgroundColor:'green',width:'90%',height:90,margin:15,borderRadius:18 }}>
      <Text>{item.text}</Text>
    </Pressable>
  );
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
    />
        <Text>
          Live Classes
        </Text>
      </View>
    </View>
  )
}

export default Learn

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  mainContainer: {
    position:'absolute',
    marginTop:190,
    width:'100%',
  },
})