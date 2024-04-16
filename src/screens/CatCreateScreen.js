import { View, Text, Platform, KeyboardAvoidingView, StyleSheet, ScrollView, TextInput, FlatList, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colorPalettes } from '../constants/colors';
import { defaultInput } from '../constants/css';
import Spacer from '../components/Spacer';
import { Ionicons } from '@expo/vector-icons';

const { colorSet1: { softWhite, darkViolet, charcoal, darkOrange, lightDark, lightViolet } } = colorPalettes;
const defaultSampleImages = [
    { species: 'jack' },
    // { species: 'tom' },
    // { species: 'oggy' },
    // { species: 'doraemon' },
    // { species: 'muop' }
]


const CatCreateScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('Home')}><Ionicons name="chevron-back" size={24} color="black" /><Text>Home</Text></TouchableOpacity>
                    <Text style={{ alignSelf: 'center', fontSize: 30, fontWeight: 600, color: lightViolet }}>Add my cat 😺</Text>
                    <Spacer />
                    <View style={{}}>
                        <Spacer>
                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                <Text style={{ fontWeight: 600 }}>Name: </Text>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <TextInput style={defaultInput} placeholder='TOmy' />
                                </View>
                            </View>
                        </Spacer>
                        <Spacer>
                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                <Text style={{ fontWeight: 600 }}>Age: </Text>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <TextInput style={defaultInput} placeholder='3' />
                                </View>
                            </View>
                        </Spacer>
                        <Spacer>
                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                <Text style={{ fontWeight: 600 }}>Species: </Text>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <TextInput style={defaultInput} placeholder='Oggy' />
                                </View>
                            </View>
                        </Spacer>
                        <Spacer>
                            <View style={{ gap: 5, alignItems: 'flex-start' }}>
                                <Text style={{ fontWeight: 600 }}>Short Description: </Text>
                                <View style={{ flex: 1, alignItems: 'flex-end', width: '100%' }}>
                                    <TextInput style={{ ...defaultInput, width: '100%' }} placeholder='Oggy' />
                                </View>
                            </View>
                        </Spacer>
                        <Spacer>
                            <View style={{ gap: 5, alignItems: 'flex-start' }}>
                                <Text style={{ fontWeight: 600 }}>Upload his/her best Images: </Text>
                                <View style={{ flex: 1, alignItems: 'flex-end', width: '100%' }}>
                                    <FlatList
                                        data={defaultSampleImages}
                                        keyExtractor={item => item.species}
                                        horizontal
                                        renderItem={({ item, index }) => {
                                            // Render the item view
                                            if (index !== defaultSampleImages.length - 1) {
                                                return (
                                                    <View style={styles.imageContainer}>
                                                        <View style={styles.imageItem}>
                                                            <Text>{item.species}</Text>
                                                        </View>
                                                    </View>
                                                );
                                            } else { // Render the "+ View" for the last item
                                                return (
                                                    <>
                                                        <View style={styles.imageContainer}>
                                                            <View style={styles.imageItem}>
                                                                <Text>{item.species}</Text>
                                                            </View>
                                                        </View>
                                                        <View style={styles.imageContainer}>
                                                            <View style={[styles.item, { justifyContent: 'center' }]}>
                                                                <Text style={{ fontWeight: 'bold' }}>+ Add</Text>
                                                            </View>
                                                        </View>
                                                    </>


                                                );
                                            }
                                        }}
                                    />

                                </View>
                            </View>
                        </Spacer>
                    </View>
                    <Spacer>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ color: softWhite }}>Add</Text>
                        </TouchableOpacity>
                    </Spacer>


                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: softWhite,
        justifyContent: 'center',
        padding: 10,
        flexGrow: 1
    },
    imageContainer: {
        minHeight: 200,
        minWidth: 200,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 10,
        elevation: 5,
        borderRadius: 4,
        backgroundColor: '#ddd',
        margin: 10
    },
    imageItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: darkViolet,
        color: charcoal,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        borderRadius: 8
    },
})

export default CatCreateScreen