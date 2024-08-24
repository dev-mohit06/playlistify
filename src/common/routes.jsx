import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import SignIn from "../pages/SignIn.jsx";
import Callback from "../pages/Callback.jsx";

const routes = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                path : '/sign-in',
                element : <SignIn/>
            },
            {
                path : '/next',
                element : <Callback/>
            }
        ]
    }
]);

export default routes;