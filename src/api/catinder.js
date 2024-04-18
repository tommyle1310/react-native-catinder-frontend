import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';


const instance = axios.create({
    baseURL: 'https://be0a-2001-ee0-4fc7-c210-f1d9-fcd2-9a6d-e8.ngrok-free.app'
})

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance