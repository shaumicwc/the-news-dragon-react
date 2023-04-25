import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children : [
            {
                path:'/',
                element: <Home/>
            }
        ]
    }
])

export default router;