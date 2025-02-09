import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const ScreenLoader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    );
};

export default ScreenLoader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})