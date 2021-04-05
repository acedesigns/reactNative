/* =======================================================
 *
 * Created by anele on 2021/04/05.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from "react";
import { Alert, Text, View, StyleSheet, Button } from "react-native";

const LogInScreen = ({navigation}) => {

    return(
        <View style={styles.container}>

            <Text>Log In Screen</Text>

            <Button title="Log in" onPress={() => {Alert.alert("Log in", "We will log you in")} }/>

            <Button title="Forgot My Password" onPress={() => {navigation.navigate("ForgotPasswordScreen")} }/>

            <Button title="Register"  onPress={() => {navigation.navigate("RegisterScreen")} } />

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default LogInScreen;
