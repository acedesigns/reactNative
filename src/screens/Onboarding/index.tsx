/* =======================================================
 *
 * Created by anele on 2021/04/05.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from "react";
import { View, Text, StyleSheet} from "react-native";

const Onboarding = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text> On boarding Screen </Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Onboarding;