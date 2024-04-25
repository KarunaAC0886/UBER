import { View, Text, SafeAreaView, Image, TouchableOpacity, Alert, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const OnboardPayment = () => {
    const navigation = useNavigation();

    const message = 'You clicked the button. Here are some details: \n'
        + `            <Text style={{color:'#EDF6FF',top:46,left:44,width:341,height:84,fontSize:24,lineHeight:28.13}}>You won’t be able to request a ride without adding a payment method</Text>
    \n`
        + `Role: Developer\n`
        + `Employee ID: 12345\n`
        + `Company Name: ABC Corp\n`
        + `Designation: Senior Developer`;





    const handlePress = () => {
        alert("payment can add by using profile");
       navigation.navigate('account')

    };

    return (
        <SafeAreaView style={styles.onb_paymnt_main_cntr}>
            <ScrollView>
                <View style={styles.onb_paymnt_main_subcntr}>
                    <View style={styles.onb_paymnt_dothisltr_cnr}>
                        <Text style={styles.onb_paymnt_dothisltr_lbl} onPress={handlePress}>DO THIS LATER</Text>
                    </View>

                    <View>
                        <Text style={styles.onb_paymnt_paymntmtd}>Select your preferred payment method</Text>
                    </View>
                    <View style={styles.onb_paymnt_cardsmn_cntnr}>
                    <TouchableOpacity style={styles.onb_paymnt_credtcrd_cntr}>
                        <Image style={styles.onb_paymnt_card_imgs} source={{ uri: 'https://s3-alpha-sig.figma.com/img/7bd4/edd1/0897443b5159bfc2104d491257b867fe?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MGY~1Lte2orCR4k-eiB-0FjTfypl3cei-jy1Q64XYZ3-MbRkGHXorufFQlLbT5FPWEuhcpszaMJ3o7gN3T-FQp4RDh6gNmm678OOR0h~AYfFfB3cX4JedJnPhpzUJ8R02UCPCABqfCw6WmGuH4yLVzHCjozbDYfG7jRmaIYsxRoBmhvFL1HzXoqXHa7iLyuqh9Z9UExlk8jwaLgXxygRNTDAHsIWkNpROp28v0S~jJ8OYFjY4p4I9d9i36MXZ5Mdc0UeWV1lKidmxTm6uuFGYnBeJ~SH1wO8MuamN08ygnp8dOk9PesaJzvLZ9B0dLRfxW3hPZY3hGvatNofKpVDtQ__' }} />
                        <Text style={{ color: '#EDF6FF', left: 50, fontSize: 20, top: 15 }}>Credit or Debit card</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.onb_paymnt_credtcrd_cntr}>
                        <Image style={styles.onb_paymnt_card_imgs} source={{ uri: "https://s3-alpha-sig.figma.com/img/2cac/552f/96f3744b287b1d83d688b3f47d7e333e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lTvDUrRJTOverPDburlrpJWznWCNpVLS9l1RERD9dvLYtw6mKWAk4gn3P7-xPiatLPKRe9cPlj4medTUMI~z9ZNq76CRL2chf9bvo2jce4JKX9bpSV89NvMn42qyxqTVNf4NEncr8vKpvC0gC7bfszJSNGCkUtyTv0GcUoqaZZl2dmiin4RMSs2FQTem10GkdbmjfE8ekZmnRd6VXG2WWMmm4YRt72P~QWPIRHNwTvJD08FulgKLs2KiDykCAWZiTAFUq3VR6bVrVFsS37MlA7YmOPNWcqQM2eGCOiIa-uXaIJUs-AFceKhVAxGNVxk6eh-~GyIvaz9toJoWcTpU5w__" }} />
                        <Text style={{ color: '#EDF6FF', left: 50, fontSize: 20, top: 15 }}>Paytm</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.onb_paymnt_credtcrd_cntr}>
                        <Image style={styles.onb_paymnt_card_imgs} source={{ uri: 'https://s3-alpha-sig.figma.com/img/c8dc/3450/86bc810dfb4398065a9e7efb1092d155?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aNP8AYxxIOZ6t~MS123mQ8s33kNbhBg00kygNVmmcFmNNSfmSJCJzYVkmYrRDmkU9ZqyaoMBBd8g3FjfmNZ87v4WXm8QFWWOsK9QYHenij-KPkY0EaTFTCAs6oA7RwPkLXKcQF8PcGHGlvlj0K~cLghUXq93Enon75DGsxX0GvlaXoo~oQYhkj0gOLVTXZxbM~xgmAuGOMznAiqoTNdyAPVtCYu~0B5GSQaRcGfREvmpblyB85A-YV~OiZ1Mllnq3TP-PmeqZ8zlYLd-lBGHjoLYy8xtED5vHjm4W3Psoay2PtgMnc37YYe-yxq8HblzcKAvMvqSmQcEteEiZ~H0YA__' }} />
                        <Text style={{ color: '#EDF6FF', left: 50, fontSize: 20, top: 15 }}>Cash</Text>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.onb_paymnt_next_cntnr}>
                        <Text style={{ color: 'white', fontSize: 21,textAlign:'center'}} onPress={() => navigation.navigate('onboardlater')}>Next</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <StatusBar/>
        </SafeAreaView>
    )
}

export default OnboardPayment