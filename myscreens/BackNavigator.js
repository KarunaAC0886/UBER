import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {FontAwesome5} from '@expo/vector-icons'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'


const BackNavigator = ({titleName,navpath}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.back_act_cont}>
      <TouchableOpacity onPress={()=>{
        navigation.navigate(`${navpath}`);
      }}><FontAwesome5 style={styles.Back_act_cont_leftarrow} name='arrow-left'/></TouchableOpacity>
      <Text style={styles.Back_act_cont_title}>{titleName}</Text>
    </View>
  )
}

export default BackNavigator