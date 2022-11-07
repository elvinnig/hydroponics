import React from 'react'
import './LoginPage.css';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';

const LoginPage = () => {
  return (
    <div className='background'>
          <h1 classname="logo">T̳̿͟͞O̳̿͟͞U̳̿͟͞R̳̿͟͞e̳̿͟͞c̳̿͟͞k̳̿͟͞o̳̿͟͞</h1>
        <section className='login'>
            <div className='login-container'>
                <h2>Login</h2>
                <div className='form-control-container'>
                    <input type='text'
                    placeholder = 'Username' />

                    <div className='password'>
                    <input type = "password"
                    placeholder='Password'/>
                    <div className='icon-eye'>
                    <AiOutlineEye /> 
                    </div>
                    </div>
                    <button className="button-login">Login</button>
                </div>   
                
            </div>
        </section>
    </div>
  )
}

export default LoginPage