import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
const OnboardLogin = () => {
    const navigation = useNavigation();
    const handleNavigate = () => {
        navigation.navigate('onboardphonenumber'); 
    };
    return (
        <ScrollView style={styles.onbo_log_main}>
            <View style={styles.onb_log_mn_cntr}>
            
            <View style={styles.onb_log_whole}>

                <Image source={require('../assets/Groupimage.png')} style={styles.onb_log_arrowimg} />
                <View style={styles.onb_acc_uber_cntr}>
                    <Text style={styles.onb_log_uber_lbl}>
                        Uber
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.onb_log_iconwhole}>
              
                    <Text style={styles.onb_log_muvwtsft_txt}>Move with saftey</Text>
                    <Ionicons name="shield-checkmark-outline" size={24} color="black" aria-hidden="true" style={styles.onb_log_chk_shld} />
               
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNavigate} style={styles.onb_log_gtsrtd_cont}>
                
                    <Text style={styles.onb_log_gtsrtd_lbl}>Get Started</Text>
                
                <FontAwesome6  name="arrow-right-long" aria-hidden="true" style={styles.onb_log_gtsrtd_txt}></FontAwesome6>
            </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
export default OnboardLogin

