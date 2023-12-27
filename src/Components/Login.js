import React from 'react'

function Login() {
  return (
    <div className='h-screen w-screen bg-white flex justify-center items-center'>
       <div className=' h-[30rem] w-[25rem] border-2 shadow-lg'>
        <form action='/login' method='POST'>
          <div>
           <input type="email" placeholder='Email' className='border-2 h-12 w-20'/>
          </div>
        
          <div>
           <input type="password" placeholder='Password' className='border-2 h-12'/>
          </div>
         
          <button type='submit'>Submit</button>
        </form>
       </div>
    </div>
  )
}

export default Login
