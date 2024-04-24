import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef'
import axios from '../api/catinder'


const userReducer = (state, action) => {
    switch (action.type) {
        case 'MODIFY_FAVORITE_CATS':
            return { errorMessage: '', listFavoriteCats: action.payload }

        case 'GET_FAVORITE_CATS':
            return { errorMessage: '', listFavoriteCats: action.payload }

        case 'ADD_ERROR':
            return { ...state, errorMessage: '' }
        default:
            return state
    }
}




const getFavoriteCats = dispatch => async (userId) => {
    try {
        const response = await axios.get(`/favorite?userId=${userId}`);
        dispatch({ type: 'GET_FAVORITE_CATS', payload: response.data.favoriteCats });
    } catch (error) {
        if (error.response) {
            dispatch({ type: 'ADD_ERROR', payload: error.response.data.error });
        } else {
            // Handle other types of errors, if needed
            console.error('An error occurred:', error);
            dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with the server' });

        }
    }
};

const modifyListFavoriteCats = dispatch => async ({ userId, catId }) => {
    try {
        const response = await axios.post(`/favorite`, { userId, catId });
        console.log('catid', catId, 'userId', userId);
        dispatch({ type: 'MODIFY_FAVORITE_CATS', payload: response.data.favoriteCats });
        console.log(response.data);
    } catch (error) {
        console.log(error.response.data);

        if (error.response) {
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

export const { Provider, Context } = createDataContext(userReducer, { getFavoriteCats, modifyListFavoriteCats }, { listFavoriteCats: [] })
