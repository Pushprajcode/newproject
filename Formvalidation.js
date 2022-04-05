import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  Button,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';

export default function FormValidation() {
  const [Name, setname] = useState('');
  const [validname, setvalidname] = useState('');
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [add, setadd] = useState([]);
  const [check, setCheck] = useState(true);
  const [toggle, setToggle] = useState('Add');
  const [modalVisible, setModalVisible] = useState(false);

  const validateName = val => {
    let regixp = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/;
    return regixp.test(val);
  };

  const isValidName = val => {
    // let regixp = /^[a-zA-Z]{1,40}$/;
    let regixp = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/;
    // let regixp = /^\S/;
    if (val.length == 0) {
      setvalidname('');
      setCheck(true);
    } else if (regixp.test(val) == false || regixp.test(val) == false) {
      setvalidname('name is not valid');
      setCheck(true);
    } else {
      setvalidname(' ');
      setCheck(false);
    }
  };

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

  const addDetails = () => {
    //console.log(add);

    setadd([...add, {Name1: Name, email1: email}]);
    setEmail('');
    setname('');
    setToggle('Add');
  };
  const deleteDetails = i => {
    add.splice(i, 1);
    setadd([...add]);
  };
  const update = i => {
    setname(add[i].Name1);
    setEmail(add[i].email1);
    setToggle('Update');
  };
  const onRendder = ({item}) => {
    return (
      <View style={styles.list}>
        <Text style={styles.name}>{`Name:${item.Name1}`}</Text>
        <Text style={styles.name}>{`Email:${item.email1}`}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              let i = add.findIndex(ele => ele == item);
              deleteDetails(i);
            }}>
            <Image
              style={{height: 25, width: 25, bottom: 25, left: 300}}
              source={require('./src/assests/images/Delete/trash.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              const i = add.findIndex(i => i == item);
              update(i);
            }}>
            <Image
              style={{height: 25, width: 25, marginLeft: 279, marginTop: 3}}
              source={require('./src/assests/images/edit/edit.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.txt}>{'Student  Form'}</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.inputName}>
          <Text>{'Name'}</Text>
          <TextInput
            value={Name}
            onChangeText={value => {
              setname(value);
              isValidName(value);
            }}
          />
          <View style={{marginTop: 15, marginLeft: 1}}>
            {!validateName(Name) && Name ? (
              <Text style={{color: 'red'}}>{'name is invalid'}</Text>
            ) : null}
          </View>
        </View>

        <View style={styles.inputEmail}>
          <Text>{'Email'}</Text>
          <TextInput
            value={email}
            onChangeText={value => {
              setEmail(value);
              handleValidEmail(value);
            }}
          />
        </View>
        <View style={{marginBottom: 10}}>
          {emailValidError ? (
            <Text style={{marginLeft: 23, color: 'red'}}>
              {emailValidError}
            </Text>
          ) : null}
        </View>
        <TouchableOpacity onPress={addDetails} disabled={check}>
          <View style={styles.Add}>
            <Text style={styles.Add1}>{toggle}</Text>
          </View>
        </TouchableOpacity>

        <Button
          style={styles.button}
          title={'click here'}
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>
      <Modal visible={modalVisible} animationType="fade">
        <View style={styles.Register}>
          <View style={styles.header}>
            <Text>{'Student Details'}</Text>
          </View>
          <TouchableOpacity
            style={styles.opacity}
            onPress={() => setModalVisible(!modalVisible)}>
            <Image
              style={{height: 30, width: 30}}
              source={require('./src/assests/images/cross/cross.png')}
            />
          </TouchableOpacity>
          <FlatList style={{marginTop: 60}} data={add} renderItem={onRendder} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: '#898ab0',
    margin: 20,
    paddingTop: 20,
    paddingBottom: 30,
    borderRadius: 1,
    backgroundColor: '#cdd2d4',
  },
  heading: {
    alignItems: 'center',

    //justifyContent:'center',
    //position:'absolute'
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 25,
    marginLeft: 16,
    color: '#6869a3',
  },
  Add1: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 8,
    marginLeft: 30,
  },
  inputName: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginLeft: 17,
    marginRight: 17,
    marginBottom: 17,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    paddingBottom: 5,
  },
  inputEmail: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    marginLeft: 17,
    marginRight: 17,
    marginBottom: 5,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    paddingBottom: 3,
  },
  Add: {
    borderWidth: 3,
    width: 150,
    height: 40,
    marginLeft: 130,
    borderRadius: 7,
    marginTop: 10,
    borderColor: 'pink',
    paddingLeft: 20,
    backgroundColor: '#EEEEEE',
  },
  Register: {
    alignItems: 'center',
    fontSize: 20,
    color: 'red',
    //fontWeight:20
  },
  list: {
    borderWidth: 1,

    borderColor: '#999ba3',
    backgroundColor: '#f1f2f0',
  },
  name: {
    fontSize: 12,
    color: '#44adc2',
    paddingTop: 10,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 100,
    width: 100,
  },
  header: {
    height: 80,
    backgroundColor: 'aqua',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    marginTop: 10,
  },
  opacity: {
    marginLeft: 320,
    marginTop: 10,
  },
});
