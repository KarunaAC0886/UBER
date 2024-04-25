import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import  Globalstyle  from './Globalstyle';
import { useNavigation } from '@react-navigation/native';

const PickReceivepack = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');
  const navigation = useNavigation();

  const handleConfirm = () => {
   
    setNameError('');
    setNumberError('');

    let isError = false;

  
    if (!name.trim()) {
      setNameError('Please enter your name');
      isError = true;
    }


    if (!number.trim()) {
      setNumberError('Please enter your phone number');
      isError = true;
    }

    if (isError) {
     
      return;
    }
  };

  return (
    <View style={Globalstyle.container}>
      <ScrollView>
        <TouchableOpacity style={Globalstyle.iconback} onPress={() => {
          navigation.goBack();
        }}>
          <FontAwesome name="arrow-left" size={25} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity style={Globalstyle.iconcontact}>
        <FontAwesome name="user" size={15} color={"#EDF6FF"} /><Text style={Globalstyle.iconinfostyle} >Contacts</Text>
        </TouchableOpacity>
        
        <View>
          <Text style={Globalstyle.heading}>Who’s receiving the package?</Text>
          <Text style={Globalstyle.rvcsecondtxt}>The driver may contact the receiver to complete the delivery</Text>
          <Text style={Globalstyle.label}>Name</Text>
          <TextInput
            style={Globalstyle.input}
            onChangeText={setName}
            value={name}
            placeholder="Enter name"
            placeholderTextColor='#979797'
          />
          {nameError ? <Text style={Globalstyle.errorone}>{nameError}</Text> : null}
          <View>
            <Text style={Globalstyle.label}>Phone number</Text>
            <Image
              source={require('../assets/Images/imgtwo.png')}
              style={Globalstyle.rvcimg}
            />
            <Text style={Globalstyle.phone}>+91</Text>
            <TextInput
              style={Globalstyle.inputtwo}
              onChangeText={setNumber}
              value={number}
              placeholder="0000000000"
              placeholderTextColor='#979797'
              keyboardType="numeric"
              maxLength={10}
            />
            {numberError ? <Text style={Globalstyle.error}>{numberError}</Text> : null}
            <TouchableOpacity style={Globalstyle.rvcbtn} onPress={handleConfirm}>
              <Text style={Globalstyle.rvcbtnlbl}>Confirm recipient</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default PickReceivepack;

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});
