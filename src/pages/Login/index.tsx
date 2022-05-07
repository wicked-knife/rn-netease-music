import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '@store/hooks';

const Login = () => {
  const {theme} = useAppSelector(state => state);

  return (
    <View style={styles.loginWrap}>
      <Text>theme color: {theme.color}</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginWrap: {
    backgroundColor: '#c20c0c',
    flex: 1,
  },
});
