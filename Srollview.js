import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  useEffect,
  useState
} from 'react-native';
import React from 'react';

import axios from 'axios';

export default function Srollview() {
  const [data, setdata] = useState();

  useEffect(() => {
    axios.get(' https://jsonplaceholder.typicode.com/photos').then(response => {
      setdata(response.data);
    });
  }, []);

  console.log('render is running');
  return (
    <SafeAreaView>
      <Text>Srollview</Text>
      <ScrollView>
          <View>
             <Text>{id}</Text> 
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 400,
    width: 400,
  },
});
