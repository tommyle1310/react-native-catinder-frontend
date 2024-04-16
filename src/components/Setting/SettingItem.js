import { View, Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import React from 'react'
import { colorPalettes } from '../../constants/colors';

const { colorSet1: { lightDark, softWhite, lightOrange } } = colorPalettes;


const SettingItem = ({ title, data }) => {
    return (
        <View style={{ gap: 10, paddingTop: 15, borderBottomWidth: 1, borderColor: lightDark }}>
            <Text style={{ color: lightOrange, fontSize: 20 }}>{title}</Text>
            {data?.length > 0 && data?.map((item, index) => (
                <TouchableOpacity onPress={() => item.onTap()} key={index} style={{ width: '100%', gap: 5, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 600, color: lightDark }}>{item.label}</Text>
                    {item.iconRight}
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default SettingItem