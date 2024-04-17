import { View, Text, KeyboardAvoidingView, Platform, TouchableOpacity, FlatList, Image, ScrollView, ScrollViewBase } from 'react-native'
import React, { useEffect, useState } from 'react'
import { customSafeAreaView, h2Bold, h3Bold, h4Bold, h5Light, imageCircle, roundedFull } from '../../constants/css'
import { colorPalettes } from '../../constants/colors'
import useRetrieveUserInfo from '../../hooks/useRetrieveUserInfo'
import { Ionicons, Feather } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import Spacer from '../../components/Spacer'
import SearchBar from '../../components/SearchBar'
import { cats } from '../../constants/sampleData'
import { SafeAreaView } from 'react-native-safe-area-context'


const { colorSet1: { charcoal, softWhite, lightDark } } = colorPalettes

const getRandomEmoji = () => {
    const randomEmoji = ['🤣', '🛒', '😁', '🙌', '💀', '👌']
    const totalLengthEmoji = randomEmoji.length
    return randomEmoji[Math.floor(Math.random() * totalLengthEmoji)]
}

const CatFavoriteScreen = ({ navigation }) => {
    const [username, email] = useRetrieveUserInfo()
    const [randomEmoji, setRandomEmoji] = useState('')
    useEffect(() => {
        setRandomEmoji(getRandomEmoji())
    }, [])
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={{ ...customSafeAreaView, height: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}><Ionicons name="chevron-back" size={24} color={lightDark} style={{ elevation: 10 }} /><Text style={{ color: lightDark, elevation: 10 }}>Home</Text></TouchableOpacity>
                <Text style={h2Bold}>My Favorite Cats</Text>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView style={{ marginTop: 120 }}>
                    <Text style={{ ...h4Bold, alignSelf: 'center' }}>Good day, {username} {randomEmoji}</Text>
                    <Spacer />
                    <SearchBar shadow={20} />
                    <Spacer >
                        {cats.homeListCats.length > 0 &&
                            cats.homeListCats.map((item) => (
                                <TouchableOpacity onPress={() => navigation.navigate('CatDetails')} key={item.id} style={{ elevation: 3, backgroundColor: softWhite, width: '100%', alignItems: 'center', flexDirection: 'row', gap: 10, borderRadius: 10, padding: 10, marginBottom: 10 }}>
                                    <Image style={imageCircle} source={item.image} />
                                    <View style={{ justifyContent: 'center', flex: 1 }}>
                                        <Text style={h5Light}>{item.name}</Text>
                                        <Text>{item.star}</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Feather name="more-horizontal" size={20} color="black" />
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            ))
                        }
                    </Spacer>
                    <View style={{ marginTop: 30, flex: 1 }}></View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}

CatFavoriteScreen.navigationOptions = {
    headerShown: false,
}


export default withNavigation(CatFavoriteScreen)