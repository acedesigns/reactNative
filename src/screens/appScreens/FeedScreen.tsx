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

const FeedScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text> Feed Screen</Text>
        </View>
    );
};

export default FeedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
});