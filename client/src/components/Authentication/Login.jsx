// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useAuth} from '../../state/serverState.js';
import { loginApi } from '../../api/users.api.js';
import useAuthStore from '../../state/clientState.js';
import {useNavigate} from 'react-router-dom'

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const loginMutation = useAuth();
    const navigate = useNavigate()

    const handleLogin = (e) => {
        
         loginMutation.mutate({formData : formData,callbackFn: loginApi},
          {
            onSuccess : (data) => {

                
                sessionStorage.setItem('isAuth',JSON.stringify(data))
                
                navigate('/')
            },
            onError : () => {
              console.log('its not')
            }
          }
          )
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className='mt-64 mx-auto'>
            <div className="flex w-3/5 mx-auto flex-col my-auto justify-center items-center bg-white text-black border-2 border-gray-200 rounded-2xl">
                <div className="my-10 w-full flex justify-around items-center">
                    <div>
                        <div className="mx-auto inline-block">
                            <img src="logo.ico" alt="Logo" />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <label
                            htmlFor="email"
                            className="mb-1 inline-block font-semibold text-black"
                        >
                            Email*
                        </label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email or username"
                            className="mb-4 rounded-lg border bg-transparent px-3 py-2 w-64"
                        />
                        <label
                            htmlFor="password"
                            className="mb-1 inline-block font-semibold text-black"
                        >
                            Password*
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your Password"
                            className="mb-4 rounded-lg border bg-transparent w-64 px-3 py-2"
                        />
                        <button className="bg-red-600 px-4 py-3 text-white font-semibold" onClick={handleLogin}>Sign in</button>
                        <p className="text-black mt-8">New here? <Link to="/register" className='text-red-700 font-semibold'>Sign Up!!</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
