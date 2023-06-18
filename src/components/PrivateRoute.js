import { Navigate } from "react-router-dom";
import { useAuth } from "hooks";

export const PrivateRoute = ({ component: Component, redirecTo = '/' }) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirecTo}/> : Component;
};

