import React from 'react'
import google from "../Assets/google.png";
import account from "../Assets/account.png";
import signout from "../Assets/login-.png";
import studio from "../Assets/hexagon.png";
import dollar from "../Assets/dollar.png";
import setting from "../Assets/gear.png";
import help from "../Assets/question.png";
import feedback from "../Assets/feedback.png";
import data from "../Assets/book.png";
import theme from "../Assets/moon.png"; 
import lang from "../Assets/translation.png";
import restrict from "../Assets/restricted-area.png";
import location from "../Assets/globe.png";
import keyboard from "../Assets/keyboard.png";

function User() {
  return (
      <>
        <div className="text-white w-full flex flex-col justify-evenly">
         <div className='flex'>
            <div className='h-8 w-8 bg-indigo-900 rounded-full flex justify-center items-center mx-4'>
                <p className='!text-xl'>K</p>
            </div>
            <div>
            <p>Karuna Mathur</p>
            <p>@karunamathur</p>
            </div>
         </div>
         <hr />
         <div>
         <div className='flex my-2'>
            <img src={google} alt='google' className='mx-5'/>
            <p>Google account</p>
         </div>

         <div className='flex my-2'>
            <img src={account} alt='Switch' className='mx-5'/>
            <p>Switch account</p>
         </div>
           
         <div className='flex my-2'>
            <img src={signout} alt='signout' className='mx-5'/>
            <p>Sign out</p>
         </div>
        
         </div>
         <hr />
         <div>
         <div className='flex my-2'>
            <img src={studio} alt='studio' className='mx-5'/>
            <p>YouTube Studio</p>
         </div>
         <div className='flex my-2'>
            <img src={dollar} alt='purchase' className='mx-5'/> 
            <p>Purchases and membership</p>
         </div>
           
         </div>
         <hr />
         <div>
         <div className='flex my-2'>
            <img src={data} alt='data' className='mx-5'/> 
            <p>Your data in YouTube</p>
         </div>
         <div className='flex my-2'>
            <img src={theme} alt='theme' className='mx-5'/> 
             <p>Appearance</p>
         </div>
         <div className='flex my-2'>
            <img src={lang} alt='language' className='mx-5'/> 
            <p>Language</p>
         </div>
         <div className='flex my-2'>
            <img src={restrict} alt='retrict' className='mx-5'/> 
            <p>Ristricted Mode</p>
         </div>
         <div className='flex my-2'>
            <img src={location} alt='location' className='mx-5'/> 
            <p>Location</p>
         </div>
         <div className='flex my-2'>
            <img src={keyboard} alt='keyboard' className='mx-5'/> 
            <p>Keyboard Shortcuts</p>
         </div>
             
         </div>
         <hr />
         <div>
         <div className='flex my-2'>
            <img src={setting} alt='settings' className='mx-5'/> 
            <p>Settings</p>
         </div>
           
         </div>
         <hr />
         <div>
         <div className='flex my-2'>
            <img src={help} alt='help' className='mx-5'/> 
            <p>Help</p>
         </div>
         <div className='flex my-2'>
            <img src={feedback} alt='send feedback' className='mx-5'/> 
            <p>Send Feedback</p>
         </div>
           
            
         </div>
          </div>
      </>
  )
}

export default User
