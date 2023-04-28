import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children : [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/categories/:id',
                element: <Category/>
            }
        ]
    }
])

export default router;