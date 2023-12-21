import { createBrowserRouter } from "react-router-dom";

import Error from "../Pages/Error/Error";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import PrivateRoute from "./PrivateRoute";


const Routes = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error></Error>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> </PrivateRoute>,
        children: [
            // Admin Related Routes           
            
            
            
        ]
    }
])

export default Routes;