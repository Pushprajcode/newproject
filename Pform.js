import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Pform() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [check, setCheck] = useState(true);

  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,30})+$/;
    if (val.length == 0) {
      setEmailValidError('');
      setCheck(true);
    } else if (reg.test(val) === false) {
      setEmailValidError('Please Enter valid email..');
      setCheck(true);
    } else {
      setEmailValidError('');
      setCheck(false);
    }
  };
  const newName = value => {
    return setName(value);
    console.log(name);
  };
  const newEmail = newvalue=> {
    return(
     ( 
         setName(newvalue),
         handleValidEmail(newvalue) 
     )
    )
    
  };
  return (
    <View>
      <View>
        <Text style={styles.form}>{'FORM'}</Text>
      </View>
      <View style={styles.container}>
        <View >
          <TextInput
           value={name}
            placeholder="Name"
            onChangeText={newName}></TextInput>
        </View>
        <View >
          <TextInput
            placeholder="Email"
          newvalue={email}
            onChangeText={newEmail}></TextInput>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  form: {
    color: 'blue',
    marginLeft: 180,
    marginTop: 40,
  },
  container: {
    height: 250,
    width: 370,
    borderWidth: 1,
    marginLeft: 9,
    backgroundColor: 'aqua',
  },
  name: {
    height: 25,
    width: '97%',
    borderWidth: 1,
    marginLeft: 7,
    marginTop: 5,
  },
  email: {
    height: 25,
    width: '97%',
    borderWidth: 1,
    marginTop: 25,
    marginLeft: 7,
  },
});
