import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <ScrollView nestedScrollEnabled style={{height: 400, backgroundColor: 'green'}}>
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} /><View style={styles.block} /><View style={styles.block} /><View style={styles.block} /><View style={styles.block} /><View style={styles.block} /><View style={styles.block} />
      </ScrollView>
      <View style={styles.block} />
      <View style={styles.block} />
      <View style={styles.block} />
      <View style={styles.block} />
      <View style={styles.block} />
      <View style={styles.block} />
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  block: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    marginBottom: 20
  }
})