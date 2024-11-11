import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('email', email)
        console.log('password', password)

        setEmail('');
        setPassword('');
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={(e) =>{ submitHandler(e) }} className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                 type='email' className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey' placeholder='Enter your email'/>
                <input
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                type='password'
                className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 mt-3 rounded-full placeholder:text-grey'
                placeholder='Enter password'/>
                <button className='text-white border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey mt-9'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login