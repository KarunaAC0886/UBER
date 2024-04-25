import { View, Text, ScrollView,SafeAreaView, Image, TouchableOpacity, Linking ,StatusBar} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import OnboardBackNavigator from './OnboardBackNavigator';


const OnboardSocial = () => {
    const navigation = useNavigation();
    const handleNavigate = () => {
        navigation.navigate('onboardprofile');
    };
    const openFacebook = () => {
        Linking.openURL('https://www.facebook.com/');
    };

    const openGmail = () => {
        Linking.openURL('https://mail.google.com/');
    };

    return (
        <SafeAreaView style={styles.onb_social_main_cont}>
            <View style={styles.Onb_pn_hdr}>
                <OnboardBackNavigator navpath="onboardphonenumber" />
            </View>
            <ScrollView style={styles.onb_social_subcntr}>

                <Text style={styles.onb_social_chusac}>Choose an Account</Text>


                <TouchableOpacity onPress={openFacebook} style={styles.onb_social_fcbk_contr} >
                    <Image style={styles.onb_social_fcbk_img} source={require('../assets/facebook-logo-3.png')} />
                    <Text style={styles.onb_social_fcbk_lbl}>FaceBook</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={openGmail} style={styles.onb_social_ggl_contr} >
                    <Image style={styles.onb_social_fcbk_img} source={require('../assets/Google-Logo-PNG-Image.png')} />
                    <Text style={styles.onb_social_fcbk_lbl}>Google</Text>
                </TouchableOpacity>

                <View >
                    <Text style={styles.onb_social_tc}>By clicking on a social option you may recieve an SMS for verification. Message and data rates may apply.
                    </Text>
                </View>
                <TouchableOpacity style={styles.onb_social_next} onPress={handleNavigate}>
                    <Text style={styles.onb_social_nxttxt}>Next</Text>
                </TouchableOpacity>
            </ScrollView>
            <StatusBar style="auto"/>
        </SafeAreaView>
    )
}
export default OnboardSocial