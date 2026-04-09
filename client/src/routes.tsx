import Dasboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";

type RouteTypes = {
    path: string
    element: React.ReactNode
    errorElement: React.ReactNode
}[]

const routes: RouteTypes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/dashboard",
        element: <Dasboard />,
        errorElement: <Error />
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />
    },
]

export default routes;
