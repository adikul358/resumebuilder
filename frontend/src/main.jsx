import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Landing from './Landing.jsx'
import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';
import Dashboard from './Dashboard.jsx';
import Create from './Create.jsx';

const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/create", element: <Create /> },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
