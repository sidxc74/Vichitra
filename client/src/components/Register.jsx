import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className=' mt-36  mx-auto'>
        <div className="flex w-3/5 mx-auto flex-col my-auto justify-center items-center  bg-white text-black border-2 border-gray-200 rounded-2xl">
      <div className="my-10 w-full flex justify-around  items-center ">
        <div>
          <div className="mx-auto inline-block ">
            <img src="logo.ico" alt="Logo" />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <label
            htmlFor="fullname"
            className="mb-1 inline-block font-semibold text-black"
          >
            *Full Name
          </label>
          <input
            id="fullname"
            type="text"
            name="fullName"
            placeholder="Enter your FullName"
            className="mb-4 rounded-lg border bg-transparent w-64 px-3 py-2"
            required
          />
          <label
            htmlFor="email"
            className="mb-1 inline-block font-semibold text-black"
          >
            *Email
          </label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Enter your email or username"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2 w-64"
            required
          />
          <label
            htmlFor="password"
            className="mb-1 inline-block font-semibold text-black"
          >
            *Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your Password"
            className="mb-4 rounded-lg border bg-transparent w-64 px-3 py-2"
            required
          />
          <label
            htmlFor="username"
            className="mb-1 inline-block font-semibold text-black"
          >
            *Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Enter your Username"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2 w-64"
            required
          />
          <label
            htmlFor="avatar"
            className="mb-1 inline-block font-semibold text-black"
          >
            *Avatar
          </label>
          <input
            id="avatar"
            type="file"
            name="avatar"
            placeholder="Enter a avatar"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2 w-64"
          />
          <label
            htmlFor="coverImage"
            className="mb-1 inline-block font-semibold text-black"
          >
            Cover Image
          </label>
          <input
            id="coverImage"
            type="file"
            name="coverImage"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2 w-64"
          />

          
          <button className="bg-red-600 px-4 py-3 text-white font-semibold">Sign Up</button>
          <p className="text-black mt-8">Already an user? <Link to="/signup" className='text-red-700 font-semibold'>Sign in!!</Link></p>
          <p className='text-sm font-semibold text-red-700  translate-y-8'>* marked fields are Required</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Register;