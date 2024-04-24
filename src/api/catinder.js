import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';


const instance = axios.create({
    baseURL: 'https://819e-2001-ee0-4fc7-c210-70b2-1abf-87f7-ae0d.ngrok-free.app'
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