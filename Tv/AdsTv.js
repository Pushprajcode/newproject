import React from 'react'
import {
    View,
    Text,
    Image

}from 'react-native';
const AdsTv=()=>{
    return(
        <View>
            <Image style={styles.image}
            source={require('../src/assets/images/ipl2022.webp')}
            />
        </View>

    )
}


const styles = StyleSheet.create({
    image:{
        height:700,
        width:500
    }

})

export default AdsTv;
