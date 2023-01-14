import { createBrowserRouter }  from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import MyAppliedJobs from "../../Pages/Home/AvailableJobs/MyAppliedJobs/MyAppliedJobs";
import Home from "../../Pages/Home/Home";
import PageNotFound from "../../Pages/Home/PageNotFound/PageNotFound";
import Login from "../../Pages/Login/Login";

import SingUp from "../../Pages/SignUp/SingUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <SingUp></SingUp>
            },
            {
                path: '/myappliedjob',
                element: <PrivateRoute><MyAppliedJobs></MyAppliedJobs></PrivateRoute> 
            },
            {
                path:'*',
                element: <PageNotFound></PageNotFound>
            }


        ]
    }
])

export default router