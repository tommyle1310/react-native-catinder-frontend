import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Spacer from '../Spacer'
import { colorPalettes } from '../../constants/colors';

const { colorSet1: { softWhite, darkViolet, lightOrange, darkOrange, charcoal, lightDark } } = colorPalettes;


const SettingUserInfoTab = ({ email }) => {
    return (
        <ScrollView style={{ flex: 1, padding: 10, gap: 5 }}>
            <Spacer>
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <Text>Email: </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TextInput editable={false} style={styles.defaultInput} placeholder={email} />
                    </View>
                </View>
            </Spacer>
            <Spacer>
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <Text>Contact: </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TextInput editable={false} style={styles.defaultInput} placeholder='0707171164' />
                    </View>
                </View>
            </Spacer>
            <Spacer>
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <Text>Location: </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TextInput editable={false} style={styles.defaultInput} placeholder='331 Banana Hill' />
                    </View>
                </View>
            </Spacer>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    defaultInput: {
        backgroundColor: charcoal,
        borderRadius: 5,
        paddingVertical: 5,
        width: 200,
        alignSelf: 'flex-end',
        paddingHorizontal: 8,
    }
})

export default SettingUserInfoTab