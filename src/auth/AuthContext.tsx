
import { createContext, useContext, useState, type ReactNode } from "react";
import type { IUser } from "~/types/userTypes";
import { performLogin } from "./authService";

interface IAuthContext {
    user: IUser | null;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);

    const login = async (username: string, password: string) => {
        const user = await performLogin(username, password);
        setUser(user);
        return !!user;
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuthContext must be used within AuthProvider');
    return context;
};