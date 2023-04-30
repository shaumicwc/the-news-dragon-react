import { Navigate, createBrowserRouter } from "react-router-dom";
import Category from "../pages/Home/Category/Category";
import News from "../pages/News/News/News";

import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";
import Main from "../layout/Main";
import NewsLayout from "../layout/NewsLayout";
import LoginLayout from "../layout/LoginLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }, 
            {
                path: 'terms', 
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://react-news-dragon-server-shaumicwc.vercel.app/categories/${params.id}`)
            }
        ]
    }, 
    {
        path: 'news', 
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://react-news-dragon-server-shaumicwc.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;