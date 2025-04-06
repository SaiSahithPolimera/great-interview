import { AuthError, Session, User } from "@supabase/supabase-js";
import { createContext, useEffect, useState } from "react";
import supabase from "../lib/supabase";

type AuthContextType = {
    session: Session | null
    user: User | null
    setSession: (value: React.SetStateAction<Session | null>) => void
    setUser: (value: React.SetStateAction<User | null>) => void
    signOut: () => Promise<{ error: AuthError | null }>
}

const initialState: AuthContextType = {
    session: null, user: null, setSession: () => { }, setUser: () => { }, signOut: () => Promise.resolve({ error: null })
}

const AuthContext = createContext<AuthContextType>(initialState);


export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [session, setSession] = useState<Session | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setSession(data.session);
            setUser(data.session?.user || null);
        });
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (_, session) => {
                setSession(session);
                setUser(session ? session.user : null);
            }
        );
        return () => {
            authListener.subscription.unsubscribe();
        };
    })

    const signOut = () => supabase.auth.signOut();

    const value = {
        session,
        user,
        signOut,
        setSession,
        setUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;