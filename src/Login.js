import React from 'react'
import './Login.css'
import logo from './assets/slacklogo.jpg'
import { Button } from '@mui/material'
import {auth , provider} from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [state , dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then(result=>{
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch(error=>{
            alert(error.message)
        })
    }
  return (
    <div className='login'>
       <div className='login_container'>
            <img src={logo} alt='Slack Logo'/>
            <h1>Sign in to the Talcafe!</h1>
            <p>Get in and join the world of true instant messaging!</p>
            <Button onClick={signIn}>Sign in with Google</Button>
       </div>
    </div>
  )
}

export default Login
