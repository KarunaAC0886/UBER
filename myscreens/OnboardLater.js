import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const OnboardLater = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ backgroundColor: 'black', height: '50%', top: '45%' }}>
            <View>
                <Text style={{ color: '#EDF6FF', top: 46, left: 44, width: 341, height: 84, fontSize: 24, lineHeight: 28.13 }}>You won’t be able to request a ride without adding a payment method</Text>
            </View>

            <View>
                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#EDF6FF', top: 130, width: 300, left: 37, padding: 10 }}>
                    <Text style={{ color: '#EDF6FF', fontSize: 20, textAlign: 'center' }}>Add payment method now</Text>

                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity onPress={() => navigation.navigate('account')} style={{ borderWidth: 1, borderColor: '#EDF6FF', top: 150, width: 300, left: 37, padding: 10 }}>
                    <Text style={{ color: '#EDF6FF', fontSize: 20, textAlign: 'center' }}>Do it later</Text>

                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

export default OnboardLater