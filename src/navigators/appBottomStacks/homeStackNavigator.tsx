/* =======================================================
 *
 * Created by anele on 2021/06/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator();

import { HomeScreen, DetailsScreen } from "../../screens/appScreens";


const homeStackNavigator = ({navigation}) => (
    <HomeStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#009387"
            },
            headerTintColor: "#fff"
    }}>
        <HomeStack.Screen
            name="HomeScreen"
            options={{
                title:'Home',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }}
            component={HomeScreen} />

        <HomeStack.Screen name="DetailsScreen" component={DetailsScreen} />
    </HomeStack.Navigator>
);


export default homeStackNavigator;