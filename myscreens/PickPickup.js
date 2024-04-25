import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import { StatusBar } from 'react-native';
import { Globalstyle } from './Globalstyle';
import { useNavigation } from '@react-navigation/native';

const PickPickup = () => {
    const navigation = useNavigation() 
    return (
        <View >
            <StatusBar style='auto'/>
            <View style={Globalstyle.contentbg}>
                <View style={Globalstyle.content}>
                    <View>
                        <FontAwesome name="bars" size={25} color="#fff" />
                    </View>
                    <View style={Globalstyle.locationcont}>
                        <Text style={Globalstyle.locationText}>To find your pickup </Text>
                        <Text style={Globalstyle.locationText}>location </Text>
                        <Text style={Globalstyle.locationText}>automatically, turn </Text>
                        <Text style={Globalstyle.locationText}>on location services</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={Globalstyle.Touchablebut} >
                            <Text style={Globalstyle.Touchablebuttext}>Turn on Location</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={Globalstyle.imagecontbg}>
                <View style={Globalstyle.imagecontmain}>
                    <View style={Globalstyle.imagecont}>
                        <View >
                            <Image style={Globalstyle.image} source={require('../assets/car.png')} />
                            <Text style={Globalstyle.imagetxt}>Ride</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('pickpick')
                                }}>
                            <Image style={Globalstyle.image} source={require('../assets/package.png')} />
                                <Text style={Globalstyle.imagetxt}>Package</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <TextInput style={Globalstyle.textinput} placeholder='Enter pickup point' placeholderTextColor='white' color='white' />
                        <Text style={Globalstyle.aroundtext}>Around you</Text>
                    </View>
                </View>
                <View style={Globalstyle.mapContainer}>
                <MapView style={Globalstyle.mapCont}>
                   
                </MapView>
            </View>
            </View>
        </View>

    )
}

export default PickPickup