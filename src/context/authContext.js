import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef'
import axios from '../api/catinder'


const authReducer = (state, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, errorMessage: '', token: action.payload }
        case 'SIGN_UP':
            return { ...state, errorMessage: '', token: action.payload }
        case 'SIGN_OUT':
            return { ...state, errorMessage: '', token: null }
        case 'ADD_ERROR':
            return { ...state, errorMessage: action.payload }
        case 'CLEAR_ERROR_MESSAGE':
            return { ...state, errorMessage: '' }
        default:
            return state
    }
}

const getUserInfo = dispatch => async () => {
    try {
        const email = await AsyncStorage.getItem('email')
        const username = await AsyncStorage.getItem('username')
        return { email, username }
    } catch (err) {
        console.log(err)
    }
}

const checkUserAlreadyLoggedIn = dispatch => async () => {
    try {
        const token = await AsyncStorage.getItem('token')
        if (!token) {
            navigate('Signin')
        } else {
            navigate('Home')
        }
    } catch (err) {
        console.log(err)
        navigate('Signin')
    }
}

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await axios.post('/signin', { email, password })
        if (response.data) {
            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.setItem('email', response.data.email);
            await AsyncStorage.setItem('username', response.data.username)
        }
        dispatch({ type: 'SIGN_IN', payload: { email, password } });
        navigate('Home');
    } catch (error) {
        console.log(error)
        if (error.response) {
            dispatch({ type: 'ADD_ERROR', payload: error.response.data.error });
        } else {
            dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong when signing you in.' });

        }
    }
};


const signup = dispatch => async ({ email, password, username }) => {
    try {
        const response = await axios.post('/signup', { email, password, username });
        console.log(response.data);

        dispatch({ type: 'SIGN_UP', payload: { email, password, username } });

        if (response.data) {
            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('username', username);
        }
        navigate('Home');
    } catch (error) {
        if (error.response) {
            // console.log(error.response.data)
            dispatch({ type: 'ADD_ERROR', payload: error.response.data.error });
        } else {
            // Handle other types of errors, if needed
            console.error('An error occurred:', error);
            dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with the server' });

        }
    }
};


const signout = dispatch => async () => {
    dispatch({ type: 'SIGN_OUT' })
    if (AsyncStorage.getItem('email') || !AsyncStorage.getItem('token')) {
        await AsyncStorage.removeItem('email')
        await AsyncStorage.removeItem('token')
        navigate('Signin')
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({
        type: 'CLEAR_ERROR_MESSAGE'
    })
}

export const { Provider, Context } = createDataContext(authReducer, { signin, signout, signup, clearErrorMessage, checkUserAlreadyLoggedIn, getUserInfo }, { token: null, errorMessage: '', email: '', username: '' })