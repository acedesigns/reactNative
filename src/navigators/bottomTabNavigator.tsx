/* =======================================================
 *
 * Created by anele on 2021/06/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

import {
  homeStackNavigator,
  FeedStackNavigator,
  profileStackNavigator,
  NotificationStackNavigator,
} from './appBottomStacks';


const bottomTabNavigator = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        shifting={true}
    >
        <Tab.Screen
            name="Home"
            component={homeStackNavigator}
            options={{
                tabBarLabel: "Home",
                tabBarColor: "#009387",
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}/>

        <Tab.Screen
            name="Feed"
            component={FeedStackNavigator}
            options={{
                tabBarLabel: 'Feed',
                tabBarColor: "#71AD43",
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="earth-plus" color={color} size={26} />
                ),
        }}/>

        <Tab.Screen
            name="Profile"
            component={profileStackNavigator}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: "#00B6AA",
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }}/>

        <Tab.Screen
            name="Notifications"
            component={NotificationStackNavigator}
            options={{
                tabBarLabel: 'Updates',
                tabBarColor: "#95a5a6",
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={26} />
                ),
            }}/>
    </Tab.Navigator>
);

export default bottomTabNavigator;
