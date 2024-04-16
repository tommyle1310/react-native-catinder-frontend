import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { colorPalettes } from '../constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import Spacer from '../components/Spacer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SettingUserInfoTab from '../components/Setting/SettingUserInfoTab';
import SettingUserCatInfoTab from '../components/Setting/SettingUserCatInfoTab';
import { Context as AuthContext } from '../context/authContext';
import SwitchTab from '../components/SwitchTab';

const { colorSet1: { softWhite, darkViolet, lightOrange, darkOrange, charcoal, lightDark } } = colorPalettes;


const UserInfoScreen = ({ navigation }) => {
    const { state, getUserInfo } = useContext(AuthContext)


    const [isShowMyInfo, setIsShowMyInfo] = useState(true)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    useEffect(() => {
        console.log(navigation.getParam('tabType'))
        if (navigation.getParam('tabType') === 'SettingUserInfoTab') {
            setIsShowMyInfo(true)
        } else {
            setIsShowMyInfo(false)
        }
    }, [])
    useEffect(() => {
        const getInfo = async () => {
            const { email, username } = await getUserInfo()
            setEmail(email)
            setUsername(username)
        };
        getInfo();
    }, []);


    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={{ flex: 1, position: 'relative' }}>
                <LinearGradient
                    colors={[darkViolet, darkOrange]}
                    style={styles.upperSetting}
                >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', gap: 5 }}>
                        <MaterialIcons name="account-circle" size={30} color="black" />
                        <Text style={{ marginTop: -3, fontSize: 24, fontWeight: 700 }}>{username}</Text>
                    </View>
                    <View style={styles.avatar}></View>
                </LinearGradient>
                <View style={{ paddingTop: 80 }}>
                    <SwitchTab tabs={[
                        { title: 'My Info', condition: isShowMyInfo, onTap: () => { setIsShowMyInfo(true) } },
                        { title: 'My Cat', condition: !isShowMyInfo, onTap: () => { setIsShowMyInfo(false) } }
                    ]}
                    />
                </View>
                {isShowMyInfo ?
                    <SettingUserInfoTab email={email} /> :
                    <SettingUserCatInfoTab />
                }

            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    upperSetting: {
        height: 160,
        width: '100%', position: 'relative',
        paddingTop: 20, borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 10, flexDirection: 'row',
        gap: 5, justifyContent: 'center'
    },
    avatar: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 9999,
        alignItems: 'center',
        height: 140,
        width: 140,
        bottom: -70,
    },
    defaultInput: {
        // borderWidth: 1,
        backgroundColor: charcoal,
        borderRadius: 5,
        paddingVertical: 5,
        width: 200,
        alignSelf: 'flex-end',
        paddingHorizontal: 8,
    }
})

export default UserInfoScreen