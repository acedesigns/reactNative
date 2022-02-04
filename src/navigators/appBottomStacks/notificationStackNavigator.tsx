/* =======================================================
 *
 * Created by anele on 2021/06/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';

const NoticeStack = createStackNavigator();

import {NotificationScreen} from '../../screens/appScreens';

const NotificationStackNavigator = ({navigation}) => (
  <NoticeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#95a5a6',
      },
      headerTintColor: '#fff',
    }}>
    <NoticeStack.Screen
      name="NotificationScreen"
      options={{
        title: 'Notifications',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#95a5a6"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
      component={NotificationScreen}
    />
  </NoticeStack.Navigator>
);

export default NotificationStackNavigator;
