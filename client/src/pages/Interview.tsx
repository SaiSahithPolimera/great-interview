import { useBlocker, useLocation, useNavigate, useParams, Link } from "react-router-dom"
import vapi, { startInterview, stopInterview } from "../lib/vapi";
import { useEffect, useState } from "react";
import { AIMic, HangUp, Loader } from "../components/Icons";
import { useAuth } from "../hooks/useAuth";
import { Tables } from "../lib/database.types";

const Interview = () => {
  const { user } = useAuth();
  const { name } = useParams();
  const navigate = useNavigate();
  const [connected, setConnected] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [isSpeaking, setSpeaking] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [transcript, setTranscript] = useState<string[]>([]);
  const [isStarting, setIsStarting] = useState<boolean>(false);

  const blocker = useBlocker(({ currentLocation, nextLocation }) => error !== "" || currentLocation.pathname !== nextLocation.pathname);
  const location = useLocation();
  const { interview }: { interview: Tables<"mock_interviews"> } = location.state || {};
  const url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    vapi.on("call-start", () => {
      setConnected(true);
      setIsStarting(false);
    });

    vapi.on("call-end", () => {
      setConnected(false);
    });

    vapi.on("speech-start", () => {
      setSpeaking(true);
    });

    vapi.on("speech-end", () => {
      setSpeaking(false);
    });

    vapi.on("message", (msg: { type?: string; transcript?: string }) => {
      if (msg.type === "transcript") {
        const transcriptText = msg.transcript ?? "";
        setMessage(transcriptText);
        setTranscript(prev => [...prev, transcriptText]);
      }
    });

    vapi.on("error", (err: unknown) => {
      console.error(err);
      setError("An error occurred during the call.");
      setIsStarting(false);
    });

    return () => {
      vapi.removeAllListeners();
    };
  }, []);

  const handleStartInterview = async () => {
    setIsStarting(true);
    setError("");
    try {
      const res = await fetch(`${url}/api/interview/create-assistant`, { 
        method: "POST", 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(interview) 
      });
      
      if (!res.ok) {
        throw new Error("Failed to create assistant");
      }
      
      const assistantOptions = await res.json();
      
      const assistantId = assistantOptions.assistantId || assistantOptions.id || assistantOptions;
      
      startInterview(assistantId);
    } catch (err) {
      setError("Error occurred while starting the interview.");
      console.error(err);
      setIsStarting(false);
    }
  };

  const handleEndInterview = () => {
    stopInterview();
    navigate("/feedback", { state: transcript });
  };

  return (
    blocker.state === "blocked" ? (
      <section className="relative overflow-scroll min-h-screen bg-slate-950">
        <div className="absolute p-8 flex flex-col gap-3 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="animate-jump-in absolute backdrop-blur-sm top-80 self-center border=[1px] px-6 py-4 rounded-lg flex gap-4 flex-col border-[1px] border-slate-700">
            <p className="text-white">Are you sure you want to leave?</p>
            <div className="flex justify-around">
              <button className="text-black bg-white rounded-lg px-2 py-1 hover:bg-white/60 cursor-pointer ease-in-out duration-75" onClick={() => {
                handleEndInterview();
                blocker.proceed();
              }}>
                Proceed
              </button>
              <button className="text-white bg-red-500 rounded-lg px-2 py-1 cursor-pointer hover:bg-red-400 ease-in-out duration-75" onClick={() => { blocker.reset(); }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </section>
    ) : (
      <section className="relative overflow-scroll min-h-screen bg-slate-950">
        <div className="absolute p-8 flex flex-col gap-8 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
          <p className="first-letter:capitalize text-lg text-shadow-md font-semibold text-white">{name?.split("-").join(" ")}</p>
          
          <div className="flex flex-col flex-grow items-center justify-center gap-6">
            {!connected && !isStarting && (
              <div className="flex flex-col gap-4 items-center">
                {error && <div className="text-red-400">{error}</div>}
                {error && <Link to="/dashboard" className="text-black bg-white rounded-lg px-2 py-1 hover:bg-white/60 cursor-pointer">Go back</Link>}
                
                <button 
                  onClick={handleStartInterview} 
                  className="bg-green-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-500 transition-colors cursor-pointer text-lg shadow-lg hover:shadow-green-500/20"
                >
                  Start Interview
                </button>
              </div>
            )}

            {isStarting && (
              <div className="flex flex-col gap-4 items-center text-white">
                <Loader />
                <p>Connecting to AI voice agent...</p>
              </div>
            )}

            {connected && (
              <>
                <div className="flex gap-8 w-full max-w-2xl">
                  <div className="flex flex-grow items-center justify-center border-[2px] border-slate-800 rounded-xl p-8 relative">
                    <div className={`w-32 h-32 opacity-50 rounded-full absolute ${isSpeaking ? 'animate-ping bg-slate-600' : ''}`}></div>
                    <div className="text-white bg-gradient-to-l z-10 from-stone-800 via-slate-600 to-slate-700 p-6 rounded-full shadow-xl">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <AIMic />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-grow items-center justify-center border-[2px] border-slate-800 rounded-xl p-8">
                    {user?.user_metadata?.avatar_url ? 
                      <img src={user?.user_metadata?.avatar_url} className="w-24 h-24 rounded-full shadow-xl" referrerPolicy="no-referrer" alt="avatar" /> : 
                      <div className="w-24 h-24 font-bold rounded-full flex items-center justify-center text-4xl text-black bg-white shadow-xl">
                        {user?.user_metadata?.name?.[0] || 'U'}
                      </div>
                    }
                  </div>
                </div>
                
                <div className="text-white text-center text-lg min-h-16 flex items-center justify-center max-w-2xl px-4 italic opacity-80">
                  {message || "Recording..."}
                </div>
                
                <button 
                  onClick={handleEndInterview} 
                  className="bg-red-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-red-500 transition-colors cursor-pointer text-lg flex items-center gap-2 shadow-lg hover:shadow-red-500/20"
                >
                  <HangUp /> End Interview
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    )
  )
}

export default Interview
