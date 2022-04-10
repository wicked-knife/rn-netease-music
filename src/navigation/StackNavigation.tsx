import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@/pages/Login';
import HomeNavigation from './HomeNavigation';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Main"
        component={HomeNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
