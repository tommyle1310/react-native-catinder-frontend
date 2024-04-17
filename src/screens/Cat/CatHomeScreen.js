import { View, Text, KeyboardAvoidingView, Platform, FlatList, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { customSafeAreaView, h3Bold, h3Light, h4Bold, h4Light, h5Bold, h5Light, justifyCenter, linklbl, smallText, smallTextGray } from '../../constants/css'
import { Entypo, AntDesign } from '@expo/vector-icons';
import { colorPalettes } from '../../constants/colors'
import SearchBar from '../../components/SearchBar';
import { catHomeBtns, catHomeCategory, cats } from '../../constants/sampleData';
import Spacer from '../../components/Spacer';

const { colorSet1: { charcoal, lightOrange, darkViolet, lightDark, softPurple, softWhite, lightViolet, darkOrange } } = colorPalettes

const CatHomeScreen = ({ navigation }) => {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={{ ...customSafeAreaView, backgroundColor: charcoal, height: 120, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <Text style={h5Light}>Explore</Text>
                    <Text style={h4Bold}>Purrfect Matches</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Entypo name="location-pin" size={24} color="black" />
                    <Text style={smallText}>Phan Huy Ich, Saigon</Text>
                    <Entypo name="chevron-down" size={14} color="black" />
                </View>
            </View>
            <ScrollView style={{ marginTop: 120, flex: 1 }}>
                <SearchBar />
                <Spacer>
                    <TouchableOpacity onPress={() => navigation.navigate('CatRating')} style={{ borderRadius: 10, padding: 10, backgroundColor: darkViolet, elevation: 10 }}>
                        <Text style={{ color: softWhite }}>Satisfy with <Text style={{ ...h5Bold, color: softWhite }}>Doraemi</Text>? Give her a rating!</Text>
                    </TouchableOpacity>
                </Spacer>
                <Spacer>
                    <View style={styles.container}>
                        {catHomeBtns?.length > 0 && catHomeBtns.map((item, index) => (
                            <TouchableOpacity onPress={item.onTap} key={index} style={styles.button}>
                                <Text style={smallText}>{item.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <Spacer />
                    <Spacer />
                    <FlatList horizontal data={catHomeCategory} keyExtractor={item => item.title} renderItem={({ item }) => (
                        <TouchableOpacity style={{ maxHeight: 34, justifyContent: 'center', margin: 5, alignItems: 'center', backgroundColor: charcoal, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 20 }} onPress={item.onTap}><Text style={{ ...h5Light, color: softPurple }}>{item.title}</Text></TouchableOpacity>
                    )} />
                    <View style={{ ...justifyCenter, marginTop: 20 }}>
                        <Text style={h3Light}>Popular</Text>
                        <TouchableOpacity><Text style={linklbl}>See all</Text></TouchableOpacity>
                    </View>
                    <View>
                        <FlatList horizontal data={cats.homeListCats} keyExtractor={item => item.id} renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('CatDetails')} style={{ marginVertical: 20, position: 'relative', borderWidth: 1, marginRight: 10, borderRadius: 12, elevation: 4, borderColor: charcoal }}>
                                <Image source={item.image} style={{ width: 140, height: 200, borderRadius: 12 }} />
                                <View style={{ ...styles.cardAbsoluteItem, left: 5, bottom: 50 }}><Text style={{ ...smallText, color: softWhite }}>{item.name}</Text></View>
                                <View style={{ ...styles.cardAbsoluteItem, left: 5, bottom: 10 }}><Text style={{ ...smallText, color: softWhite }}>{item.star}</Text></View>
                                <TouchableOpacity style={{ ...styles.cardAbsoluteItem, right: 5, bottom: 10, backgroundColor: softWhite }}><AntDesign name="heart" size={12} color="red" /></TouchableOpacity>
                            </TouchableOpacity>
                        )} />
                    </View>
                </Spacer>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    cardAbsoluteItem: {
        position: 'absolute', bottom: 0,
        backgroundColor: lightDark, padding: 5,
        flexDirection: 'column', borderRadius: 16,
        justifyContent: 'center', alignItems: 'center',
        elevation: 3
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
    },
    button: {
        width: '30%',  // Adjust the width based on your preference
        height: 100, // Adjust the height based on your preference
        justifyContent: 'center',
        backgroundColor: softWhite,
        borderWidth: 1, borderColor: charcoal,
        margin: 3, elevation: 3,
        alignItems: 'center',
        borderRadius: 10,
    }

})

CatHomeScreen.navigationOptions = {
    headerShown: false,
}

export default CatHomeScreen