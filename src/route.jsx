import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Pages/MainLayout/MainLayout";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Profile from "./Pages/Profile/Profile";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/blog',
                element:<Blog/>,
            },
            {
                path:'/profile',
                element:<Profile/>,
            }
        ]
    }
])
export default router