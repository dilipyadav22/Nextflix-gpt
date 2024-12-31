import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from '../Login/SignIn'
import Brows from '../Browse/Brows'
const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<SignIn/>
        },
        {
            path:"/Browser",
            element:<Brows/>
        }
    ])

  return (
    <div>
        <RouterProvider router={appRouter}/>
        
    </div>
  )
}

export default Body