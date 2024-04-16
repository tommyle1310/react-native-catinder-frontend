import { View } from 'react-native'
import React from 'react'

const Spacer = ({ children }) => {
    return (
        <View style={{ margin: 10 }}>
            {children}
        </View>
    )
}

export default Spacer