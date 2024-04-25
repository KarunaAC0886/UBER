import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import BackNavigator from './BackNavigator'
import styles from './styles'
import {FontAwesome5} from '@expo/vector-icons'
const AccountSettings = () => {
    return (
        <View style={styles.AccSetngs_main_cont}>
            <BackNavigator titleName='Account Settings' navpath="account"/>
            <View style={styles.AccSetngs_cont}>
                <TouchableOpacity style={styles.AccSetngs_prfl_cont}>
                    <Image style={styles.AccSetngs_prfl_img} source={require('../assets/profile.png')} />
                    <View style={styles.AccSetngs_prfl_contnt}>
                        <Text style={styles.AccSetngs_prfl_contnt_nm}>Krishna</Text>
                        <View style={styles.AccSetngs_prfl_contnt_pncntr}>
                            <Text style={styles.AccSetngs_prfl_contnt_pnfrnt}>+91</Text><Text style={styles.AccSetngs_prfl_contnt_pnbck}>81234 56789</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.AccSetngs_favrts_cont}>
                    <Text style={styles.AccSetngs_favrts_lbl}>Favorites</Text>
                    <View style={styles.AccSetngs_work_contr}>
                        <TouchableOpacity style={styles.AccSetngs_work_ttl}>
                            <FontAwesome5 name='home' style={styles.AccSetngs_work_homeicn} />
                            <Text style={styles.AccSetngs_work_homelbl}>Add Home</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.AccSetngs_work_contr}>
                        <TouchableOpacity style={styles.AccSetngs_work_ttl}>
                            <FontAwesome5 name='suitcase' style={styles.AccSetngs_work_homeicn} />
                            <Text style={styles.AccSetngs_work_homelbl}>Add Work</Text>
                        </TouchableOpacity>
                    </View>
    
                </View>
            </View>
            <StatusBar />
        </View>
    )
}

export default AccountSettings