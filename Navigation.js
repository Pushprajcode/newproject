import React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen()
{
  return(
    <View> 
      <Text style={{flex:1,color:'red',justifyContent:'center',alignItems:'center'}}>{'wellcome to homescreen'}</Text>
      <Button title='pressme' onPress={Homescreen2}/>
    </View>
  )
}
function HomeScreen2(){
  return(
       <View>
         <Text >{'HomeScreen2'}</Text>
       </View>
  )
}
const Stack=createNativeStackNavigator();


function Navigation(){
  return(
    <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen name='Home' Component={22}/>
            <Stack.Screen name='Home2' Component={HomeScreen2}/>
          </Stack.Navigator>
    </NavigationContainer>
  )

}
export default Navigation;
