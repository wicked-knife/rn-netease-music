import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeTabs from '@/navigation/HomeNavigation';
import {NativeBaseProvider} from 'native-base';
import StackNavigation from '@/navigation/StackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StackNavigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
