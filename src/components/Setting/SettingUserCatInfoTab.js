import { View, Text, TextInput, ScrollView, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Spacer from '../Spacer'
import { colorPalettes } from '../../constants/colors';

const { colorSet1: { softWhite, lightGray, darkViolet, lightOrange, darkOrange, charcoal, lightDark } } = colorPalettes;


const SettingUserCatInfoTab = () => {
    return (
        <ScrollView style={{ flex: 1, padding: 10, gap: 5 }}>
            <Spacer>
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <Text>Name: </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TextInput editable={false} style={styles.defaultInput} placeholder='Toan lol' />
                    </View>
                </View>
            </Spacer>
            <Spacer>
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <Text>Gender: </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TextInput editable={false} style={styles.defaultInput} placeholder='Male' />
                    </View>
                </View>
            </Spacer>
            <Spacer>
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <Text>Descripion: </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TextInput editable={false} style={styles.defaultInput} placeholder='This cat named is cat' />
                    </View>
                </View>
            </Spacer>
            <Spacer>
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <Text>Age: </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TextInput editable={false} style={styles.defaultInput} placeholder='1' />
                    </View>
                </View>
            </Spacer>
            <Spacer>
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <Text>Appearance: </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TextInput editable={false} style={styles.defaultInput} placeholder='Fluffy white fur' />
                    </View>
                </View>
            </Spacer>
            <Spacer>
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <Text>Certificate: </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TextInput editable={false} style={styles.defaultInput} placeholder='Already vaccinated H5N1' />
                    </View>
                </View>
            </Spacer>
            <Spacer>
                <View style={{ gap: 5, alignItems: 'flex-start', marginBottom: 20 }}>
                    <Text>Breeding Preference: </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <FlatList
                            data={[{ species: 'jack' }, { species: 'tom' }, { species: 'oggy' }, { species: 'doraemon' }, { species: 'muop' }]}
                            keyExtractor={item => item.species}
                            horizontal
                            renderItem={({ item }) => (<View style={{ minHeight: 100, minWidth: 100, alignItems: 'center', justifyContent: 'center', flex: 1, padding: 10, elevation: 5, borderRadius: 4, backgroundColor: '#ddd', margin: 2 }}>
                                <Text>{item.species}</Text>
                            </View>)}
                        />
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

export default SettingUserCatInfoTab