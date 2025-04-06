import Dasboard from "./pages/Dasboard";
import Home from "./pages/Home";
import Login from "./pages/Login";

type RouteTypes = {
    path: string
    element: React.ReactNode
}[]

const routes: RouteTypes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/dashboard",
        element: <Dasboard />
    }
    , {
        path: "/login",
        element: <Login />
    }

]

export default routes;