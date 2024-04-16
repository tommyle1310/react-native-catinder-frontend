import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colorPalettes } from '../constants/colors';
import Spacer from './Spacer';
import { blogs } from '../constants/sampleData';



const { colorSet1: { softWhite, darkViolet, charcoal, lightViolet } } = colorPalettes;

const Blogs = () => {
    const limitWords = (text, maxWords = 30) => {
        const words = text.split(' ');
        if (words.length <= maxWords) {
            return text; // No need to shorten
        }
        const shortenedText = words.slice(0, maxWords).join(' ') + '...';
        return shortenedText;
    }
    const [showMoreIndex, setShowMoreIndex] = useState(-1);

    const toggleShowMore = (index) => {
        setShowMoreIndex(index === showMoreIndex ? -1 : index);
    }
    return (
        <>
            {
                blogs.homeBlogs.length > 0 &&
                blogs.homeBlogs.map((item, index) => (
                    <View key={index} style={{ width: '100%', padding: 12, backgroundColor: charcoal, borderRadius: 8, gap: 4, marginBottom: 10 }}>
                        <View style={{ width: '100%', height: 150, backgroundColor: 'gray' }}></View>
                        <Text style={{ fontSize: 15, fontWeight: 700, color: darkViolet }}>{item.title}</Text>
                        <Text style={{ fontSize: 12 }}>
                            {showMoreIndex === index ? item.description : limitWords(item.description)}
                            <TouchableOpacity style={{ backgroundColor: 'red' }} onPress={() => toggleShowMore(index)}>
                                <Text style={{ fontSize: 12 }}>{showMoreIndex === index ? 'Show less' : 'Show more'}</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                ))
            }
        </>
    )
}

export default Blogs