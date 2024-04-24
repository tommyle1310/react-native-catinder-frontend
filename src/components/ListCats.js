import React, { useContext, useEffect, useState } from 'react'
import { View, Text, KeyboardAvoidingView, ScrollView, Platform, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colorPalettes } from '../constants/colors';
import { navigate } from '../navigationRef';
import { AntDesign } from '@expo/vector-icons';
import useDisplayStars from '../hooks/useDisplayStars';
import { Context as CatContext } from '../context/catContext'
import { Context as UserContext } from '../context/userContext'
import { NavigationEvents } from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListItemButtonGroup } from '@rneui/base/dist/ListItem/ListItem.ButtonGroup';



const { colorSet1: { softWhite, softGray, darkViolet, softViolet, lightViolet, lightDark, charcoal, lightOrange } } = colorPalettes;


const ListCats = () => {
    const { state: catState, getListCats } = useContext(CatContext)
    const { getFavoriteCats, state: userState, modifyListFavoriteCats } = useContext(UserContext)
    const [favCats, setFavCats] = useState([])
    const [listCats, setListCats] = useState([])
    const handleClickFavorite = async (selectedFavCat) => {
        const id = await AsyncStorage.getItem('userId')
        await modifyListFavoriteCats({ userId: id, catId: selectedFavCat._id })
        setFavCats(userState.listFavoriteCats)
    }
    useEffect(() => {
        getAllCats();
        if (catState.listCats.length > 0) {
            setListCats(catState.listCats);
        }
        getListFavoriteCats();
    }, [favCats]); // Include favCats as a dependency

    const getAllCats = async () => {
        await getListCats()
    }
    const getListFavoriteCats = async () => {
        const id = await AsyncStorage.getItem('userId')
        await getFavoriteCats(id)
        setFavCats(userState.listFavoriteCats)

    }
    useEffect(() => {

        getAllCats()
        if (catState.listCats.length > 0) {
            setListCats(catState.listCats)
        }
        getListFavoriteCats()
    }, [])



    return (
        <View
            style={styles.container}
        >
            {listCats.map((cat) => (
                <TouchableOpacity onPress={() => navigate('CatDetails', { catDetail: cat })} key={cat._id} style={styles.cardContainer}>
                    <NavigationEvents onDidFocus={() => { }} />
                    <View style={styles.card}>
                        <View style={{ position: 'relative' }}>
                            <TouchableOpacity
                                onPress={() => handleClickFavorite(cat)}
                                style={styles.favoriteIconContainer}>
                                {favCats?.some(item => item._id === cat._id) ?
                                    <AntDesign name="heart" size={14} color={'red'} /> :
                                    <AntDesign name="heart" size={14} color={softGray} />}
                            </TouchableOpacity>
                            <Image source={cat.image} style={styles.image} />
                        </View>
                        <Text style={{ fontWeight: 700 }}>{cat.name}</Text>
                        <Text style={{ fontSize: 12 }}>Gender: {cat.gender === true ? 'Male' : 'Female'}</Text>
                        <Text style={{ fontSize: 10, color: lightDark }}>{cat.description}</Text>
                        <View style={{ justifyContent: 'flex-end', flex: 1 }}><Text style={{ alignSelf: 'flex-end' }}>{useDisplayStars({ number: cat.star, color: lightViolet, size: 14 })}</Text></View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
        backgroundColor: softWhite,
        borderWidth: 1,
        elevation: 6,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        flex: 1,
        minHeight: 200
    },
    image: {
        width: '100%',
        borderWidth: 1,
        borderColor: softGray,
        height: 100, // Set the desired height for the image
        borderRadius: 5, // Optional: add border radius for rounded corners
        marginBottom: 10, // Optional: add margin bottom for spacing
    },
    favoriteIconContainer: { position: 'absolute', height: 30, width: 30, zIndex: 10, backgroundColor: '#eee', paddingBottom: 5, paddingLeft: 5, borderBottomLeftRadius: 9999, right: 0, justifyContent: 'center', alignItems: 'center' }
});

export default ListCats