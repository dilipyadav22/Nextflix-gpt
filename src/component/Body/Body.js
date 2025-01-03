import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from '../Login/SignIn'
import Brows from '../Browse/Brows'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../../utils/userSlice';

const Body = () => {

    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<SignIn/>
        },
        {
            path:"/Browse",
            element:<Brows/>
        }
    ])
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const{uid , email, displayName} = user;
              dispatch(addUser({uid: uid, email:email, displayName:displayName}));
            } 
            else {
             
                dispatch(removeUser());
            }
          });
     
    }, [])
    

  return (
    <div>
        <RouterProvider router={appRouter}/>
        
    </div>
  )
}

export default Body