import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import OnboardBackNavigator from './OnboardBackNavigator';


const OnboardFirst = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    const firstnameValidation = (value)=>{
        setFirstname(value);
        const firstNameRegex = /^[A-Za-z]+(?:['`-][A-Za-z]+)*$/;
        if (firstname == "") {
            setFirstNameError("please fill firstname");
        }else if(firstNameRegex.test(firstname)){
            setFirstNameError("")
        }else{
            setFirstNameError("it must start with string")
        }
    }

    
    const lastnameValidation = (value)=>{
        setLastname(value);
        const firstNameRegex = /^[A-Za-z]+(?:['`-][A-Za-z]+)*$/;
        if (lastname == "") {
            setLastNameError("please fill lastname");
        }else if(firstNameRegex.test(lastname)){
            setLastNameError("")
        }else{
            setLastNameError("it must start with string")
        }
    }
    const NameValide = () => {
        
        if (firstname == "" && lastname == "") {
            setFirstNameError("please fill firstname");
            setLastNameError("please fill lastname")
        } else if (lastname == "") {
            setLastNameError("please fill lastname");
        } else {
            setFirstname("");
            setLastname("")
            navigation.navigate('onboardprofile')

        }
    }

    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.onb_frst_mn_cntr}>

            <View style={styles.onb_nms_hdr}>
                <OnboardBackNavigator navpath="onboardphonenumber" />
            </View>

            <View style={styles.onb_nms_cntr}>
                <Text style={styles.onb_nms_nmtxtfld}>What's Your Name?</Text>

                <View style={styles.onb_nm_nms_whlocntr}>
                    <View>
                        <TextInput style={styles.onb_nm_nms_frst} value={firstname} onChangeText={firstnameValidation} placeholder='First name'/>
                        <Text style={{color:'red',fontSize:16}}>{firstNameError}</Text>
                    </View>
                    <View>
                        <TextInput style={styles.onb_nm_nms_lst} value={lastname} onChangeText={lastnameValidation} placeholder='Last name'/>
                        <Text style={{color:'red',fontSize:16}}>{lastNameError}</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.onb_nm_nxtbtncont} onPress={NameValide}>
                    <Text style={styles.onb_nm_nxtlbl} >Next</Text>
                </TouchableOpacity>
            </View>
            <StatusBar />
        </SafeAreaView>
    )
}
export default OnboardFirst