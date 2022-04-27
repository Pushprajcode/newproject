import React from 'react';
import {View, Text, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Tv from '../screens/Tv';
import Sports from '../screens/Sports';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Header from '../header';
const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    //   <NavigationContainer>
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#000000',
          },
          tabBarLabelStyle: {
            fontFamily: 'Verdana-Italic',
          },
          tabBarActiveTintColor: '#fff',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('/Users/admin/Desktop/FoodDelivery/src/assets/images/home(1).png')
                    : require('/Users/admin/Desktop/FoodDelivery/src/assets/images/home(2).png')
                }
                style={{width: 22, height: 22}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="TV "
          component={Tv}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={focused?require('/Users/admin/Desktop/FoodDelivery/src/assets/images/icons8-retro-tv-26.png'):require('/Users/admin/Desktop/FoodDelivery/src/assets/images/home(1).png')}
                style={{width: 25, height: 25}}
              />
            ),
          }}
        />
        <Tab.Screen
          name=" Movies "
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../src/assets/images/movies.png')}
                style={{width: 30, height: 30}}
              />
            ),
            // tabBarLabelStyle
          }}
        />
        <Tab.Screen
          name="Sports  "
          component={Sports}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../src/assets/images/cricket.png')}
                style={{width: 25, height: 25}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
export default MyTabs;
