import React from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Header = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={()=> navigation.openDrawer() }>
            <Image
              style={{height: 30, width: 30}}
              source={require('./src/assets/images/ui.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
        <Image
          source={require('./src/assets/images/disneylogo.png')}
          style={styles.logo}
        />
        </View>
       
       <View style={styles.subscribe}> 
        <TouchableOpacity>
          <Text style={styles.subscribetext}>{'SUBSCRIBE'}</Text>
        </TouchableOpacity></View>

        <View >
            <TouchableOpacity>
            <Image style={styles.search} source={require("./src/assets/images/search.png")}/>
            </TouchableOpacity>
        </View>
       
      </View>
    </SafeAreaView>
  );
};
export default Header;
const styles = StyleSheet.create({
  container: {
      padding:2,
    flexDirection: 'row',
    justifyContent:"space-around"
  },
  logo:{
    height: 50, width: 170, bottom:18, 
  },
  subscribe:{
    backgroundColor:"#4072e6",height:25, padding:2, borderRadius:3, justifyContent:'center', right:15
  },
  subscribetext:{
    color: 'white',fontWeight:'bold',fontSize:11, 

  },
  search:{
    height:20,width:20
  }
});
