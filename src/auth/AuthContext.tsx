
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { IUser } from "~/types/userTypes";
import { getMe, performLogin } from "./authService";

interface IAuthContext {
    user: IUser | null;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
    doGetMe: () => Promise<IUser | null>
    loading: boolean;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const init = async () => {
            const me = await doGetMe();
            setUser(me);
            setLoading(false);
        };
        init();
    }, []);

    const login = async (username: string, password: string) => {
        const wasLoggedIn = await performLogin(username, password);
        if (!wasLoggedIn) return false;
        const user = await doGetMe();
        return !!user;
    }

    const doGetMe = async (): Promise<IUser | null> => {
        const user = await getMe()
        setUser(user);

        return user;
    }

    const logout = () => {
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ user, login, logout, doGetMe, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuthContext must be used within AuthProvider');
    return context;
};