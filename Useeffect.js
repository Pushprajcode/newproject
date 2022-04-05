import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
export default function Useeffect() {
  const[count,setCount]=useState(0)
  useEffect(()=>{
    return(
      <View>
   <Text>{setCount(count+1)}</Text> 
    </View>
    )

  },[count]);
  return (
    <View>
      <Text>Useeffect</Text>
    </View>
  )
}

const styles = StyleSheet.create({})