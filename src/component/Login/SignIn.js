import React, { useState } from 'react'
import Header from '../Header/Header'

const SignIn = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const handelForm =()=>{
       setIsSignInForm(!isSignInForm);

    }

  return (
    <div>
        <Header/>
       <div  className='absolute' >
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg'
            alt='back-pic'/> 
        </div>

 
            <form className='p-12 bg-black opacity-90 rounded-xl absolute my-36 w-1/3 mx-auto left-0 right-0 text-white '  >
            <h1 className='text-white px-4 text-xl font-bold'>
                {isSignInForm ? "Sign In" :"Sign Up"}
                </h1>
                {!isSignInForm &&<input type='email' placeholder='Enter your Full Name'  className='p-2 m-4 w-full bg-gray-800'/>}
                
                <input type='email' placeholder='Enter Your Email'  className='p-2 m-4 w-full bg-gray-800 '/>
                <input type='password' placeholder='Enter Your Password' className='p-2 m-4 w-full bg-gray-800'/>
                <button className= ' p-2 m-4 text-white w-full bg-red-900'  >{isSignInForm ? "Sign In" : "Sign Up"}</button>
                
              <p className='p-4 cursor-pointer' onClick={handelForm}>{isSignInForm ? "New on Netflix ? SignIn" :"Alreaday having An account ? Sign In "}</p>
                
            </form>
 
      </div>  
  )
}

export default SignIn