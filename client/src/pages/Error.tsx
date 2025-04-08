import { useNavigate } from "react-router-dom"
import { ErrorCircle } from "../components/Icons"

const Error = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-scroll min-h-screen bg-slate-950"><div className="absolute flex flex-col items-center justify-center bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <ErrorCircle/>
          <p className="text-white text-lg">Looks like this page does not exist</p>
        </div>
        <button className="text-white bg-slate-800 border-[1px] border-slate-600 p-2 rounded-lg hover:bg-slate-900 ease-in-out duration-150 cursor-pointer" onClick={() => navigate(-1)}>Go back</button>
        </div>
    </div></section>
  )
}

export default Error