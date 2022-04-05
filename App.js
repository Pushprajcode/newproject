import * as React from 'react';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigation } from 'react-native-navigation';

const Stack=createNativeStackNavigator();
function App()
{
  return(
<NavigationContainer>
     <Stack.Navigator>
          <Stack.Screen name={'MAIN SCREEN'} component={HomeScreen}/>
          <Stack.Screen name={'screen2'} component={Second}/>
     </Stack.Navigator>
</NavigationContainer>
  )
}
// function fun({navigation}){
//   return(
//   navigation.navigate('screen2')
//   )
// }

function HomeScreen({navigation}){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>{'Home Screen'}</Text>
    <Button title='presshere' onPress={()=>{navigation.navigate('screen2')}}/>
  </View>
  );
}

// const HomeScreen=({navigation})=>{
//     return(
    
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <Text>{'Home Screen'}</Text>
//           <Button title='presshere' onPress={()=> navigation.navigate('screen2')}/>
//         </View>
//       );
  

// }

const  Second=()=>{
  return(
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{'Second'}</Text>
    </View>
  );

}
export default App;