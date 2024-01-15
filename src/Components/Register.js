import React from 'react'
import { Link } from 'react-router-dom';
function Register() {
  
  return (
    <div className='h-screen w-screen  flex justify-center items-center'>
       <div className=' h-[30rem] w-[25rem]  text-white'>
        <form action='/register' method='POST' className=' flex flex-col justify-center text-center items-center'>
          <h1 className='font-extrabold m-4 text-3xl'>REGISTER</h1>
          <div>
           <input type="email" name="email" placeholder='Email' className='border-2 h-12 w-[20rem] m-4 rounded-3xl bg-black px-4' autoComplete='email'/>
          </div>
        
          <div>
           <input type="password" name="password" placeholder='Password' className='border-2 h-12 w-[20rem] m-4 rounded-3xl bg-black px-4' autoComplete='password'/>
          </div>
          <div className='h-12 w-[20rem] bg-white m-8 rounded-3xl flex justify-center'>
          <button type='submit' className='text-2xl font-extrabold text-black'>REGISTER</button>
          </div>
          <div>
             <p>Already have an account? <Link to="/login" className='font-bold'>Login here</Link></p>
          </div>
        </form>
       </div>
    </div>
  )
}

export default Register
