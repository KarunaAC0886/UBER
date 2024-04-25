import { SafeAreaView, Text,Pressable, View, StatusBar } from 'react-native'
import React from 'react';
import styles from './styles'


const OnboardAccount = (props) => {
   
  return (
    <SafeAreaView style={styles.onb_acc_mncntr}>

     <Pressable onPress={()=>{props.navigation.navigate('onboardlogin')}}>
        <View style={styles.onb_acc_uber_cntr}>
            <Text style={styles.onb_acc_uber_lbl}>
                Uber
            </Text>
        </View>
        </Pressable>
       <StatusBar/>
    </SafeAreaView>
  )
}
export default OnboardAccount
