import React from 'react'
import './Login.css';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
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
  navigate('/add'); 
}

export default Login