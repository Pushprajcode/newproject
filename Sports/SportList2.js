import axios from 'axios';
import React, {useEffect, useState} from 'react';

import {View, Text, Image, FlatList} from 'react-native';

const data = [
  {src: require('../src/assets/images/day.jpeg')}
];

const PopularSport = () => {
  const renderItem = ({item}) => {
    return (
               <View style={{backgroundColor:'black',padding:4, marginTop:15,}}>   
            <Image source={item.src} 
            style={{
              width:300,
              height:180,
               // resizeMode:'contain',
                borderRadius:7,
                margin:0,
                
                
            }}/>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={data} renderItem={renderItem} horizontal />
    </View>
  );
};
export default PopularSport;
