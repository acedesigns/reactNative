/* =======================================================
 *
 * Created by anele on 2021/04/05.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React, { useEffect } from "react";
import { Alert, Text, View, StyleSheet, Button } from "react-native";

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("LogInScreen");
        }, 3000);
    }, []);

    return(
        <View style={styles.container}>

            <Text>Splash Screen</Text>

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

export default SplashScreen;
