import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import StackNavigation from '@/navigation/StackNavigation';
import {Provider} from 'react-redux';
import store from '@/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <StackNavigation />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}
