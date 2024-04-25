import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import  Globalstyle  from "./Globalstyle";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PickHome = () => {
    const navigation = useNavigation()
    return (
        <View style={Globalstyle.Pickhmcontainer}>
            <TouchableOpacity style={Globalstyle.icon1} onPress={() => {
                navigation.goBack()
            }}>
                <FontAwesome name="arrow-left" size={25} color={"white"} /></TouchableOpacity>
            <TouchableOpacity style={Globalstyle.iconifo}>
                <FontAwesome name="info-circle" size={15} color={"#EDF6FF"} /><Text style={Globalstyle.iconinfostyle} >What to send</Text>
            </TouchableOpacity>
            <View  >
                <View>
                    <Image
                        source={require('../assets/Images/img.png')}
                        style={Globalstyle.imgdata}
                    />
                </View>
                <View style={{ top: 50 }}>
                    <Text style={Globalstyle.primrytext}>Send packages with Connect</Text>
                    <Text style={Globalstyle.Packagestxt}>Get it delivered in the time it takes to drive there</Text>
                    <TouchableOpacity style={Globalstyle.Packagebtn} onPress={() => {
                        navigation.navigate('picksend')
                    }}>
                        <Text style={Globalstyle.Packagebtntxt} >Send a package</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Globalstyle.Packagesrvcbtn} onPress={() => {
                        navigation.navigate('pickreceive')
                    }}>
                        <Text style={Globalstyle.Packagebtntxt} >Receive a package</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default PickHome;

const styles = StyleSheet.create({


    imgdata: {
        width: 50,
        right: 10
    }
});
