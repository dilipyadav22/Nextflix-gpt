import React, { useState , useRef } from 'react';
import Header from '../Header/Header';
import {checkValidation} from "../../utils/Validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../../utils/userSlice';
import { Avter_Logo } from '../../utils/constant';
const SignIn = () => {
    const dispatch =useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState();
    const email = useRef(null)
    const password = useRef(null);
    const name = useRef(null);

    const handelButtonSubmit = ()=>{
      // console.log(email.current.value);
      // console.log(password.current.value);

      const message = checkValidation(email.current.value , password.current.value);
      setErrorMessage(message);
      if(message) return;

      if(!isSignInForm){
              createUserWithEmailAndPassword(
                auth, 
                email.current.value , 
                password.current.value,
                name.current.value,
              )
                .then((userCredential) => {
                  // Signed up 
                  const user = userCredential.user;
                        updateProfile(user, {
                          displayName: name.current.value,
                           photoURL:Avter_Logo,
                        }).then(() => {
                           const{uid , email, displayName,photoURL} = auth.currentUser;
                            dispatch(addUser({uid: uid, email:email, displayName:displayName, photoURL:photoURL}));

                          // ...
                        }).catch((error) => {
                          setErrorMessage(error.message);
                          // ...
                        });


                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // ..
                  setErrorMessage(errorCode +"-"+ errorMessage);
                });
                    
       }

       else{
            signInWithEmailAndPassword(auth, email.current.value , password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode +"-"+ errorMessage);
            });
          }
   }

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

 
            <form onSubmit ={(e) => e.preventDefault()} 
             className='p-12 bg-black opacity-90 rounded-xl absolute my-36 w-1/3 mx-auto left-0 right-0 text-white '  >
                 <h1 className='text-white px-4 text-xl font-bold'>
                  {isSignInForm ? "Sign In" :"Sign Up"}
                 </h1>

                {!isSignInForm && ( 
                 <input  ref={name}
                 type='text' name='fullname' placeholder='Enter your Full Name'  className='p-2 m-4 w-full bg-gray-800'
                 />
                )}
                
                <input ref={email}
                 type='email'name='email'
                  placeholder='Enter Your Email' 
                  className='p-2 m-4 w-full bg-gray-800 '
                 />

                <input ref={password}
                 type='password' name='password' 
                 placeholder='Enter Your Password'
                  className='p-2 m-4 w-full bg-gray-800'
                 />

                 <p className='px-4 p-2 text-red-800 text-lg font-medium' >{errorMessage}</p>

                <button
                 className= ' p-2 m-4 text-white w-full bg-red-900' 
                 onClick={handelButtonSubmit}  >
                  {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                
              <p className='p-4 cursor-pointer' onClick={handelForm}>{isSignInForm ? "New on Netflix ? SignIn" :"Alreaday having An account ? Sign In "}</p>
                
            </form>
 
      </div>  
  )
}

export default SignIn