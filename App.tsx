import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import axios from '@API/base';

export default function App() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://netease-cloud-music-api-eight-eosin.vercel.app/top/playlist?limit=10',
      )
      .then(res => {
        setSongs(res.data.playlists.map((item: any) => item.name));
      });
  }, []);

  console.log(songs);
  return (
    <NavigationContainer>
      {songs.map(song => (
        <Text key={song}>{song}</Text>
      ))}
    </NavigationContainer>
  );
}
