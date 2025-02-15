import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser ,removeUser} from '../../utils/userSlice';
import { Avter_Logo } from '../../utils/constant';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handelClose = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(() => {
   const unSubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const{uid , email, displayName,photoURL} = user;
          dispatch(addUser({uid: uid, email:email, displayName:displayName, photoURL:photoURL}));
          navigate("/browse");

        } 
        else {
         
            dispatch(removeUser());
            navigate('/');
        }
      });
      return ()=> unSubscribe();
 
},[])

  return (
    <div className='p-4  px-12 bg-gradient-to-b from-black z-10 absolute w-full  flex items-center justify-between' >
        <img src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo-pic' className='w-[250px]' />

       {user&& (
       <div className='flex items-center gap-5'>
        <img src={Avter_Logo} className='h-8' alt="logo-of-avter"/>
          <button className='text-white bg-blue-600 px-3 py-1 rounded-lg' onClick={handelClose}>Sign Out</button>
          <p className='font-medium text-white text-xl'>{user?.displayName}</p>
        </div>)}
    </div>
  )
}

export default Header