import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Login = () => {
  const state = useSelector(state => state)

  return (
    <View style={styles.loginWrap}>
      <Text>theme color: {state.theme.color}</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  loginWrap: {
    backgroundColor: '#c20c0c',
    flex: 1
  }
})