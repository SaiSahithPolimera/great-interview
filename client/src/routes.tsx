import RequireAuth from "./components/RequireAuth";
import Dasboard from "./pages/Dasboard";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Interview from "./pages/Interview";
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
        element:
            <RequireAuth redirectTo="/login">
                <Dasboard />
            </RequireAuth>,
        errorElement: <Error />
    }
    , {
        path: "/login",
        element: <Login />,
        errorElement: <Error />
    },
    {
        path: "/interview/:name",
        element:
            <RequireAuth redirectTo="/login">
                <Interview />
            </RequireAuth>,
        errorElement: <Error />
    },
]

export default routes;