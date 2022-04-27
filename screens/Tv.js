import React from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet
}from 'react-native';
import Ads from './Ads';
import Header from '../header';
//import TvShow from '../test';
import TvList from '../Tv/TvList';
import TvShow from '../Tv/TvList1';
import PopularShow from '../Tv/TvList2';
import SeeEqual from '../Tv/TvList3';
import StarShow from '../Tv/TvList4';

const Tv=()=>{
   
    return(
    <View style={styles.container} >
        <Header/>
        <ScrollView >
            <Ads/>
                <Text  style={styles.Top} >{'Top Picks For You'}</Text>
            <TvList/>
                <Text style={styles.Popular}> {'Popular Shows'}</Text>
            <TvShow/>
                <Text style={styles.disney}>{'New on Disney+ Hotstar'}</Text>
            <PopularShow/>
                <Text style={styles.Drama}>{'Popular in Drama'}</Text>
            <SeeEqual/>
                <Text style={styles.action}>{'Popular in Action'}</Text>
            <StarShow/>
        </ScrollView>
    </View>
    )
}


export default Tv;
const styles=StyleSheet.create({
    container:{
        
        backgroundColor:'#0f1110',
        backgroundColor:'black' ,
        flex:1 
    
      },
    Top:{
        color:'white',
        left:2,
        fontSize:22,
        marginTop:4,
        fontWeight:'bold'

        
    },
    Popular:{
        color:'white',
        left:2,
        fontSize:22,
        marginTop:4,
        fontWeight:'bold'

    }
    ,
    disney:{
        color:'white',
        left:2,
        fontSize:22,
        marginTop:4,
        fontWeight:'bold'


    },
    Drama:{
        color:'white',
        left:2,
        fontSize:22,
        marginTop:4,
        fontWeight:'bold'


    },
    action:{
        color:'white',
        left:2,
        fontSize:22,
        marginTop:4,
        fontWeight:'bold'

    }
    


})
