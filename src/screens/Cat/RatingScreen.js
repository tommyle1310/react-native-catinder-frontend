import { View, Text, KeyboardAvoidingView, Platform, FlatList, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { withNavigation } from 'react-navigation'
import { MaterialIcons, Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
import { defaultInput, h2Bold, h3Bold, h5Bold, h5Light, imageCircle, justifyCenter, smallText, smallTextGray } from '../../constants/css'
import { colorPalettes } from '../../constants/colors'
import useDisplayStars from '../../hooks/useDisplayStars';
import { cats, reviews } from '../../constants/sampleData';

const { colorSet1: { charcoal, darkViolet, softWhite, lightOrange, darkOrange, lightDark } } = colorPalettes
const RatingScreen = ({ navigation }) => {
    const [isShowMyRating, setIsShowMyRating] = useState(false)
    const handleSubmit = () => {
        setIsShowMyRating(true)
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={{ flex: 1, backgroundColor: darkViolet, paddingTop: 50 }}>
                <View style={{ ...justifyCenter, margin: 15 }}>
                    <View>
                        <Text style={{ ...h2Bold, color: softWhite }}>Reviews</Text>
                        <Text style={{ color: softWhite }}>Browse any reviews for your reference</Text>
                    </View>
                    <MaterialIcons name="menu-open" size={24} color={softWhite} />
                </View>
                <ScrollView style={{ padding: 15 }}>

                    {/* button review */}
                    {isShowMyRating ?
                        <TouchableOpacity onPress={() => setIsShowMyRating(false)} style={{ padding: 10, backgroundColor: darkOrange, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}><Text style={{ ...h5Bold, color: softWhite, }}>Review now</Text></TouchableOpacity>
                        :
                        <View style={{ borderRadius: 10, gap: 15, marginVertical: 20, alignSelf: 'center', backgroundColor: softWhite, width: 330, padding: 10 }}>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>{useDisplayStars({ number: 4.9, color: lightDark, size: 20 })}</View>
                            <TextInput placeholder='Enter your comment' style={{ ...defaultInput, width: '100%', backgroundColor: softWhite, borderWidth: 1, borderColor: charcoal }} />
                            <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: lightOrange, padding: 10, borderRadius: 8, }}><Text style={{ ...h5Bold, color: softWhite, alignSelf: 'center' }}>Submit</Text></TouchableOpacity>
                        </View>
                    }
                    {reviews.length > 0 && reviews.map(item => (
                        <View key={item.id} style={{ borderRadius: 10, marginVertical: 20, alignSelf: 'center', backgroundColor: softWhite, width: 330, padding: 10 }}>
                            <View style={{ ...justifyCenter, gap: 10, borderBottomWidth: 1, borderColor: charcoal, paddingBottom: 10 }}>
                                <View style={imageCircle}></View>
                                <View style={{ flex: 1 }}>
                                    <Text style={h5Bold}>{item.author}</Text>
                                    <Text style={smallTextGray}>{item.relativeTimestamp}</Text>
                                </View>
                                <Feather name="more-horizontal" size={24} color="black" />
                            </View>
                            <View style={{ alignItems: 'center', gap: 8, marginTop: 10 }}>
                                <Text style={h3Bold}>{item.catName}</Text>
                                <View style={{ flexDirection: 'row' }}>{useDisplayStars({ number: item.star, color: lightOrange, size: 22 })}</View>
                            </View>
                            <View style={{ gap: 10 }}>
                                <Text>{item.comment}</Text>
                                <View>
                                    <FlatList
                                        horizontal
                                        data={cats.homeListCats}
                                        keyExtractor={item => item.id}
                                        renderItem={({ item }) => (
                                            <View style={{ elevation: 6, borderRadius: 6, marginHorizontal: 8 }}>
                                                <Image source={item.image} style={{ borderRadius: 6, width: 200, height: 110, backgroundColor: charcoal }}></Image>
                                            </View>
                                        )}
                                    />
                                    <View style={{ flexDirection: 'row', gap: 8, backgroundColor: charcoal, padding: 10, marginVertical: 20, borderRadius: 10 }}>
                                        <View style={{ minWidth: 100 }}><Text style={h5Light}>Tag</Text><Text style={{ ...smallText, color: lightDark }}>{item.tag}</Text></View>
                                        <View style={{ flex: 1 }}><Text style={h5Light}>Location</Text><Text style={{ ...smallText, color: lightDark }}>{item.location}</Text></View>
                                    </View>
                                    <View style={{ ...justifyCenter }}>
                                        <TouchableOpacity style={{ alignItems: 'center', paddingHorizontal: 10, paddingVertical: 8 }}>
                                            <AntDesign name="like1" size={24} color="black" /><Text>{item.likes}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ alignItems: 'center', paddingHorizontal: 10, paddingVertical: 8 }}>
                                            <AntDesign name="dislike1" size={24} color="black" /><Text>{item.dislike}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ alignItems: 'center', paddingHorizontal: 10, paddingVertical: 8 }}>
                                            <AntDesign name="message1" size={24} color="black" /><Text>{item.comments}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ alignItems: 'center', paddingHorizontal: 10, paddingVertical: 8 }}>
                                            <FontAwesome name="share" size={24} color="black" /><Text>{item.shares}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </KeyboardAvoidingView>

    )
}

RatingScreen.navigationOptions = {
    headerShown: false
}

export default withNavigation(RatingScreen)