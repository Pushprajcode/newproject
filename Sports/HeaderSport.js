import React from "react";
import {
    View,
    Text,
    Image

}from'react-native';



const HeaderSport=()=>{
    return(
       <View>
          <Text style={{fontWeight:'bold',color:'red',}}
          >{'hotstar'}</Text>
           <Image 
           source={require('../src/assets/images/search.png')}
           style={{height:20,width:20}}/>
       </View>
    )
}
export default HeaderSport;
