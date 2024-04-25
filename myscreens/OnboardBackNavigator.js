import { View, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'


const OnboardBackNavigator = ({ navpath }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Onbcknav_macontr}>
      <Pressable onPress={() => navigation.navigate(`${navpath}`)}>
        <AntDesign name="arrowleft" style={styles.Onbcknav_lefticon} />
      </Pressable>
    </View>
  )
}

export default OnboardBackNavigator