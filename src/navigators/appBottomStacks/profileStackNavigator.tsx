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

const ProfileStack = createStackNavigator();

import { ProfileScreen } from "../../screens/appScreens";


const profileStackNavigator = ({navigation}) => (
    <ProfileStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#00B6AA"
            },
            headerTintColor: "#fff"
    }}>
        <ProfileStack.Screen
            name="ProfileScreen"
            options={{
                title:'Profile',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#00B6AA" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }}
            component={ProfileScreen} />
    </ProfileStack.Navigator>
);


export default profileStackNavigator;