import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
const data = [
  {src: require('../src/assets/images/cyclic.jpg')},
  {src: require('../src/assets/images/cotry.jpg')},
  {src: require('../src/assets/images/swim.jpg')},
  {src: require('../src/assets/images/rilly.jpg')},
];

const SportList = () => {
  const renderItem = ({item}) => {
    return (
      <View>
        <Image
          source={item.src}
          style={{height: 250, width: 400, borderRadius: 7}}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} horizontal />
    </View>
  );
};
export default SportList;
