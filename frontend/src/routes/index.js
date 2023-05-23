import AddElement from "../pages/AddElement";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";

export const ROUTES = [
    {
        path: "/",
        element:<MainRoot/>,
        children:[
            {
                path:"",

                element:<Home/>
            },
            {
                path:"addelement",

                element:<AddElement/>
            }
        ]
    }
]