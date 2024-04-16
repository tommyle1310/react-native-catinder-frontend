import { View, Text, KeyboardAvoidingView, Platform, Button, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import Spacer from '../components/Spacer';
import SwitchTab from '../components/SwitchTab';
import { colorPalettes } from '../constants/colors';
import { titleScreen } from '../constants/css';
import { notifications } from '../constants/sampleData';

const { colorSet1: { softWhite, darkViolet, lightOrange, darkOrange, charcoal, lightDark } } = colorPalettes;

const handleNotificationStyles = (notification) => {
    const commonContainerStyles = {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: charcoal,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    };

    const commonIconStyles = {
        height: 50,
        width: 50,
        borderRadius: 9999,
        backgroundColor: darkOrange,
    };

    const commonTimestampStyles = {
        color: lightDark,
        fontSize: 12,
    };

    let notificationTypeStyles;

    switch (notification.type) {
        case 'newMatch':
            notificationTypeStyles = {
                ...commonContainerStyles,
            };
            break;

        case 'reminder':
            notificationTypeStyles = commonContainerStyles;
            break;

        // Add other cases as needed

        default:
            notificationTypeStyles = commonContainerStyles;
            break;
    }

    return (
        <TouchableOpacity onPress={notification.onTap} style={notificationTypeStyles} key={notification.id}>
            <View style={commonIconStyles}></View>
            <View style={{ flex: 1, gap: 3 }}>
                {notification.type === 'newMatch' && <Text style={{ color: darkOrange, fontWeight: 600 }}>New Match</Text>}
                {notification.type === 'reminder' && <Text style={{ color: lightOrange, fontWeight: 600 }}>Reminder</Text>}
                <Text style={{ color: notification.type === 'messageReceived' ? 'blue' : undefined, fontWeight: notification.type === 'newFeature' ? 600 : undefined }}>{notification.title}</Text>
                {notification.type === 'newFeature' && (
                    <Text style={{}}>{notification.content}</Text>
                )}
                {notification.type === 'reminder' && (
                    <TouchableOpacity onPress={notification.onTapBtn} style={{ backgroundColor: darkViolet, padding: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 6, width: 100 }}>
                        <Text style={{ color: softWhite, fontWeight: 600 }}>{notification.btnTitle}</Text>
                    </TouchableOpacity>
                )}
                {notification.type === 'newFeature' && (
                    <TouchableOpacity onPress={notification.onTapBtn} style={{ backgroundColor: lightOrange, padding: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 6, width: 100 }}>
                        <Text style={{ color: softWhite, fontWeight: 600 }}>{notification.btnTitle}</Text>
                    </TouchableOpacity>
                )}

            </View>
            <View style={{ alignSelf: 'stretch' }}>
                <Text style={commonTimestampStyles}>{notification.relativeTimestamp}</Text>
                <Feather name="more-horizontal" size={16} color="black" />
            </View>
        </TouchableOpacity>
    );
};


const NotificationsScreen = () => {
    const [currentTabIndex, setCurrentTabIndex] = useState('All')
    const handleShowDataTab = () => {
        switch (currentTabIndex) {
            case 'All':
                return notifications.map(item => handleNotificationStyles(item))
            case 'Unread':
                return notifications.filter(item => item.isRead === false).map(item => handleNotificationStyles(item))
            default:
                return null
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, paddingBottom: 0 }}>
                    <Text style={titleScreen}>Notifications</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Feather name="check-square" size={20} color="black" />
                        <Ionicons name="close" size={22} color="black" />
                    </View>
                </View>
                <View style={{ paddingTop: 20 }}>
                    <SwitchTab tabs={[
                        { title: 'All', condition: currentTabIndex === 'All', onTap: () => { setCurrentTabIndex('All') } },
                        { title: 'Mentions', condition: currentTabIndex === 'Mentions', onTap: () => { setCurrentTabIndex('Mentions') } },
                        { title: 'Unread', condition: currentTabIndex === 'Unread', onTap: () => { setCurrentTabIndex('Unread') } }
                    ]}
                    />
                </View>
                <View style={{ backgroundColor: softWhite, flex: 1, width: '100%' }}>
                    <ScrollView>
                        {handleShowDataTab()}
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

NotificationsScreen.navigationOptions = {
    tabBarIcon: <Ionicons name="notifications" size={20} color="black" />

}

export default NotificationsScreen