import { useContext, useEffect, useState } from 'react'

import { Context as AuthContext } from '../context/authContext'

const useRetrieveUserInfo = () => {
    const { getUserInfo } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    useEffect(() => {
        const getInfo = async () => {
            const getInfo = async () => {
                const { email, username } = await getUserInfo()
                setEmail(email)
                setUsername(username)
            };
            getInfo();
        };

        getInfo();
    }, []);
    return [username, email]
}

export default useRetrieveUserInfo