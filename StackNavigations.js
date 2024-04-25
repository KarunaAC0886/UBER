
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AccountHome from "./myscreens/AccountHome";
import Tripspage from "./myscreens/Tripspage";
import MessagesPage from "./myscreens/MessagesPage";
import BackNavigator from "./myscreens/BackNavigator";
import PaymentPage from "./myscreens/PaymentPage";
import UberPassPage from "./myscreens/UberPassPage";
import AccountSettings from "./myscreens/AccountSettings";
import OnboardAccount from "./myscreens/OnboardAccount";
import OnboardLogin from "./myscreens/OnboardLogin";
import OnboardPhonenumber from "./myscreens/OnboardPhonenumber";
import OnboardSocial from "./myscreens/OnboardSocial";
import OnboardFirst from "./myscreens/OnboardFirst";
import OnboardProfile from "./myscreens/OnboardProfile";
import OnboardPayment from "./myscreens/OnboardPayment";
import OnboardLater from "./myscreens/OnboardLater";
import PickPickup from "./myscreens/PickPickup";
import PickHome from "./myscreens/PickHome";
import PickSendpack from "./myscreens/PickSendpack";
import PickReceivepack from "./myscreens/PickReceivepack";
import OnboardBackNavigator from "./myscreens/OnboardBackNavigator";



const Stack = createNativeStackNavigator();

const StackNavigations = () => {
    return (
        
            <NavigationContainer>
                <Stack.Navigator initialRouteName="menu">
                    <Stack.Screen name="onboardaccount" component={OnboardAccount} options={{ headerShown: false }} />
                    <Stack.Screen name="onboardlogin" component={OnboardLogin} options={{ headerShown: false }} />
                    <Stack.Screen name="onboardphonenumber" component={OnboardPhonenumber} options={{ headerShown: false }} />
                    <Stack.Screen name="onboardsocial" component={OnboardSocial} options={{ headerShown: false }} />
                    <Stack.Screen name="onboardfirst" component={OnboardFirst} options={{ headerShown: false }} />
                    <Stack.Screen name="onboardprofile" component={OnboardProfile} options={{ headerShown: false }} />
                    <Stack.Screen name="onboardpayment" component={OnboardPayment} options={{ headerShown: false }} />
                    <Stack.Screen name="onboardlater" component={OnboardLater} options={{ headerShown: false }} />
                    
                    <Stack.Screen name="pickpick" component={PickPickup} options={{ headerBackground: "green" }} />
                    <Stack.Screen name="pickhome" component={PickHome} options={{ headerShown: false }} />
                    <Stack.Screen name="picksend" component={PickSendpack} options={{ headerShown: false }} />
                    <Stack.Screen name="pickreceive" component={PickReceivepack} options={{ headerShown: false }} />
                    
                    <Stack.Screen name="account" component={AccountHome} options={{ headerShown: false }} />
                    <Stack.Screen name="messages" component={MessagesPage} options={{ headerShown: false }} />
                    <Stack.Screen name="trips" component={Tripspage} options={{ headerShown: false }} />
                    <Stack.Screen name="BackNavigator" component={BackNavigator} options={{ headerShown: false }} />
                    <Stack.Screen name="Payment" component={PaymentPage} options={{ headerShown: false }} />
                    <Stack.Screen name="UberPass" component={UberPassPage} options={{ headerShown: false }} />
                    <Stack.Screen name="accountsettings" component={AccountSettings} options={{ headerShown: false }} />
                    <Stack.Screen name="back" component={OnboardBackNavigator} options={{ headerShown: false }} />
                    
                </Stack.Navigator>
            </NavigationContainer>
        
    )
}
export default StackNavigations