import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@/pages/Home';

import Profile from '@/pages/Profile';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

const HomeHeaderLeft = () => {
  return <Text>left</Text>;
};

const HomeHeaderTitle = () => {
  return <Text>title</Text>;
};

const HomeHeaderRight = () => {
  return <Text>right</Text>;
};

export default function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => <HomeHeaderLeft />,
          headerRight: () => <HomeHeaderRight />,
          headerTitle: () => <HomeHeaderTitle />,
          headerStyle: {
            height: 50,
          },
        }}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
