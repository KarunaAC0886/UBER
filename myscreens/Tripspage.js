import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import BackNavigator from './BackNavigator'
import PastTripspage from './PastTripspage';
import UpcomingTrips from './UpcomingTrips';
import styles from './styles';

const Tab = createMaterialTopTabNavigator(); 
const Tripspage = () => {
  return (
    <View style={styles.Trippg_main_cont}>
    <BackNavigator titleName="Your Trips" navpath="account"/>
       <Tab.Navigator screenOptions={{
        tabBarLabelStyle: { fontSize: 18 },
        tabBarStyle: { backgroundColor: '#000'},
        tabBarLabelStyle:{color:'#fff',fontSize:18}
        
      }}>
         <Tab.Screen options={{tabBarIndicatorStyle:{backgroundColor:'#535AFF',height:5}}} name='Past' component={PastTripspage}/>
         <Tab.Screen options={{tabBarIndicatorStyle:{backgroundColor:'#535AFF',height:5}}} name='Upcoming' component={UpcomingTrips}/>
       </Tab.Navigator>
       <StatusBar/>
    </View>
  )
}

export default Tripspage