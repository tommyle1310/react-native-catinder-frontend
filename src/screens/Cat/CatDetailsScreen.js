import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { colorPalettes } from '../../constants/colors';
import Spacer from '../../components/Spacer';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { defaultInput, h2Bold, h3Bold, h3Light, h4Light, roundedFull } from '../../constants/css';
import { Button } from '../../components/CommonComponents/Button';
import { withNavigation } from 'react-navigation';




const { colorSet1: { softWhite, darkViolet, softGray, lightOrange, lightViolet, darkOrange, charcoal, lightDark } } = colorPalettes;


const CatDetailsScreen = ({ navigation }) => {
    // const route = useRoute()
    const { name, age, gender, certificate, description } = navigation.state.params.catDetail
    return (
        <View style={{ backgroundColor: charcoal, flex: 1 }}>
            <View style={{ height: 200, width: '100%', backgroundColor: lightDark, paddingTop: 40, position: 'relative' }}>
                <Spacer>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}><Ionicons name="chevron-back" size={24} color={softWhite} style={{ elevation: 10 }} /><Text style={{ color: softWhite, elevation: 10 }}>Home</Text></TouchableOpacity>
                </Spacer>
                <TouchableOpacity style={{ position: 'absolute', ...roundedFull, width: 40, height: 40, backgroundColor: softWhite, bottom: -20, elevation: 10, right: 15, justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="heart" size={20} color={'red'} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, width: '100%', paddingTop: 20 }}>
                <View style={{ margin: 15, gap: 30 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ gap: 5, flexDirection: 'row', alignItems: 'center' }}><Text style={h2Bold}>{name}</Text><Text style={h4Light}>{age}</Text></View>
                        <Button onTap={() => navigation.navigate('Chat')} small rounded={8} bgColor={darkViolet} color={softWhite} title={'Chat now'} />
                    </View>
                    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}><Text style={h4Light}>Appearance</Text><TextInput editable={false} placeholder='lorem ipsum' style={{ ...defaultInput, backgroundColor: softGray }} /></View>
                    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', }}><Text style={h4Light}>3</Text><Text>km away</Text></View>
                    <View style={{ flexDirection: 'row', gap: 30, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Text style={h4Light}>Age</Text>
                            <TextInput editable={false} placeholder='3' style={{ ...defaultInput, backgroundColor: softGray, width: 30 }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Text style={h4Light}>Gender</Text>
                            <TextInput editable={false} placeholder={gender === 0 ? "Female" : "Male"} style={{ ...defaultInput, backgroundColor: softGray, width: 50 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}><Text style={h4Light}>Certificate</Text><TextInput editable={false} placeholder={certificate} style={{ ...defaultInput, backgroundColor: softGray }} /></View>
                    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}><Text style={h4Light}>Description</Text><TextInput editable={false} placeholder={description} style={{ ...defaultInput, backgroundColor: softGray }} /></View>
                </View>
            </View>
        </View>
    )
}

CatDetailsScreen.navigationOptions = {
    headerShown: false
}

export default withNavigation(CatDetailsScreen)