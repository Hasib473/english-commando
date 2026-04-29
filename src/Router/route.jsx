import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Enrollment from "../Pages/Enrollment";
import Login from "../Pages/Login";
import Methodology from "../Pages/Methodology";
import SuccessStory from "../Pages/SuccessStory";
import Pricing from "../Pages/Pricing";

const router = createBrowserRouter([
    {
        path: '/',
        Component:MainLayout,
        children:[
            {
                index:true,
                Component: Home
            },
            {
                path: '/methodology',
                Component: Methodology
            },
            {
                path: '/success-stories',
                Component: SuccessStory
            },
            {
                path: '/pricing',
                Component: Pricing
            },
            {
                path: '/enrollment',
                Component:Enrollment
            },
            {
                path: '/login',
                Component:Login
            }
        ]
    }
])
 
export default router;
