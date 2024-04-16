import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import AuthForm from '../../components/AuthForm';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../../context/authContext';


const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext)

    return (
        <>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm
                btnTitle='Sign Up'
                onSubmit={({ email, password, username }) => { signup({ email, password, username }) }}
                title='Sign Up'
                errorMessage={state.errorMessage}
                titleDesc='Welcome to Cantinder. Write some information about you...'
                switchPage={{ text: `Already have an account? `, linkLbl: 'Sign In', link: () => { navigation.navigate('Signin') } }}
            />
        </>
    )
}

SignupScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({

})

export default SignupScreen;
