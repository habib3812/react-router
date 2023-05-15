
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// stap 1
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Firends from './components/Firends';
import Firest from './components/Firest';
import Home from './components/Home';
import FriendsDetels from './components/FriendsDetels';

// stap 2 :- Create a router with an array of route objects

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   },
// ]);

// Render the app using ReactDOM.createRoot

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Firest></Firest>
      }, {
        path: '/firends',
        element: <Firends></Firends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'friend/:friendId',
        element: <FriendsDetels></FriendsDetels>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: '*',
        element: <i>404</i>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* stap:-3  Wrap the RouterProvider around the App */}
    {/* <Heder></Heder> */}
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
