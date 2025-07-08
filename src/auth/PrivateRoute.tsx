import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";

export const PrivateRoute: React.FC = () => {
    const { user } = useAuth();

    return user ? <Outlet /> : <Navigate to="/login" replace />;
};