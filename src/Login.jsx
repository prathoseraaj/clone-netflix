import React from 'react'
import './Login.scss';


const Login = () => {
  return (
    <div className='login'>
        <div className='top'>
            <div className="login-wrapper">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="." />
            </div>
        </div>
        <div className="login-container">
            <form action="">
                <h1>Sign In</h1>
                <input type="text" placeholder='Email or Phone number' />
                <input type="text" placeholder='Password' />
                <button className='button'>Sign In</button>
                <span>New to Netflix?<b> Sign up now.</b></span>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you are a bot.<b>Learn More </b>
                </small>
            </form>
        </div>
    </div>
  )
}

export default Login