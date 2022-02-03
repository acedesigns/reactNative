/* =======================================================
 *
 * Created by anele on 2021/06/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LogInScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  SplashScreen,
} from '../screens/AuthScreens';

const AuthStack = createStackNavigator();

const AuthStackNavigator = ({navigator}) => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
    <AuthStack.Screen name="LogInScreen" component={LogInScreen} />
    <AuthStack.Screen
      name="ForgotPasswordScreen"
      component={ForgotPasswordScreen}
    />
    <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
  </AuthStack.Navigator>
);

export default AuthStackNavigator;
