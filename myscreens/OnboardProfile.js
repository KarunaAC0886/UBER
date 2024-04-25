import { View, Text, TouchableOpacity, Image,Pressable,ScrollView, StatusBar } from 'react-native'
import React from 'react'
import OnboardBackNavigator from './OnboardBackNavigator';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const OnboardProfile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.onb_prpl_main_cntr}>

      <View style={styles.onb_prpl_hdr}>
        <OnboardBackNavigator navpath="onboardfirst" />
      </View>
      <View style={styles.onb_prpl_sub_cntr}>
        <View style={styles.onb_prpl_prplimg_cntr}>
          <Image style={styles.onb_prpl_prplimg} source={require('../assets/profile.png')} />
        </View>

        <View >
          <Text style={styles.onb_prpl_prplfrstcntnt}>By tapping the arrow below, you agree to Uber’s Terms of Use and acknowledge that you have read the Privacy Policy.</Text>
        </View>
        <View>
          <Text style={styles.ond_prpl_lstcntnt}>Check the box to indicate that you are atleast 18 years of age, agree to the<TouchableOpacity><Text style={styles.onb_prpl_tndc}>Terms & Conditions</Text></TouchableOpacity>  and acknowledge the <TouchableOpacity><Text style={styles.onb_prpl_pvcyplcy}> Privacy Policy</Text></TouchableOpacity>.</Text>
        </View>

        <Pressable style={styles.onb_prpl_nxt_cntr} onPress={() => navigation.navigate('onboardpayment')}>
          <Text style={styles.onb_prpl_nxtbtn_txt} >Next</Text>
        </Pressable>
      </View>
     <StatusBar/>
    </ScrollView>
  )
}

export default OnboardProfile