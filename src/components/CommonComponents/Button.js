import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export const Button = ({ large, small, medium, isFullWidth, bgColor, color, rounded, title, onTap }) => {
    const handleBtnSize = () => {
        if (large) return { height: 60, width: 150, justifyContent: 'center', alignItems: 'center', };
        if (small) return { height: 40, width: 100, justifyContent: 'center', alignItems: 'center', };
        if (medium) return { height: 50, width: 120, justifyContent: 'center', alignItems: 'center' };
        if (isFullWidth) return { height: 50, flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }
        return {}; // Default return if none of the conditions are met
    };

    return (
        <TouchableOpacity onPress={onTap} style={{
            borderRadius: rounded,
            backgroundColor: bgColor,
            ...handleBtnSize() // Spread the result of handleBtnSize function
        }}>
            <Text style={{ color, fontWeight: 600 }}>{title}</Text>
        </TouchableOpacity>
    );
};
