import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Header/Home/Home.jsx';
import Blog from './Components/Header/Blog/Blog.jsx';
import LogIn from './Components/Submission/LogIn/LogIn.jsx';
import Register from './Components/Submission/Register/Register.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import ViewRecipe from './Components/Cards/View recipes/ViewRecipe.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'login',
        element: <LogIn></LogIn>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'recipes/:id',
        element: <PrivateRoute><ViewRecipe></ViewRecipe></PrivateRoute>,
        loader: ({params}) => fetch(`https://chef-hunting-server-tazim212.vercel.app/recipes/${params.id}`)
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
