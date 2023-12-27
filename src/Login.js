import React from 'react'
import './Login.css'
import logo from './assets/slacklogo.jpg'
import { Button } from '@mui/material'

function Login() {
  return (
    <div className='login'>
       <div className='login_container'>
            <img src={logo} alt='Slack Logo'/>
            <h1>Sign in to the Den!</h1>
            <Button>Sign in with Google</Button>
       </div>
    </div>
  )
}

export default Login
