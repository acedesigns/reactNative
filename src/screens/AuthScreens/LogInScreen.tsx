/* =======================================================
 *
 * Created by anele on 2021/04/05.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React, { useState, useContext } from "react";
import { Alert, Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { AuthContext } from "../../components/context";

const LogInScreen = ({navigation}) => {

    const { logInMethod } = useContext(AuthContext);

    return(
        <View style={styles.container}>


            <TouchableOpacity
                onPress={() => { logInMethod() }}>

                <Text>Sign In</Text>

            </TouchableOpacity>


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
