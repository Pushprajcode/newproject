import React from 'react'
import{
    View,
    Text

} from 'react-native'
import HeaderSport from '../Sports/HeaderSport'
import SportAds from '../Sports/SportAds'
import SportList from '../Sports/SportList1'
//import SportAdsb from '../Sports/SportAdsb'
import PopularSport from '../Sports/SportList2'

const Sports=()=>{
    return(
    <View>
        <HeaderSport/>
        <SportAds/>
        <SportList/>
       <View>
        <PopularSport/>
        </View>
       
    
    </View>
    )
    
}
export default Sports;