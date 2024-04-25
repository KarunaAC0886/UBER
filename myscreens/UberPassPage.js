import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import BackNavigator from './BackNavigator'
import styles from './styles'
import  {FontAwesome5}  from '@expo/vector-icons'

const UberPassPage = () => {
  return (
    <View style={styles.Uberpasspg_main_page}>
      <BackNavigator titleName="Uber Pass" navpath="account"/>
      <View style={styles.UberPasspg_cont}>
        <View style={styles.UberPasspg_frst_cont}>
          <TouchableOpacity>
            <Text style={styles.UberPasspg_frst_uptxt}>Uber Pass</Text>
            <Text style={styles.UberPasspg_frst_uprate}>1 week free - $24.99/mo</Text>
            <Text style={styles.UberPasspg_frst_updtrt}>$24.99/mo 1 week free</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.UberPasspg_frst_upmembersp}>Go more places and get more local favorites,
              all with one membership</Text>
          </View>
        </View>
        <View style={styles.UberPasspg_scnd_cont}>
          <TouchableOpacity style={styles.UberPasspg_scnd_cntr1}>
            <Image source={require("../assets/savingsEveryride.png")} />
            <View style={styles.UberPasspg_scnd_cntr_contnt_box}>
              <Text style={styles.UberPasspg_scnd_cntr_contnt1}>Savings on every ride</Text>
              <Text style={styles.UberPasspg_scnd_cntr_contnt2}>Uber Pass has you covered-10% off
                every UberX,UberL and Comfort ride,
                15% off every black,Premier, and SUV
                ride in the US.</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.UberPasspg_scnd_cntr2}>
            <Image source={require("../assets/freeDeliver.png")} />
            <View style={styles.UberPasspg_scnd_cntr_contnt_box}>
              <Text style={styles.UberPasspg_scnd_cntr_contnt1}>Free delivery on Uber Eats</Text>
              <Text style={styles.UberPasspg_scnd_cntr_contnt2}>Get a $0 Delivery Fee + 5% off orders
                over $15. Look for the tickets to save at
                more than 13000 restaurants in your
                area.</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.UberPasspg_scnd_cntr3}>
            <Image source={require("../assets/Cancelanytime.png")} />
            <View style={styles.UberPasspg_scnd_cntr_contnt_box}>
              <Text style={styles.UberPasspg_scnd_cntr_contnt1}>Cancel anytime</Text>
              <Text style={styles.UberPasspg_scnd_cntr_contnt2}>Cancel your subscription anytime-no
                penalties or fees.</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.UberPasspg_trd_cont}>
          <TouchableOpacity style={styles.UberPasspg_trd_lmbtn}><Text style={styles.UberPasspg_trd_lmlbl}>Learn More</Text><FontAwesome5 style={styles.UberPasspg_trd_lmlbl} name='greater-than'/></TouchableOpacity>
        </View>
        <View style={styles.UberPasspg_frth_cont}>
          <TouchableOpacity style={styles.UberPasspg_frth_btn}><Text style={styles.UberPasspg_frth_wfree}>Get 1 week free</Text></TouchableOpacity>
        </View>
      </View>
      <StatusBar />
    </View>
  )
}

export default UberPassPage