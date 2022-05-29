import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import StackNavigation from '@/navigation/StackNavigation';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push'
import store from '@/store';

const App = () => {
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

export default codePush(App);