import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Context as AuthContext } from '../context/authContext';

const DetaultScreen = () => {
    const { checkUserAlreadyLoggedIn } = useContext(AuthContext)
    useEffect(() => {
        checkUserAlreadyLoggedIn()
    }, [])
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});

export default DetaultScreen;