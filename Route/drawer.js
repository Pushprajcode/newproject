import { createDrawerNavigator } from "@react-navigation/drawer";
import React from 'react';
import {
    View,
    Text,
    Image
}from 'react-native';
import Header from "../header";
import MyTabs from "./Navigation";
const Drawer=createDrawerNavigator();
function DrawerNav(){
    const Home=()=>{
        return(
            <View>
                <Text>{'HELLO'}</Text>
            </View>
        )
    }
    const DrawerList=()=>{
        return(
            <View>
                <Text>{'HELLO1'}</Text>
            </View>
        )
    }
    return(
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            drawerType: 'front',
        }}
        drawerContent={()=><DrawerList/>}
        >
        <Drawer.Screen name={'TabNav'} component={MyTabs}/>
        <Drawer.Screen name={'Header'} component={Header}/>
        </Drawer.Navigator>
    )
}

export default DrawerNav;