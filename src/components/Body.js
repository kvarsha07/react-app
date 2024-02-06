import React from 'react';
import Login from './Login';
import Browse from './Browse';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

function Body () {

  const appRoute = createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path :'/browse',
      element:<Browse/>
    }
  ])

  return (
    <div>
      <RouterProvider router={appRoute}></RouterProvider>   
    </div>
  )
}

export default Body;
