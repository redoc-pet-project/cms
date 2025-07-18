import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";
import Loading from "~/components/Loading";

export const PrivateRoute: React.FC = () => {
    const { user, loading } = useAuth();

    
    if (loading) {
        return <Loading/>
    }
    return user ? <Outlet /> : <Navigate to="/login" replace />;
};