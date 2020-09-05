import React from 'react';
import './css/Login.css';
import { Button } from '@material-ui/core';
import { provider, auth } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

const Login = () => {

    const [state, dispatch] = useStateValue()

    const SignIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                });
            })
            .catch(err => alert(err.message))
    };
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="facebooklogo" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="fblogo" />
            </div>
            <Button
                type="submit"
                onClick={SignIn}
            >Sign In</Button>
        </div>
    );
};

export default Login
