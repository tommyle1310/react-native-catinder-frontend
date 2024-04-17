
import React, { useState } from 'react'
import Spacer from './Spacer';
import { StyleSheet, View, Platform, TextInput, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import { colorPalettes } from '../constants/colors';


import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { linklbl } from '../constants/css';

const { colorSet1: { softWhite, darkViolet, charcoal, darkOrange, lightDark } } = colorPalettes;


const AuthForm = ({ btnTitle, onSubmit, title, titleDesc, switchPage, errorMessage }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
                    <View style={styles.main}>
                        <Text style={styles.title} h2>{title}</Text>
                        <Text>{titleDesc}</Text>
                        <Spacer />
                        <Spacer />
                        <TextInput autoCapitalize='none' autoCorrect={false} onChangeText={textInput => setEmail(textInput)} value={email} underlineColorAndroid={'transparent'} style={styles.input} placeholder='Email' />
                        <Spacer />
                        {title === 'Sign Up' ? <>
                            <TextInput autoCapitalize='none' autoCorrect={false} onChangeText={textInput => setUsername(textInput)} value={username} underlineColorAndroid={'transparent'} style={styles.input} placeholder='Username' />
                            <Spacer />
                        </> : null}
                        <TextInput autoCapitalize='none' autoCorrect={false} onChangeText={textInput => setPassword(textInput)} value={password} secureTextEntry underlineColorAndroid={'transparent'} style={styles.input} placeholder='Password' />
                        {
                            title === 'Sign In' &&
                            <TouchableOpacity><Text style={{ alignSelf: 'flex-end', color: lightDark, marginTop: 5 }}>Forgot Password?</Text></TouchableOpacity>
                        }
                        {errorMessage && <Spacer><Text style={{ color: 'red' }}>{errorMessage}</Text></Spacer>}
                        <Button buttonStyle={styles.button} title={btnTitle} onPress={() => title === 'Sign Up' ? onSubmit({ email, password, username }) : onSubmit({ email, password })} />
                        <Spacer />

                        <View style={styles.othersSigninContainer}>
                            <Text>Or login with</Text>
                            <View style={styles.otherSigninItem}>
                                <TouchableOpacity><FontAwesome name="github" size={45} color="black" /></TouchableOpacity>
                                <TouchableOpacity><FontAwesome5 style={{ color: '#0866ff' }} name="facebook" size={40} color="black" /></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.switchPage}><Text>{switchPage.text}</Text><TouchableOpacity onPress={() => { switchPage.link(); setEmail(''); setPassword('') }}><Text style={linklbl}>{switchPage.linkLbl}</Text></TouchableOpacity></View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: softWhite,
        padding: 16,
        flexGrow: 1
    },
    main: {
        flex: 1,
        paddingTop: 50
    },
    title: {
        fontFamily: 'sans-serif',
        color: darkViolet
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 8
    },

    button: {
        backgroundColor: darkViolet,
        color: charcoal,
        paddingVertical: 10,
        marginVertical: 20
    },
    othersSigninContainer: {
        alignItems: 'center'
    },
    otherSigninItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginVertical: 8
    },
    switchPage: {
        borderTopWidth: 2,
        borderColor: charcoal,
        paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
    }
})

export default AuthForm