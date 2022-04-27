import React,{useEffect} from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  
} from 'react-native';
import Header from '../header';
import Ads from './Ads'
import Movie from '../MovieList';
function  Home  ({navigation}) {
 

  return (
 
   <View style={styles.container}>
     <View>
     <Header/>
     </View>  
     <ScrollView>
<Ads/>
  <Movie/>
  </ScrollView>
  </View>
  
  
   
  )
    
}

export default Home;
const styles = StyleSheet.create({
  container:{
    height:100,
   backgroundColor:'#0f1110',
    flex:1,
   backgroundColor:'black'  

  }
});

