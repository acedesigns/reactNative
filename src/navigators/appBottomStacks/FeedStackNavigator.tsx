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

const FeedStack = createStackNavigator();

import { FeedScreen } from "../../screens/appScreens";


const FeedStackNavigator = ({navigation}) => (
    <FeedStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#71AD43"
            },
            headerTintColor: "#fff"
    }}>
        <FeedStack.Screen
            name="FeedScreen"
            options={{
                title:'Feed',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#71AD43" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }}
            component={FeedScreen} />
    </FeedStack.Navigator>
);


export default FeedStackNavigator;