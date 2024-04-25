import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome6 } from '@expo/vector-icons';
import OnboardBackNavigator from './OnboardBackNavigator';
import styles from './styles';

const OnboardPhonenumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [enteredOTP, setEnteredOTP] = useState('');
  const [isSendingOTP, setIsSendingOTP] = useState(false);
  const [otpSent, setOTPSent] = useState(false);
  const [verificationFailed, setVerificationFailed] = useState(false);
  const [displaynext, setDisplaynext] = useState(false)
  const navigation = useNavigation();

  const generateOTP = () => {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  };

  const handleSendOTP = async () => {
    try {
      if (!phoneNumber||phoneNumber.length<10) {
        Alert.alert('Error', 'Please enter valid phone number.');
        return;
      }

      setIsSendingOTP(true);
      const otp = generateOTP();
      setGeneratedOTP(otp);
      setOTPSent(true); 
      setVerificationFailed(false); 

      Alert.alert('OTP Generated!', `The OTP for ${phoneNumber} is ${otp}.`);
    } catch (error) {
      Alert.alert('Error', 'Failed to generate OTP.');
    } finally {
      setIsSendingOTP(false);
    }
  };

  const handleVerifyOTP = () => {
    if (enteredOTP === '') {
      Alert.alert('Error', 'Please enter OTP.');
      return;
    }

    if (enteredOTP === generatedOTP) {
      Alert.alert('Success', 'OTP verified successfully.');
      setDisplaynext(true);
      navigation.navigate('onboardfirst');
      setVerificationFailed(false); 
    } else {
      setVerificationFailed(true); 
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  const handleResendOTP = () => {
 
    setGeneratedOTP('');
    setEnteredOTP('');
    setOTPSent(false);
    handleSendOTP();
  };

  return (
    <ScrollView style={styles.Onb_pn_mnctnr}>
      <View>
        <View style={styles.Onb_pn_hdr}>
          <OnboardBackNavigator navpath="onboardlogin" />
        </View>
        <View style={styles.Onb_pn_sbcntr}>
        <Text style={{fontSize: 25, height: 33, width: 349, color: '#EDF6FF' }}>Enter your mobile number</Text>
          <View style={styles.onb_mn_flgwlcntr}>
          <Image style={styles.Onb_pn_mnctnr_flag} source={require('../assets/Flag.jpeg')} />
          <AntDesign name="down" style={styles.onb_pn_flg_dwn} />
          <Text style={styles.onb_pn_cntrycd}>+91</Text>
          <TextInput style={styles.onb_pn_mninpt}
            placeholder="Enter phone number"
            value={phoneNumber}
            inputMode='tel'
            maxLength={10}
            onChangeText={(text) => {
              setPhoneNumber(text);
             
              setGeneratedOTP(generateOTP());
            }}
          />
          </View>
          {!otpSent && (
            <View style={styles.onb_pn_sndotp_cntr}>
              <Button title="Send OTP" onPress={handleSendOTP} disabled={isSendingOTP} />
              <Text onPress={() => navigation.navigate('onboardsocial')} style={styles.onb_pn_cnctsmd}>Or connect with Social  <FontAwesome6 name="arrow-right-long" style={styles.onb_pn_rgtarrow} />
              </Text>
            </View>
          )}

          {otpSent && (
            <>
              <Text style={styles.onb_pn_entrotp_cnt}>Enter the code send to your PhoneNumber</Text>

              <TextInput style={styles.onb_pn_entrotp_inpt}
                placeholder="Enter OTP"
                value={enteredOTP}
                onChangeText={setEnteredOTP}
                keyboardType="numeric"
                maxLength={6}
                inputMode='numeric'
              />
              <View style={styles.onb_pn_btn_actns_cntr}>
                <Button title="Verify OTP" onPress={handleVerifyOTP} />
                <View style={styles.onb_pn_resend_btn}>
                  {verificationFailed && (

                    <Button title="Resend OTP" onPress={handleResendOTP} disabled={isSendingOTP} />

                  )}
                </View>


               
                
              </View>
            </>
          )}

        </View>
      </View>
      <StatusBar />
    </ScrollView>
  );
};

export default OnboardPhonenumber;
