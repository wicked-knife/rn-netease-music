import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeTabs from '@/navigation/HomeTabs';

export default function App() {
  return (
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
  );
}
