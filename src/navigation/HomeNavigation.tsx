import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import logo from '@/resource/svg/logo-default.svg';
import logoActive from '@/resource/svg/logo-active.svg';
import music from '@/resource/svg/music-default.svg';
import musicActive from '@/resource/svg/music-active.svg';
import list from '@/resource/svg/list.svg';
import search from '@/resource/svg/search.svg';
import {SvgXml} from 'react-native-svg';

const Tab = createBottomTabNavigator();

const HomeHeaderLeft = () => {
  return (
    <TouchableOpacity style={{paddingLeft: 10}}>
      <SvgXml xml={list} width="20" height="20" />
    </TouchableOpacity>
  );
};

const HomeHeaderTitle = () => {
  return (
    <View style={styles.fakeSearch}>
      <SvgXml xml={search} width="20" height="20" />
      <Text style={styles.searchText}>说的话</Text>
    </View>
  );
};

export default function HomeNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#c20c0c',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '发现',
          headerLeft: () => <HomeHeaderLeft />,
          headerTitle: () => <HomeHeaderTitle />,
          headerStyle: {
            height: 50,
          },
          tabBarIcon(props: {
            focused: boolean;
            color: string;
            size: number;
          }): React.ReactNode {
            return props.focused ? (
              <SvgXml xml={logoActive} height="32" width={32} />
            ) : (
              <SvgXml xml={logo} height="32" width={32} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '我的',
          headerShown: false,
          tabBarIcon(props: {
            focused: boolean;
            color: string;
            size: number;
          }): React.ReactNode {
            return props.focused ? (
              <SvgXml xml={musicActive} height="32" width={32} />
            ) : (
              <SvgXml xml={music} height="32" width={32} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  fakeSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: 330,
    backgroundColor: '#f0f0f0',
    height: 36,
    borderRadius: 18
  },
  searchText: {
    marginLeft: 6,
    fontSize: 12
  }
});
