import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import SigninScreen from './src/screens/AuthScreen/SigninScreen'
import SignupScreen from './src/screens/AuthScreen/SignupScreen'
import HomeScreen from './src/screens/HomeScreen'
import { setNavigator } from './src/navigationRef';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as AuthProvider } from './src/context/authContext';
import { Provider as UserProvider } from './src/context/userContext';
import { Provider as CatProvider } from './src/context/catContext';
import SettingScreen from './src/screens/SettingScreen';
import UserInfoScreen from './src/screens/UserInfoScreen';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import DefaultScreen from './src/screens/DefaultScreen';
import CatCreateScreen from './src/screens/Cat/CatCreateScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import CatDetailsScreen from './src/screens/Cat/CatDetailsScreen';
import ChatScreen from './src/screens/Chat/ChatScreen';
import ChatListScreen from './src/screens/Chat/ChatListScreen';
import CatHomeScreen from './src/screens/Cat/CatHomeScreen';
import CatFavoriteScreen from './src/screens/Cat/CatFavoriteScreen';
import RatingScreen from './src/screens/Cat/RatingScreen';


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

const CatFlow = createStackNavigator({
  CatHome: CatHomeScreen,
  CatCreate: CatCreateScreen,
  CatDetails: CatDetailsScreen,
  CatFavorite: CatFavoriteScreen,
  CatRating: RatingScreen,
}, {
  initialRouteName: 'CatHome',
})
CatFlow.navigationOptions = {
  tabBarIcon: <MaterialCommunityIcons name="cat" size={24} color="black" />
}

const switchNavigator = createSwitchNavigator({
  Default: DefaultScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  mainFlow: createMaterialBottomTabNavigator({
    Home: HomeScreen,
    Notifications: NotificationsScreen,
    catFlow: CatFlow,
    ChatFlow: ChatFlow,
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
      <UserProvider>
        <CatProvider>
          <SafeAreaProvider>
            <App ref={(nav) => setNavigator(nav)} />
          </SafeAreaProvider>
        </CatProvider>
      </UserProvider>
    </AuthProvider>
  )
}