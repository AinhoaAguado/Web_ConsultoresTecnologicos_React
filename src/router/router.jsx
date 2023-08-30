import { createBrowserRouter } from "react-router-dom"; 
import Root from "./root";
import Home from "../routes/home";
import CardCoder from "../components/CardCoder";


export const router = createBrowserRouter([ 
    {
    path: "/",
    element: <Root/>,
    children: [
            {       
                path: "/",
                element: <Home/>,
            },
            {       
                path: "/coder",
                element: <CardCoder/>,
            },
        ]
    }
]) 