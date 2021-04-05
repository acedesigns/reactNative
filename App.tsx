/* =======================================================
 *
 * Created by anele on 2021/04/05.
 *
 * @anele_ace
 *
 * =======================================================
 */

 import React, { useState, useEffect, useMemo, useReducer } from "react";
 import {
     StyleSheet,
     Text,View,
     Alert,
     SafeAreaView
 } from "react-native";
import { AuthContext } from "./src/components/context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();
const AppStack = createStackNavigator();

import { LogInScreen, RegisterScreen, ForgotPasswordScreen } from "./src/screens/AuthScreens/";

 const App = () => {

     const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(false);

     const initialLoginState = {
         isLoading: true,
         userName: null,
         userToken: null,
     };

     const loginReducer = (prevState, action) => {
         switch( action.type ) {
             case 'RETRIEVE_TOKEN':
                 return {
                     ...prevState,
                     userToken: action.token,
                     isLoading: false,
                 };
             case 'LOGIN':
                 return {
                     ...prevState,
                     userName: action.id,
                     userToken: action.token,
                     isLoading: false,
                 };
             case 'LOGOUT':
                 return {
                     ...prevState,
                     userName: null,
                     userToken: null,
                     isLoading: false,
                 };
             case 'REGISTER':
                 return {
                     ...prevState,
                     userName: action.id,
                     userToken: action.token,
                     isLoading: false,
                 };
         }
     };

     const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

     const authContext = useMemo(() => ({
         signIn: async(foundUser) => {
             const userToken = String(foundUser[0].userToken);
             const userName = foundUser[0].username;

             try {
                 await AsyncStorage.setItem('userToken', userToken);
             } catch(e) {
                 console.log(e);
             }
             dispatch({ type: 'LOGIN', id: userName, token: userToken });
         },
         signOut: async() => {
             try {
                 await AsyncStorage.removeItem('userToken');
             } catch(e) {
                 console.log(e);
             }
             dispatch({ type: 'LOGOUT' });
         },
         signUp: () => {
         },
     }), []);


     useEffect(() => {
         setTimeout(async() => {
             let userToken = null;
             try {
                 userToken = await AsyncStorage.getItem("userToken");
             } catch(e) {
                 Alert.alert("Could Not get userToken");
             }
             dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
         }, 1000);
     }, []);



     if ( isFirstLaunch == null ) {
         return null;
     } else if ( isFirstLaunch !== true) {
         return (
             <SafeAreaView style={styles.container}>
                 <AuthContext.Provider value={authContext}>
                     <NavigationContainer>
                         <AppStack.Navigator headerMode="none">
                             <AppStack.Screen name="LogInScreen" component={LogInScreen} />
                             <AppStack.Screen name="RegisterScreen" component={RegisterScreen} />
                             <AppStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
                         </AppStack.Navigator>
                     </NavigationContainer>
                 </AuthContext.Provider>
             </SafeAreaView>
         )
     } else {
         return (
             <SafeAreaView style={styles.container}>
                 <View style={styles.textScreen}>
                     <Text>Make A Splash Screen</Text>
                 </View>
             </SafeAreaView>
         )
     }
 };

 const styles = StyleSheet.create({
     container: {
		flex: 1,
	 },
     textScreen: {
         flex: 1,
         alignItems: "center",
         justifyContent: "center"
     }
 });

 export default App;
