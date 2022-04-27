import { View, Text, Image } from 'react-native'
import React from 'react'

export default function SplashScreen({navigation}) {
    setTimeout(()=>{
        navigation.replace('DNav')
    },1000)
  return (
    <View style={{flex:1,backgroundColor:'#3b6ae3'}}>
      <Image
      style={
          {height:200,width:300,alignSelf:'center',marginTop:200}
      }
      source={{uri:'https://secure-media.hotstar.com/web-assets/prod/images/Disney+Hotstar.jpg'}}
      />
    </View>
  )
}