import { View, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { colorPalettes } from '../constants/colors';

const { colorSet1: { softWhite, darkViolet, charcoal, darkOrange } } = colorPalettes;


const SearchBar = ({ bgColor, shadow }) => {
    return (
        <View style={{ ...styles.searchBar, backgroundColor: bgColor }}>
            <View
                style={{
                    flexDirection: 'row',
                    gap: 5,
                    alignItems: 'center',
                    width: '100%',
                    backgroundColor: charcoal,
                    borderRadius: 10,
                    padding: 3
                }}>
                <View style={{
                    flexDirection: 'row',
                    gap: 5,
                    alignItems: 'center',
                    width: '100%',
                    backgroundColor: softWhite,
                    borderRadius: 10,
                    padding: 8, elevation: shadow
                }}>
                    <FontAwesome5 name="search" size={24} color="black" />
                    <TextInput style={styles.input} />

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        padding: 10,
    },
    input: {
        borderRadius: 5,
        paddingVertical: 2,
        paddingHorizontal: 8,
        flex: 1
    },
})

export default SearchBar