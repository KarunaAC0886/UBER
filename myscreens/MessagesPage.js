import { View, Text, StatusBar,Image } from 'react-native'
import React from 'react'
import BackNavigator from './BackNavigator';
import styles from './styles';

const MessagesPage = () => {
  return (
    <View style={styles.Messages_main_cont}>
    <BackNavigator titleName="Messages" navpath="account"/>
      <View style={styles.Messages_content}>
      <View style={styles.Messages_frst_cont}>
      <Image style={styles.Messages_frst_cont_img} source={require('../assets/Group.png')}/>
      </View>
      <View style={styles.Messages_second_cont}>
      <Text style={styles.Messages_content_frsttext}>You are all up to date!</Text>
      <Text style={styles.Messages_content_scndtext}>No new messages available at the moment, come back soon to discover new offers</Text>
      </View>
      </View>
      <StatusBar/>
    </View>
  )
}

export default MessagesPage