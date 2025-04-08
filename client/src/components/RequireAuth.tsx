import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

type RequireAuthProps = {
    children: React.ReactNode
    redirectTo: string
}

const RequireAuth = ({ children, redirectTo }: RequireAuthProps) => {
    const { user } = useAuth();
    return user ? children : <Navigate to={redirectTo} />
}

export default RequireAuth;