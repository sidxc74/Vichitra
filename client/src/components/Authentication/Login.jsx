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

    const {mutate , isPending, isError, error} = useAuth();
    const navigate = useNavigate()

    const handleLogin = (e) => {
        
         mutate({formData : formData,callbackFn: loginApi},
          {
            onSuccess : (data) => {

                
                sessionStorage.setItem('isAuth',JSON.stringify(data ? data : ""))
                
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

    const handleGuest = () => {
        setFormData((_) => ({
            email : "guest@gmail.com",
            password : "guest123"
        }))
    }

    
    return (
        <div className=' min-h-[100vh] flex justify-center items-center bg-gradient-to-r from-red-600 via-red-700 to-black'>
        <div className='w-3/5'>
            <div className="flex w-full  flex-col my-auto justify-center items-center bg-white text-black border-2 border-gray-200 rounded-2xl">
                <div className="my-10 w-full flex justify-around items-center">
                    
                        
                            <img src="vichitralogo.png" className='w-2/5 object-cover'  alt="Logo" />
                        
                    
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
                        <button className="bg-red-600  w-24 h-10 rounded-3xl  text-white font-semibold" onClick={handleLogin}>
                            {
                            isPending ? 
                            <svg
                aria-hidden="true"
                role="status"
                class="mr-2 inline-block h-5 w-5 animate-spin text-gray-800"
                viewBox="0 0 100 101"
                fill="red"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="white"></path>
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="red"></path>
              </svg>
              : "sign in"
                            
                            }
                            
                            </button>
                            <button className='bg-red-600 mt-4  text-center p-2 rounded-3xl  text-white font-semibold'
                              onClick={handleGuest}
                            >Get Guest Credentials</button>

                        <p className="text-black mt-3">New here? <Link to="/register" className='text-red-700 font-semibold'>Sign Up!!</Link></p>
                        {isError && <p className=' text-red-600 text-[12px] font-semibold mt-4'>{error?.response?.data?.message || "Network Error"}</p>
                            
                        }

                        
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    );
}

export default Login;
