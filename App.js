import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import SigninScreen from './src/screens/AuthScreen/SigninScreen'
import SignupScreen from './src/screens/AuthScreen/SignupScreen'
import HomeScreen from './src/screens/HomeScreen'
import { setNavigator } from './src/navigationRef';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as AuthProvider } from './src/context/authContext';
import SettingScreen from './src/screens/SettingScreen';
import UserInfoScreen from './src/screens/UserInfoScreen';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import DefaultScreen from './src/screens/DefaultScreen';
import { colorPalettes } from './src/constants/colors';
import CatCreateScreen from './src/screens/CatCreateScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import CatDetailsScreen from './src/screens/CatDetailsScreen';
import ChatScreen from './src/screens/Chat/ChatScreen';
import ChatListScreen from './src/screens/Chat/ChatListScreen';

const { colorSet1: { lightViolet, lightOrange } } = colorPalettes


const SettingsFlow = createStackNavigator({
  Setting: SettingScreen,
  UserInfo: UserInfoScreen,

}, {
  initialRouteName: 'Setting',
})
SettingsFlow.navigationOptions = {
  tabBarIcon: <Ionicons name="settings" size={20} color="black" />
}


const ChatFlow = createStackNavigator({
  ChatList: ChatListScreen,
  Chat: ChatScreen,

}, {
  initialRouteName: 'ChatList',
})
ChatFlow.navigationOptions = {
  tabBarIcon: <Ionicons name="chatbubble" size={20} color="black" />
}


const switchNavigator = createSwitchNavigator({
  Default: DefaultScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  CatCreate: CatCreateScreen,
  CatDetails: CatDetailsScreen,
  mainFlow: createMaterialBottomTabNavigator({
    Home: HomeScreen,
    Notifications: NotificationsScreen,
    Chat: ChatFlow,
    Settings: SettingsFlow,
  }, {
    initialRouteName: 'Home',
    shifting: true,
    activeColor: 'blue', // Active tab color
    inactiveColor: 'gray', // Inactive tab color
    barStyle: { backgroundColor: 'white' } // Background color of the bottom navigator
  })
}, {
  initialRouteName: 'Default'
})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <App ref={(nav) => setNavigator(nav)} />
      </SafeAreaProvider>
    </AuthProvider>
  )
}