import React from 'react';
import {View, Text, Image, FlatList,StyleSheet} from 'react-native';
import Modal from 'react-native';

const data = [
  {src: require('../src/assets/images/day.jpeg')},
  {src: require('../src/assets/images/RRR.jpeg')},
  {src: require('../src/assets/images/hinter.jpeg')},
  {src: require('../src/assets/images/day.jpeg')},
  {src: require('../src/assets/images/hinter.jpeg')},

];
const TvList = () => {
  const renderItem = ({item}) => {
    return (
    // <Modal>
      <View>
        <Image style={styles.image}
          source={item.src}
        />
      </View>
    // </Modal>
    );
  };

  return (
    <View>
      <FlatList data={data} 
      renderItem={renderItem} 
      horizontal={true} 
     />
    </View>
  );
};
export default TvList;
const styles=StyleSheet.create({
  image:{

    width: 125,
    height: 180,
   //resizeMode:'contain',
    borderRadius: 7,
    marginTop:5,
    margin:5
  }

})
