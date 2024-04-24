import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef'
import axios from '../api/catinder'


const catReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            return { ...state }
        case 'GET_CATS':
            return { errorMessage: '', listCats: action.payload }
        case 'EDIT_CAT':
            return { ...state, errorMessage: '', token: null }
        case 'DELETE_CAT':
            return { ...state, errorMessage: action.payload }
        case 'SEARCH_CAT':
            return { ...state, errorMessage: '', listCatsSearch: action.payload }
        case 'ADD_ERROR':
            return { ...state, errorMessage: action.payload }
        case 'ADD_ERROR':
            return { ...state, errorMessage: '' }
        default:
            return state
    }
}




const getListCats = dispatch => async () => {
    try {
        const response = await axios.get('/cat');

        dispatch({ type: 'GET_CATS', payload: response.data.data });
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

const addCat = dispatch => async ({ name, age, species, shortDescription, description, certificate, images }) => {
    try {
        const userId = await AsyncStorage.getItem('userId')
        const response = await axios.post('/cat', { name, age, species, shortDescription, description, certificate, images, userId });
        if (response.data) {

            dispatch({ type: 'ADD_CAT' });
            console.log(response.data);
        }
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


const clearErrorMessage = dispatch => () => {
    dispatch({
        type: 'CLEAR_ERROR_MESSAGE'
    })
}

export const { Provider, Context } = createDataContext(catReducer, { getListCats, addCat }, { listCats: [], listCatsSearch: [] })
