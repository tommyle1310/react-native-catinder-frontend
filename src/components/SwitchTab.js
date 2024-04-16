import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colorPalettes } from '../constants/colors';

const { colorSet1: { softWhite, darkViolet, lightOrange, darkOrange, charcoal, lightDark } } = colorPalettes;


const SwitchTab = ({ tabs }) => {
    return (
        <View style={{}}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 20 }}>
                {tabs.length > 0 &&
                    tabs.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={item.onTap}
                            style={item.condition ? { padding: 10, borderColor: charcoal, borderBottomWidth: 5, flex: 1, }
                                : { padding: 10, borderColor: charcoal, flex: 1, }}>
                            <Text style={{ alignSelf: 'center', fontWeight: 600 }}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
            </View>
        </View>
    )
}

export default SwitchTab