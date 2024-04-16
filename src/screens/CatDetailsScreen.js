import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { colorPalettes } from '../constants/colors';
import Spacer from '../components/Spacer';
import { Ionicons } from '@expo/vector-icons';
import { defaultInput, h2Bold, h3Bold, h3Light, h4Light } from '../constants/css';
import { Button } from '../components/CommonComponents/Button';


const { colorSet1: { softWhite, darkViolet, softGray, lightOrange, lightViolet, darkOrange, charcoal, lightDark } } = colorPalettes;


const CatDetailsScreen = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: charcoal, flex: 1 }}>
            <View style={{ height: 200, width: '100%', backgroundColor: lightDark, paddingTop: 40 }}>
                <Spacer>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('Home')}><Ionicons name="chevron-back" size={24} color={softWhite} style={{ elevation: 10 }} /><Text style={{ color: softWhite, elevation: 10 }}>Home</Text></TouchableOpacity>
                </Spacer>
            </View>
            <View style={{ flex: 1, width: '100%' }}>
                <View style={{ margin: 15, gap: 30 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ gap: 5, flexDirection: 'row', alignItems: 'center' }}><Text style={h2Bold}>Dog</Text><Text style={h4Light}>18</Text></View>
                        <Button onTap={() => navigation.navigate('Chat')} small rounded={8} bgColor={darkViolet} color={softWhite} title={'Chat now'} />
                    </View>
                    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}><Text style={h4Light}>Appearance</Text><TextInput editable={false} placeholder='lorem ipsum' style={{ ...defaultInput, backgroundColor: softGray }} /></View>
                    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', }}><Text style={h4Light}>3</Text><Text>km away</Text></View>
                    <View style={{ flexDirection: 'row', gap: 30, alignItems: 'center' }}><View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}><Text style={h4Light}>Age</Text><TextInput editable={false} placeholder='3' style={{ ...defaultInput, backgroundColor: softGray, width: 30 }} /></View><View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}><Text style={h4Light}>Gender</Text><TextInput editable={false} placeholder='gay' style={{ ...defaultInput, backgroundColor: softGray, width: 50 }} /></View></View>
                    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}><Text style={h4Light}>Certificate</Text><TextInput editable={false} placeholder='lorem ipsum' style={{ ...defaultInput, backgroundColor: softGray }} /></View>
                    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}><Text style={h4Light}>Description</Text><TextInput editable={false} placeholder='lorem ipsum' style={{ ...defaultInput, backgroundColor: softGray }} /></View>
                </View>
            </View>
        </View>
    )
}

export default CatDetailsScreen