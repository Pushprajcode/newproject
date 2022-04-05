import React from 'react';
import{
    View,
    Text,
    Button

} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigation } from 'react-native-navigation';
  function HomeScreen(){
      return(
          <View>
              <Text>{'Well Come to Home Screen '}</Text>
              <Button title='PRESSME ' onPress={()=>{
                  Navigation.Navigate('screen')
              }}/>
          </View>
      )
  }

const Stack=createNativeStackNavigator;

 function Naviprops({Navigator}){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                      <Stack.Screen name={'home'} component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        )

 }
 export default Naviprops;