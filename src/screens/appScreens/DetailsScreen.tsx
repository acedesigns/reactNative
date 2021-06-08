/* =======================================================
 *
 * Created by anele on 2021/06/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";

const DetailsScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
        </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});