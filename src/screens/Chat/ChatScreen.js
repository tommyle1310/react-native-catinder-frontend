import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { customSafeAreaView, h5Bold, h5Light, imageCircle } from '../../constants/css'
import { colorPalettes } from '../../constants/colors'
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { chat } from '../../constants/sampleData';

const { colorSet1: { softViolet, darkViolet, softGray, softWhite, lightViolet, softPurple, lightOrange, darkOrange } } = colorPalettes
const ChatScreen = () => {
    return (
        <>
            <View style={{ paddingHorizontal: 15, flexDirection: 'row', backgroundColor: softViolet, height: 80, justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                    <View style={imageCircle}></View>
                    <View>
                        <Text style={h5Bold}>Tommy</Text>
                        <Text>Online</Text>
                    </View>
                </View>
                <Feather name="phone-call" size={24} color={darkViolet} />
            </View>
            <ScrollView style={{ backgroundColor: softWhite, flex: 1 }}>
                {chat?.length > 0 && chat.map(item => {
                    if (item.senderId === 2) {
                        return <View key={item.id} style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ marginTop: 10, marginLeft: 10, maxWidth: 240 }}>
                                <View style={{ borderTopEndRadius: 14, borderTopStartRadius: 14, borderBottomEndRadius: 14, backgroundColor: softViolet, flex: 1, padding: 10 }}><Text style={{}}>{item.message}</Text></View>
                            </View>
                        </View>
                    }
                    else {
                        return <View key={item.id} style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <View style={{ marginTop: 10, marginRight: 10, maxWidth: 240 }}>
                                <View style={{ borderTopEndRadius: 14, borderTopStartRadius: 14, borderBottomStartRadius: 14, backgroundColor: darkViolet, flex: 1, padding: 10 }}><Text style={{ color: softWhite }}>{item.message}</Text></View>
                            </View>
                        </View>
                    }
                })}


            </ScrollView>
        </>
    )
}

export default ChatScreen