import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import  {FontAwesome}  from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const AccountHome = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.acnt_main_cntr}>
            <View style={styles.acnt_frst_cont}>
                <View style={styles.acnt_prfl_cont}>
                    <TouchableOpacity style={styles.acnt_prfl_subcont1}>
                        <Image style={styles.acnt_prfl_img} source={require('../assets/profile.png')} />
                    </TouchableOpacity>
                    <View style={styles.acnt_prfl_subcont2}>
                        <Text style={styles.acnt_prfl_nm}>Krishna</Text>
                        <Text style={styles.acnt_prfl_nm}>+91 8123456789</Text>
                    </View>
                </View>
                <View style={styles.acnt_frst_msg_cont}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('messages');
                }} style={styles.acnt_frst_msg_btn}>
                <View><Text style={styles.acnt_frst_msglbl}>Messages</Text></View><FontAwesome style={styles.acnt_frst_rgtarrow} name='chevron-right'/>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.acnt_scnd_cont}>
                <View style={styles.acnt_scnd_cont_sub1}>
                <TouchableOpacity style={styles.acnt_scnd_cont_sub1_btnactns} onPress={()=>{
                    navigation.navigate('trips')
                }}><Text style={styles.acnt_scnd_cont_sub1_btntxt}>Your Trips</Text></TouchableOpacity>
                <TouchableOpacity style={styles.acnt_scnd_cont_sub1_btnactns}
                onPress={()=>{navigation.navigate('Payment')}}><Text style={styles.acnt_scnd_cont_sub1_btntxt}>Payment</Text></TouchableOpacity>
                <TouchableOpacity style={styles.acnt_scnd_cont_sub1_btnactns} onPress={()=>{
                    navigation.navigate('UberPass')
                }}><Text style={styles.acnt_scnd_cont_sub1_btntxt}>Uber Pass</Text></TouchableOpacity>
                <TouchableOpacity style={styles.acnt_scnd_cont_sub1_btnactns} onPress={()=>{
                    navigation.navigate('accountsettings')
                }}><Text style={styles.acnt_scnd_cont_sub1_btntxt}>Settings</Text></TouchableOpacity>
                </View>
                <View style={styles.acnt_scnd_cont_sub2}>
                <Text style={styles.acnt_scnd_cont_sub1_btntxt}>Legal</Text>
                <Text style={styles.acnt_scnd_cont_sub1_legaltxt}>v4.3722003</Text>
                </View>
            </View>
            <StatusBar />
        </View>
    )
}

export default AccountHome