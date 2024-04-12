import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Pages/MainLayout/MainLayout";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Profile from "./Pages/Profile/Profile";
import HomeDetail from "./Component/MainComponent/HomeDetail";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import ProtectRoute from "./Pages/ProtectRoute/ProtectRoute";
import Update from "./Component/SharedComponent/Update";

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
            },
            {
                path:'/home/:id',
                loader:()=>fetch('houses.json'),
                element:<ProtectRoute><HomeDetail/></ProtectRoute>
            },
            {
                path:'/login',
                element:<Login/>,
              
            },
            {
                path:'/registration',
                element:<Registration/>
            },
            {
                path:'/update',
                element:<Update/>
            }
        ]
    }
])
export default router