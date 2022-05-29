import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import StackNavigation from '@/navigation/StackNavigation';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import store from '@/store';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
