import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth";

const LoginButton = () => {
  const { user, signOut } = useAuth();
  if (!user) {
    return <Link to={"/login"} className="bg-white text-black px-1.5 py-1.5 text-sm rounded-lg cursor-pointer hover:bg-white/80 ease-in-out duration-150">Login</Link>
  }
  return (
    <button onClick={signOut} className="bg-white text-black px-1.5 py-1.5 text-sm rounded-lg cursor-pointer hover:bg-white/80 ease-in-out duration-150">Logout</button>
  )
}

export default LoginButton