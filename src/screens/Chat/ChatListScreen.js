import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'
import React from 'react'
import { customSafeAreaView, h2Bold, h3Bold, h5Light, smallTextGray, imageCircle } from '../../constants/css'
import { colorPalettes } from '../../constants/colors'
import { Ionicons } from '@expo/vector-icons';
import SearchBar from '../../components/SearchBar'
import { SafeAreaView, } from 'react-native-safe-area-context';
import { listChats } from '../../constants/sampleData';

const { colorSet1: { charcoal, lightDark, softWhite, darkOrange } } = colorPalettes

const ChatListScreen = ({ navigation }) => {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={{ ...customSafeAreaView, backgroundColor: charcoal, height: 160, flexDirection: 'column', }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <Ionicons name="menu" size={26} color="black" />
                    <Text style={h2Bold}>Catinder Chatting</Text>
                </View>
                <SearchBar />
            </View>
            <View style={{ position: 'absolute', top: 160, bottom: 0, left: 0, right: 0, backgroundColor: softWhite }}>
                {listChats.length > 0 &&
                    listChats.map(item => (
                        <TouchableOpacity onPress={() => navigation.navigate('Chat')} key={item.id} style={styles.eachMessageContainer}>
                            <View style={imageCircle}></View>
                            <View style={{ flex: 1 }}>
                                <Text style={h5Light}>{item.sender}</Text>
                                <Text style={{ color: lightDark }}>{item.message}</Text>
                            </View>
                            <View style={{ gap: 2, width: 50, alignItems: 'flex-end' }}>
                                <Text style={smallTextGray}>{item.relativeTimestamp}</Text>
                                {item.totalUnread > 0 &&
                                    <View style={styles.unreadStyle}><Text style={{ color: charcoal }}>{item.totalUnread}</Text></View>
                                }
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    unreadStyle: { width: 22, height: 22, borderRadius: 9999, backgroundColor: darkOrange, justifyContent: 'center', alignItems: 'center' },
    eachMessageContainer: { borderBottomWidth: 1, paddingVertical: 8, gap: 10, paddingHorizontal: 12, borderColor: charcoal, flexDirection: 'row', justifyContent: 'space-between' }
})

ChatListScreen.navigationOptions = {
    headerShown: false
}

export default ChatListScreen