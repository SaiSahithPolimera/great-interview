import { useBlocker, useLocation, useNavigate, useParams, Link } from "react-router-dom"
import vapi from "../lib/vapi";
import { useEffect, useState } from "react";
import { AIMic, HangUp, Loader } from "../components/Icons";
import { useAuth } from "../hooks/useAuth";
import { Tables } from "../lib/database.types";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

const Interview = () => {
  const { user } = useAuth();
  const { name } = useParams();
  const navigate = useNavigate();
  const [connected, setConnected] = useState<boolean>(false);
  const [ended, setEnded] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [isSpeaking, setSpeaking] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const messages: string[] = [];
  const blocker = useBlocker(({ currentLocation, nextLocation }) => error !== "" || currentLocation.pathname !== nextLocation.pathname);
  const location = useLocation();
  const { interview }: { interview: Tables<"interviews"> } = location.state;
  const url = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    const getAssitant = async (): Promise<CreateAssistantDTO | undefined> => {
      try {
        const res = await fetch(`${url}/api/create-assitant`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(interview) })
        const assistantOptions = await res.json();
        return assistantOptions;
      }
      catch (err) {
        setError("Internal server error");
        console.error(err);
        return;
      }
    }
    if (!connected) {
      getAssitant().then((assistantOptions) => {
        if (assistantOptions) {
          startCallInline(assistantOptions);
        }
      }).catch((err) => {
        setError("Error occured while creating assistant try again");
        console.error(err);
      });
    }

    vapi.on("call-start", () => {
      setEnded(false);
      setConnected(true);
    });

    vapi.on("call-end", () => {
      setConnected(false);
      setEnded(true);
    });

    vapi.on("speech-start", () => {
      setSpeaking(true);
    });

    vapi.on("speech-end", () => {
      setSpeaking(false);
    });

    vapi.on("message", (msg) => {
      if (msg.type === "transcript") {
        messages.push(msg.transcript);
        setMessage(msg.transcript);
      }
    })

    vapi.on("error", (error) => {
      console.error(error);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startCallInline = (assistantOptions: CreateAssistantDTO) => {
    vapi.start(assistantOptions);
  };

  const endCall = () => {
    navigate("/dashboard");
    vapi.stop();
  };

  return (
    blocker.state === "blocked" ? (
      <section className="  relative overflow-scroll min-h-screen bg-slate-950"><div className="absolute  p-8 flex flex-col gap-3 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="animate-jump-in absolute backdrop-blur-sm top-80 self-center border=[1px] px-6 py-4 rounded-lg flex gap-4 flex-col border-[1px] border-slate-700" >
          <p className="text-white">Are you sure you want to leave?</p>
          <div className="flex justify-around">
            <button className="text-black bg-white rounded-lg px-2 py-1 hover:bg-white/60 cursor-pointer ease-in-out duration-75" onClick={() => {
              endCall();
              blocker.proceed();
            }}>
              Proceed
            </button>
            <button className="text-white bg-red-500 rounded-lg px-2 py-1 cursor-pointer hover:bg-red-400 ease-in-out duration-75" onClick={() => blocker.reset()}>
              Cancel
            </button>
          </div>
        </div>
      </div></section>
    ) :
      <section className="relative overflow-scroll min-h-screen bg-slate-950"><div className="absolute  p-8 flex flex-col gap-3 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        <p className="first-letter:capitalize text-lg text-shadow-md font-semibold text-white">{name?.split("-").join(" ")}</p>
        {
          !connected && !ended ?
            <div className="flex-grow self-center justify-center items-center text-white flex gap-2 cursor-pointer">{error ? <div className="flex flex-col gap-2 items-center">{error} <Link to="/dashboard" className="text-black bg-white rounded-lg px-2 py-1 hover:bg-white/60 cursor-pointer ease-in-out duration-75">Go back</Link></div> : <><Loader /> Please wait</>} </div>
            :
            (
              <>
                <div className="flex gap-2 flex-grow-6  ">
                  <div className="flex flex-grow items-center justify-center border-[2px] border-slate-800 rounded-xl">
                    <div className={` size-22 opacity-50 rounded-full absolute ${isSpeaking ? 'animate-ping bg-slate-600' : ''}`}></div>
                    <div className="text-white bg-gradient-to-l z-10 cursor-pointer from-stone-800 via-slate-600 to-slate-670 p-2 rounded-full">
                      <AIMic />
                    </div>
                  </div>
                  <div className="flex flex-grow items-center justify-center border-[2px] border-slate-800 rounded-xl">
                    {user?.user_metadata.avatar_url ? <img src={user?.user_metadata.avatar_url} className="w-12 rounded-full cursor-pointer" referrerPolicy="no-referrer" alt="avatar" /> : <div className=" px-4 py-2.5 font-semibold rounded-full flex text-lg text-black bg-white cursor-pointer">{user?.user_metadata.name[0]}</div>}
                  </div>
                </div>
                <div className="text-white items-center flex-grow-1 flex justify-center text-md">{message}</div>
                <div className="text-white flex-grow-0 self-center">
                  {!ended && <button onClick={endCall} className="bg-red-700 px-2 text-md py-0.5 rounded-full hover:bg-red-600 ease-in-out duration-150 cursor-pointer" >
                    <HangUp />
                  </button>}
                </div>
              </>
            )
        }
      </div ></section >
  )
}

export default Interview