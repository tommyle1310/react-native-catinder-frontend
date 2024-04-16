import React, { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import AuthForm from '../../components/AuthForm';
import { Context as AuthContext } from '../../context/authContext';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage, checkUserAlreadyLoggedIn } = useContext(AuthContext)
    useEffect(() => {
        checkUserAlreadyLoggedIn()
    }, [])
    return (
        <>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm
                btnTitle='Login'
                onSubmit={({ email, password }) => { signin({ email, password }) }}
                title='Sign In'
                errorMessage={state.errorMessage}
                titleDesc='Enter your details to log in.'
                switchPage={{
                    text: `Don't have an account? `, linkLbl: 'Sign Up', link: () => {
                        navigation.navigate('Signup');
                    }
                }}
            />
        </>
    )
}

SigninScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({

})

export default SigninScreen;
