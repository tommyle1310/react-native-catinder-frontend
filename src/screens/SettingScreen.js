import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context as AuthContext } from '../context/authContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colorPalettes } from '../constants/colors';
import { Ionicons, Entypo, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import SettingItem from '../components/Setting/SettingItem';
import Spacer from '../components/Spacer';
import { navigate } from '../navigationRef';
import { customSafeAreaView } from '../constants/css';


const { colorSet1: { softWhite, darkViolet, lightOrange, darkOrange, charcoal, lightDark } } = colorPalettes;

const settingData = {
    account: [
        { label: 'Edit profile', iconRight: <Entypo name="chevron-right" size={20} color={lightDark} />, onTap: () => { navigate('UserInfo', { tabType: 'SettingUserInfoTab' }) } },
        { label: `Edit my cats' profile`, iconRight: <Entypo name="chevron-right" size={20} color={lightDark} />, onTap: () => { navigate('UserInfo', { tabType: 'SettingUserCatInfoTab' }) } },
        { label: `Add cats`, iconRight: <Feather name="plus" size={20} color={lightDark} />, onTap: () => { navigate('CatCreate') } },
        { label: 'Change password', iconRight: <Entypo name="chevron-right" size={20} color={lightDark} />, onTap: () => { } },
        { label: 'Add a payment method', iconRight: <Feather name="plus" size={20} color={lightDark} />, onTap: () => { } },
        { label: 'Push notifications', iconRight: <Entypo name="chevron-right" size={20} color={lightDark} />, onTap: () => { } },
    ],
    more: [
        { label: 'About us', iconRight: <Entypo name="chevron-right" size={20} color={lightDark} />, onTap: () => { } },
        { label: `Privacy policy`, iconRight: <Entypo name="chevron-right" size={20} color={lightDark} />, onTap: () => { } },
        { label: `Terms and conditions`, iconRight: <Entypo name="chevron-right" size={20} color={lightDark} />, onTap: () => { } },
    ]
}

const SettingScreen = () => {
    const { getUserInfo } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    useEffect(() => {
        const getInfo = async () => {
            const getInfo = async () => {
                const { email, username } = await getUserInfo()
                setEmail(email)
                setUsername(username)
            };
            getInfo();
        };

        getInfo();
    }, []);
    const { signout } = useContext(AuthContext)
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <LinearGradient
                colors={[darkViolet, darkOrange]}
                style={{ ...customSafeAreaView, borderBottomLeftRadius: 20, borderBottomRightRadius: 40, }}
            >
                <Ionicons name="settings" size={30} color="black" />
                <Text style={{ marginTop: -5, fontSize: 28, fontWeight: 700 }}>Settings</Text>
            </LinearGradient>

            <View style={{ elevation: 20, backgroundColor: softWhite, margin: 10, padding: 10, borderTopEndRadius: 8, borderTopLeftRadius: 8, flex: 1, marginTop: 100 }}>
                <View style={{ width: '100%', gap: 5, alignItems: 'center', flexDirection: 'row', borderBottomWidth: 1, paddingBottom: 10, borderColor: charcoal }}>
                    <View style={{ backgroundColor: 'red', borderRadius: 9999, width: 50, height: 50 }}></View>
                    <Text style={{ fontSize: 20, fontWeight: 600 }}>{username}</Text>
                </View>

                <SettingItem title={'Account Settings'} data={settingData.account} />
                <SettingItem title={'More'} data={settingData.more} />
                <Spacer />
                <TouchableOpacity style={{ backgroundColor: lightOrange, paddingVertical: 10, borderRadius: 8, alignItems: 'center' }} onPress={signout}><Text style={{ fontWeight: 600 }}>Sign Out</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    upperSetting: {
        height: 200,
        width: '100%', position: 'absolute',
        paddingTop: 50, borderBottomLeftRadius: 20,
        borderBottomRightRadius: 40,
        padding: 10, flexDirection: 'row',
        gap: 5, justifyContent: 'start'
    }
})

SettingScreen.navigationOptions = {
    headerShown: false,
    title: null, tabBarIcon: <Ionicons name="settings" size={20} color="black" />
}

export default SettingScreen