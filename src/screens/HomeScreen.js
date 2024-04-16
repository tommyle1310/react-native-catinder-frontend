import React, { useState } from 'react';
import { Text, KeyboardAvoidingView, ScrollView, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import { colorPalettes } from '../constants/colors';
import ListCats from '../components/ListCats';
import Spacer from '../components/Spacer'
import Blogs from '../components/Blogs';
import { Foundation } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const { colorSet1: { softWhite, softGray, darkViolet, softViolet, darkOrange, lightViolet, charcoal, lightOrange } } = colorPalettes;


const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                {/* Search bar */}
                <SearchBar />

                {/* Button match */}
                <LinearGradient
                    start={{ x: 0, y: 0 }} // Start from top left corner
                    end={{ x: 1, y: 1 }}
                    colors={[softViolet, softWhite]}
                    style={{ padding: 8, flexDirection: 'row', justifyContent: 'center', borderBottomWidth: 1, borderColor: softGray, elevation: 10 }}
                >
                    <TouchableOpacity style={{ backgroundColor: darkViolet, padding: 8, borderRadius: 10 }}>
                        <Text style={{ color: softWhite }}>Find your cat's partner</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <ScrollView>
                    <LinearGradient
                        colors={[softGray, darkOrange, lightViolet, softViolet]}
                        style={styles.container}
                        start={{ x: 0, y: 1 }} // Start from top left corner
                        end={{ x: 1, y: 0 }}
                    >
                        {/*  list cats */}
                        <ListCats />

                        {/* newsfeed */}
                        <Spacer>
                            <Blogs />
                        </Spacer>
                    </LinearGradient>
                </ScrollView>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: softWhite,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
    cardContainer: {
        width: '48%', // 2 cards per row with a small gap
        marginBottom: 10,
    },
    card: {
        backgroundColor: charcoal,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        flex: 1,
        minHeight: 200
    },
    image: {
        width: '100%',
        height: 100, // Set the desired height for the image
        borderRadius: 5, // Optional: add border radius for rounded corners
        marginBottom: 10, // Optional: add margin bottom for spacing
    },
});

Home.navigationOptions = {
    title: null, tabBarIcon: <Foundation name="home" size={24} color="black" />
}

export default Home;
