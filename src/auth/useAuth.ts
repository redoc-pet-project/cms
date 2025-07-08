import { useAuthContext } from "./AuthContext";

export const useAuth = () => {
    const { user, login, logout } = useAuthContext();

    return { user, login, logout }
}