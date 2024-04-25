import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
const PastTripspage = () => {
  return (
    <View style={styles.PastTrippg_main}>
      <View style={styles.PastTrippg_main_contnr}>
      <Text style={styles.PastTrippg_content_frstln}>You haven’t taken a trip yet</Text>
      <View style={styles.PastTrippg_retry_btn_contr}>
      <TouchableOpacity style={styles.PastTrippg_retry_btn}>
      <Text style={styles.PastTrippg_retry_btn_txt}>Retry</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default PastTripspage