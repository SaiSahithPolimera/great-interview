import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth";

const LoginButton = () => {
  const { user, signOut } = useAuth();

  if (!user) {
    return <Link to={"/login"} className="bg-white text-black px-1.5 py-1.5 text-sm rounded-lg cursor-pointer hover:bg-white/80 ease-in-out duration-150">Login</Link>
  }
  return (
    <div className="flex gap-2 items-center">
      {user?.user_metadata.avatar_url ? <img src={user?.user_metadata.avatar_url} className="w-8 rounded-full" referrerPolicy="no-referrer" alt="avatar" /> : <div>{user.user_metadata.name[0]}</div>}
      <button onClick={signOut} className="bg-white text-black px-1.5 py-1.5 text-sm rounded-lg cursor-pointer hover:bg-white/80 ease-in-out duration-150">Logout</button>
    </div>
  )
}

export default LoginButton