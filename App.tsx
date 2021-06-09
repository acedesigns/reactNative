/* =======================================================
 *
 * Created by anele on 2021/04/05.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { AuthContext } from "./src/components/context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, useMemo, useReducer } from "react";


const AppStack = createStackNavigator();


import AuthStackNavigator from "./src/navigators/AuthStackNavigator";
import DrawerStackNavigator from "./src/navigators/appDrawerNavigator"

 const App = () => {

     const [isLoading, setIsLoading] = useState(true);
     const [userToken, setUserToken] = useState(null);

     const authContext = useMemo(() => ( {
         logInMethod: () => {
             setUserToken("abc");
             setIsLoading(false);
         },
         logOutMethod: () => {
             setUserToken(null);
             setIsLoading(false);
         },
         registerMethod: () => {
             setUserToken("abc");
             setIsLoading(false);
         },
     } ) );

     useEffect(() => {
         setTimeout(() => {
             setIsLoading(false);
         }, 5000)
     }, []);

     if (isLoading) {
         return (
             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                 <ActivityIndicator size="large" />
             </View>
         )
     }
     return (

         <AuthContext.Provider value={authContext}>
             <NavigationContainer>
                 { userToken !== null ?
                     ( <DrawerStackNavigator /> )
                     :  <AuthStackNavigator />
                 }
             </NavigationContainer>
         </AuthContext.Provider>
     )
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
