import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const SportAds = () => {
    
     
        

  return (
    <View style={{backgroundColor:'black'}}>
    <Image  style={{height:130,width:'98%',marginTop:5,left:2,borderRadius:5}}
    source={require('../src/assets/images/ipl.jpeg')}/>
    </View>
  )
}

export default SportAds

const styles = StyleSheet.create({})