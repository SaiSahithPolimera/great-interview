import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import supabase from '../lib/supabase'
import { useEffect } from 'react'
import Logo from '../components/Logo'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
    const { setUser, setSession, session } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            if (session) {
                setUser(session.user);
                navigate('/dashboard');
            }
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            if (session) {
                setUser(session.user);
                navigate('/dashboard');
            }
        })

        return () => subscription.unsubscribe()
    }, [])

    if (!session) {
        return (
            <section className="relative min-h-screen bg-slate-950">
                <div className="absolute text-white flex flex-col items-center justify-center bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
                    <Logo />
                    <Auth
                        supabaseClient={supabase}
                        providers={["google"]}
                        appearance={{ theme: ThemeSupa }}
                        theme='dark'
                        redirectTo={window.location.origin + '/dashboard'}
                    />
                </div>
            </section>
        )
    }

    return <div className="flex items-center justify-center h-screen">Redirecting to dashboard...</div>
}

export default Login;