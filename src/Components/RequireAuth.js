import { Navigate, useAuth, useLocation } from 'react-router-dom'

const RequireAuth = ({ children }) => {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;