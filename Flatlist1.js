import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    Alert,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import axios from 'axios';
  
  export default function App() {
    const [data, setData] = useState([]);
    const [count, setcount] = useState(1);
  
    useEffect(() => {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?_page=${count}`,
        )
        .then(response => {
          console.log(response);
       
            setData(response.data)
            
        });
        setcount(count + 1);
    }, []);
  
    const renderItem = ({item,index}) => {
      // console.log('item', item,index);
      return (
        <View style={styles.id}>
     
          <Text>{'ID'} {item.id}</Text>
          <View style={{alignItems:"center",marginLeft:100}}>
            <Text>{item.title} </Text>
            <Text>
            {item.trips}
          </Text>
          </View>
  
          {/* <Text>{item.title}</Text> */}
        </View>
      );
    };
  
    const onEndReached = () => {
      //Alert.alert('gfkjylgjbv')
      setcount(count + 1);
      axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_page=${count}`,
      )
      .then(response => {
     
           setData([...data, ...response.data]);
      });
      
    };
  
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.passenger}>LIST OF PASSENGER</Text>
        </View>
        <View style={styles.flat}>
        <FlatList
          data={data}
          renderItem={renderItem}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
            />
          </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    flat:{
     //  backgroundColor:'#1db0b8'
  
    },
    passenger: {
      height:50,
      width:400,
      textAlign: 'center',
      borderWidth: 1,
      borderRadius: 1,
      backgroundColor: '#34cfeb',
      borderColor:'#b81d7f',
     
      
    },
    id: {
      borderWidth: 1,
      height: 50,
      width: 500,
  
      backgroundColor: 'white',
      marginTop: 20,
      backgroundColor: 'pink',
  
      flexDirection: 'row',
    },
  });
  