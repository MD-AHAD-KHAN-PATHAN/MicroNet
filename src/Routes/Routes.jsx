import { createBrowserRouter } from "react-router-dom";

import Error from "../Pages/Error/Error";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import DashBoards from "../Pages/DashBoards/DashBoards";
import Update from "../Pages/Updata/Update";
import Terms from "../Pages/Terms&Condition/Terms";
import About from "../Pages/About/About";


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
            {
                path: '/dashboard',
                element: <PrivateRoute> <DashBoards></DashBoards> </PrivateRoute>,
            },
            {
                path: '/update/:id',
                element: <PrivateRoute> <Update></Update> </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/task/update/${params?.id}`)
            },
            {
                path: '/terms&conditions',
                element: <Terms></Terms>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
])

export default Routes;