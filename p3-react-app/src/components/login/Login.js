import React from 'react'
import './Login.css';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';

const Login = () => {
  return (
    <div>
        <section className='login'>
            <div className='login-container'>
                <h2>Login</h2>
                <div className='form-control-container'>
                    <input type='text'
                    placeholder = 'Username' />

                    <div className='password'>
                    <input type = "Username"
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

export default Login