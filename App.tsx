import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import axios from '@API/base';

export default function App() {
  useEffect(() => {
    console.log('App.tsx');
    axios
      .get(
        'https://netease-cloud-music-api-eight-eosin.vercel.app/top/playlist?limit=10',
      )
      .then(res => {
        console.log(res.data);
      });
  });
  return (
    <NavigationContainer>
      <Text>ss2s</Text>
    </NavigationContainer>
  );
}
