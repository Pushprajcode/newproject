import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image} from 'react-native';
import HomeScreen from './home';

const Tab = createBottomTabNavigator();

function MyTabs() {
 
  function Home() {
    return (
      <View>
        <Text>{'WORLD'}</Text>
      </View>
    );
  }
  function Likes() {
    return <View>{'third'}</View>;
  }
  function PeopleList() {
    return (
      <View>
        <Text>{'HIIII'}</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
    
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('/Users/admin/Desktop/FoodDelivery/src/assets/images/home.png')}
                style={{width: 20, height: 20}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="search"
          component={Home}
          
          options={{
              
            tabBarIcon: () => (
            
              <Image
                source={require('/Users/admin/Desktop/FoodDelivery/src/assets/images/search.jpg')}
                style={{width: 20, height: 20,}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Like"
          component={Likes}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('/Users/admin/Desktop/FoodDelivery/src/assets/images/Instagram-Like-Icon-83nfc3.png')}
                style={{width: 20, height: 20}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="people"
          component={PeopleList}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('/Users/admin/Desktop/FoodDelivery/src/assets/images/person.jpg')}
                style={{height: 20, width: 20}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MyTabs;
