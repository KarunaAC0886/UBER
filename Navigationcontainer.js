import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import OnboardAccount from "./myscreens/OnboardAccount";
import PickPickup from "./myscreens/PickPickup";
import AccountHome from "./myscreens/AccountHome";

const drawer = createDrawerNavigator();
const Navigationcontainer = () => {
    return (
        <NavigationContainer>
            <drawer.Navigator initialRouteName="Login">
                <drawer.Screen name="Login" component={OnboardAccount} options={{ headerShown: false }} />
                <drawer.Screen name="Home" component={PickPickup} options={{ headerBackground: "green" }} />
                <drawer.Screen name="Profile" component={AccountHome} options={{ headerShown: false }} />
            </drawer.Navigator>
        </NavigationContainer>
    )
}

export default Navigationcontainer;