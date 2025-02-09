import {FontAwesome5} from '@expo/vector-icons';
import React from 'react';
import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';

const NotFound = () => {
    const mode = useColorScheme();

    return (
        <ScrollView
            style={{flex: 1}}
            contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
                <View
                    style={[styles.secondaryContainer]}>
                    <FontAwesome5 name="box-open" size={50} color={mode === "dark" ? "white" : "black"} />
                    <View>
                        <Text style={styles.primaryText}>
                            No Jobs Found
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default NotFound;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    secondaryContainer: {
        rowGap: 10,
        flexDirection: "column",
        alignItems: "center"
    },
    primaryText: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        color: "black"
    }
})