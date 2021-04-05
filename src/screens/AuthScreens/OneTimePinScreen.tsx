/* =======================================================
 *
 * Created by anele on 2021/04/05.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from "react";
import {
    View,
    Text,
    StyleSheet } from "react-native";

const OneTimePinScreen = () => {

    return(
        <View style={styles.container}>
            <Text>One Time Pin Screen</Text>
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

export default OneTimePinScreen;
