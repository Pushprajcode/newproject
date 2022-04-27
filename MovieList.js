import React from 'react';
import {
    View,
    Text,
    FlatList,
    Image

}  from 'react-native'
import Popular from './popular';
const images=[
    
        {src:require('/Users/admin/Desktop/FoodDelivery/src/assets/images/RRR.jpeg')},
    
    {src:require('./src/assets/images/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg')},
    {src:require('./src/assets/images/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg')},
]
const data=[
    
    {src:require('./src/assets/images/pexels-david-gomes-2752777.jpg')},

{src:require('./src/assets/images/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg')},
{src:require('./src/assets/images/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg')},
{src:require('./src/assets/images/pexels-david-gomes-2752777.jpg')},
{src:require('./src/assets/images/pexels-david-gomes-2752777.jpg')},
{src:require('./src/assets/images/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg')},
]
const  Movie=()=>{
  const  renderItem=({item})=>{
        return(
        <View style={{backgroundColor:'black',padding:4, marginTop:15,}}>   
            <Image source={item.src} 
            style={{
              width:300,
              height:180,
               // resizeMode:'contain',
                borderRadius:7,
                margin:0,
                
                
            }}/></View> 
        )

    }
    const  render=({item})=>{
        return(
        <View style={{backgroundColor:'black',padding:4, marginTop:15,}}>   
            <Image source={item.src} 
            style={{
              width:125,
              height:180,
               // resizeMode:'contain',
                borderRadius:7,
                margin:0,
                
                
            }}/></View> 
        )

    }
    return(
        <View >
            <FlatList 
            horizontal={true}
            data={images}
            bounces={false}
            renderItem={renderItem}/>
            <View>
              <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>{'Latest & Trending'}</Text>
            </View>
            <View>
            <FlatList 
            horizontal={true}
            data={data}
            bounces={false}
            renderItem={render}/>
            </View>
            <View>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>{'Popular Shows'}</Text>
                <Popular/>
            </View>
            <View>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>{'Popular Shows'}</Text>
                <Popular/>
            </View>
            <View>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>{'Popular Shows'}</Text>
                <Popular/>
            </View>
            <View>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>{'Popular Shows'}</Text>
                <Popular/>
            </View>
            <View>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>{'Popular Shows'}</Text>
                <Popular/>
            </View>
            <View>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>{'Popular Shows'}</Text>
                <Popular/>
            </View>

        
        </View>
     

      


    )
    

}
export default Movie;