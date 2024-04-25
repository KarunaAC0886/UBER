import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import BackNavigator from './BackNavigator'
import styles from './styles'
const PaymentPage = () => {
  return (
    <View style={styles.Paymentpg_main}>
      <BackNavigator titleName="Payment" navpath="account"/>
      <View style={styles.Paymentpg_frst_cont}>
        <View style={styles.Paymentpg_frst_adpaymnt}>
          <TouchableOpacity>
            <Text style={styles.Paymentpg_frst_adpaymnt_lbl}>Add Payment Method</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Paymentpg_scnd_cont}>
          <Text style={styles.Paymentpg_scndcont_frsttxt}>Ride Profiles</Text>
          <TouchableOpacity style={styles.Paymentpg_scnd_prflone}>
            <Image style={styles.Paymentpg_scnd_prflimg} source={require("../assets/Ellipse9.png")} />
            <View style={styles.Paymentpg_scnd_prfl_prsnl_cont}>
              <Text style={styles.Paymentpg_scnd_prfl_prsnl_txt}>Personal </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Paymentpg_scnd_prflone}>
            <Image style={styles.Paymentpg_scnd_prflimg} source={require("../assets/Ellipse10.png")} />
            <View style={styles.Paymentpg_scnd_prfl_prsnl_cont}>
              <Text style={styles.Paymentpg_scnd_prfl_bsns_txt}>Start using Uber for business </Text>
              <Text style={styles.Paymentpg_scnd_prfl_bsns_txt2}>Turn on business travel features</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.Paymentpg_trd_cont}>
          <Text style={styles.Paymentpg_trd_frsttxt}>Promotions</Text>
          <TouchableOpacity style={styles.Paymentpg_trd_scnd_cont}>
            <Image style={styles.Paymentpg_trd_promoimg} source={require('../assets/Rectangle16.png')} />
            <Text style={styles.Paymentpg_trd_prom_secttl}>Promotions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Paymentpg_trd_addpromo_btn}>
          <Text style={styles.Paymentpg_trd_addpromo_txt}>Add Promo code</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Paymentpg_fourt_cont}>
        
          <Text style={styles.Paymentpg_trd_frsttxt}>Vouchers</Text>
          <TouchableOpacity style={styles.Paymentpg_trd_scnd_cont}>
            <Image style={styles.Paymentpg_trd_promoimg} source={require('../assets/Voucher.png')} />
            <Text style={styles.Paymentpg_trd_prom_secttl}>Vouchers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Paymentpg_trd_addpromo_btn}>
          <Text style={styles.Paymentpg_trd_addpromo_txt}>Add Voucher code</Text>
          </TouchableOpacity>
        
        </View>
      </View>
      <StatusBar />
    </View>
  )
}

export default PaymentPage;