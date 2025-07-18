import { useAuthContext } from "./AuthContext";

export const useAuth = () => {
  const { user, login, logout, doGetMe, loading } = useAuthContext();

  return { user, login, logout, doGetMe, loading };
};
